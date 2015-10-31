var assert = require("assert")

//Static data for testing
var fakedata = JSON.parse('{"root":{"uri":["http://api.bart.gov/api/etd.aspx?cmd=etd&orig=DBRK"],"date":["09/12/2012"],"time":["11:51:25 PM PDT"],"station":[{"name":["Downtown Berkeley"],"abbr":["DBRK"],"etd":[{"destination":["Fremont"],"abbreviation":["FRMT"],"estimate":[{"minutes":["18"],"platform":["2"],"direction":["South"],"length":["3"],"color":["ORANGE"],"hexcolor":["#ff9933"],"bikeflag":["1"]},{"minutes":["39"],"platform":["2"],"direction":["South"],"length":["6"],"color":["ORANGE"],"hexcolor":["#ff9933"],"bikeflag":["1"]}]},{"destination":["Richmond"],"abbreviation":["RICH"],"estimate":[{"minutes":["12"],"platform":["1"],"direction":["North"],"length":["3"],"color":["ORANGE"],"hexcolor":["#ff9933"],"bikeflag":["1"]},{"minutes":["37"],"platform":["1"],"direction":["North"],"length":["3"],"color":["ORANGE"],"hexcolor":["#ff9933"],"bikeflag":["1"]},{"minutes":["60"],"platform":["1"],"direction":["North"],"length":["6"],"color":["ORANGE"],"hexcolor":["#ff9933"],"bikeflag":["1"]}]}]}],"message":[{}]}}');


describe('Bart', function(){
    var bart = require('../lib/bart').createClient();
    
    beforeEach(function(){
        bart.emitter.removeAllListeners('dbrk');
    });
    
    //Create a custom poller so we can return our own data
    function TestPoller(station){
        this.station = station;
        this.interval = 1000;
    }
    TestPoller.prototype = new bart.pollerObj("dbrk");
    TestPoller.prototype.constructor = TestPoller;

    TestPoller.prototype.getData = function(url, cb){
        return cb.call(this, null, fakedata);
    }

    it('should emit data when polling', function(done){
        var testpoller = new TestPoller("dbrk");
        bart.pollers["dbrk"] = testpoller;
        
        //Set up the emitter first.
        bart.on('dbrk south', function(data){
            assert.ok(data.length === 2);
            bart.emitter.removeAllListeners('dbrk');
            done(); //Test will timeout if there's no data
        });
        testpoller.poll();
    });
    
    it('should throw an error when passing in an invalid station code', function(done){
        
        bart.on('error', function(err){                
            assert.ok(err.toString().indexOf("is not a valid BART station code") > -1, "Station error message was different");
            bart.emitter.removeAllListeners('error');
            done();
        });

        bart.on('foo', function(data){
            assert.ok(!data, "Found data");                
            assert.equal(Object.keys(bart.pollers).length, 0);
            done("Got back data with invalid bart station code");
        });
        
    });
    
    it('should throw an error when using an invalid API key', function(done){
        var origKey = bart.apiKey;
        //console.log(origKey)
        bart.apiKey = "foo"
        bart.on('error', function(err){                
            assert.ok(err.toString().indexOf("Invalid key") > -1, "API Key error message was different. Got: " + err);
            bart.emitter.removeAllListeners('error');
            bart.apiKey = origKey;
            done();
        });
        
        bart.on('mont', function(data){
            assert.ok(!data, "Found data");                
            done("Got back data with invalid bart api key");
        });
    });
});