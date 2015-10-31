var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var request = require('request');
var events = require('events');

//BART station codes
var codes = require('./codes');

var ETDAPIURL_PREFIX = "http://api.bart.gov/api/etd.aspx?cmd=etd&orig=";
function Bart(options){
    var options = (options || {});
    var bart = this;

    /**
     * Convenience function to smash two objects together.
     * @param obj1
     * @param obj2
     * @returns obj3, a merged object
     */
    function merge_objects(obj1,obj2){
        var obj3 = {};
        for (var attrname1 in obj1) { obj3[attrname1] = obj1[attrname1]; }
        for (var attrname2 in obj2) { obj3[attrname2] = obj2[attrname2]; }
        return obj3;
    }

    var apiKey = this.apiKey = (options.apiKey || options.apikey || "MW9S-E7SL-26DU-VV8V");
    var emitter = this.emitter = new events.EventEmitter();

    function Poller (station){
        this.interval = (parseInt(options.interval, 10) || 60000);
        this.station = station.toLowerCase();
    }

    /**
     *  Sets a poll interval and calls getData
     *  @param url The API URL to poll
     *  @returns null
     */
    Poller.prototype.poll = function(url){
        var self = this;
        self.getData(url, self.handleData); //Grab initial data before setting interval.

        //Only start polling if we have an interval.  Maybe we just want to poll once?
        if(self.interval){
            this.pollInterval = setInterval(function(){
                self.getData(url, self.handleData);
            }, self.interval);
        }else{
            console.log("No interval set, polled once");
        }

    };

    /**
     *  Makes a request to a url.  Emits error upon err.
     *  @param url The API URL to make a request to.
     *  @param dataHandler A callback function to handle data; pass (err, data)
     *  @returns null or an emitter upon error.
     */
    Poller.prototype.getData = function(url, dataHandler){
        var self = this;
        request.get(url, function (err, res, data) {
            if(err){ return emitter.emit('error', err); }
            parser.parseString(data, function (err, result) {
                if(result.root && result.root.message && result.root.message[0].error){
                    err = new Error(result.root.message[0].error[0].text);
                }
                
                if(err){ return emitter.emit('error', err); }
                dataHandler.call(self, null, result);
            });
        });
    };

    /**
     *  Changes the xml2js JSON into something useful and emits events.
     *  @param err
     *  @param data
     *  @returns null
     */
     Poller.prototype.handleData = function(err,data){
        var self = this;
        if(err){
            clearInterval(self.pollInterval);
            return emitter.emit('error', err);
        }
        if(!data) return emitter.emit('error', "Could not get BART data");
        //In case of invalid API keys etc
        if(data.root.message && data.root.message[0].error){
            clearInterval(self.pollInterval);
            return emitter.emit('error',data.root.message[0].error[0]);
        }
        var etd = data.root.station[0].etd;
        var rootData = {
            "uri" : data.root.uri[0],
            "date" : data.root.date[0],
            "time" : data.root.time[0],
            "name" : data.root.station[0].name[0],
            "message" : data.root.message[0]
        };

        //BART has either stopped running for the night or they just don't have ETD for some reason.
        if(!etd){
             //Back off to a max of 10 minutes
            self.interval = (self.interval >= 600000) ? 600000 : (self.interval * 2);
            
            return emitter.emit('error', "No current ETD info available for " + self.station);
        }else{
            self.interval = (parseInt(options.interval, 10) || 60000); //hard-reset interval
        }

        //Synchronously split up northbound and southbound data
        var northBound = [];
        var southBound = [];
        etd.forEach(function(e){
            e.estimate.forEach(function(est){

                //Deal with the xml2js madness with a whole lotta [0]'s
                var destination = e.destination[0];
                var abbreviation = e.abbreviation[0];

                //The BART API is kinda silly in that it has the word "Leaving" when minutes hits 0.
                //"Leaving" isn't a number, so we make it 0.
                var minutes = (est.minutes[0] === "Leaving") ? 0 : parseInt(est.minutes[0], 10);
                var platform = est.platform[0];
                var direction = est.direction[0];
                var length = est.length[0];
                var color = est.color[0];
                var hexcolor = est.hexcolor[0];
                var bikeflag = !!est.bikeflag[0]; //A real bool!

                var info = merge_objects({
                    "station":self.station,
                    "destination":destination,
                    "abbreviation":abbreviation,
                    "minutes":minutes,
                    "platform":platform,
                    "direction": direction,
                    "length":length,
                    "color":color,
                    "hexcolor":hexcolor,
                    "bikeflag":bikeflag
                }, rootData);

                if(direction.toLowerCase() === "north"){
                    northBound.push(info);
                }else{
                    southBound.push(info);
                }
            });
        });
        //Emit direction-specific events
        if(northBound.length > 0){
            emitter.emit(self.station+" north", northBound); //Northbound events
        }
        if(southBound.length > 0){
            emitter.emit(self.station+" south", southBound); //Southbound events
        }

        //Emit general station event
        emitter.emit(self.station, northBound.concat(southBound)); //Generic station event

        //Reset queues
        northBound = [];
        southBound = [];
    };

    this.pollerObj = Poller; //This is for tests.  Kinda hacky, sigh.

    //Keep a dict of pollers in memory such that we only poll one station endpoint at a time,
    //regardless of how many listeners are bound to this station.
    var pollers = this.pollers = {};
    this.emitter.on('newListener', function(eventName, listener){
       if(eventName != "error"){
           var station = eventName.split(' ')[0].toLowerCase();

           if(codes.indexOf(station) === -1){
               bart.emitter.emit('error', station + " is not a valid BART station code.");
               bart.emitter.removeAllListeners(station);
               return;
           }

           //Create a "poller" for this particular station, but if we don't have one already
           if(!pollers[station]){
               var poller = pollers[station] = new Poller(station);
               poller.interval = (bart.interval || poller.interval);
               var url = ETDAPIURL_PREFIX+station.toUpperCase()+"&key="+bart.apiKey;               
               poller.poll(url);
           }
       }
    });
}

/**
 *  Event handler for
 *  @param eventName The event name to listen to
 *  @param listener A listener function for the emitter
 *  @returns the event emitter for more chaining
 */
Bart.prototype.on = function(eventName, listener){
    this.emitter.on(eventName, listener);
    return this.emitter;
}; 

exports.createClient = function(options){
    return new Bart(options);
};

