/*
* A fun little BART talker, kinda like the ones on the platform.
* Only works on a Mac!
*/

var exec = require('child_process').exec;
var bart = require('../lib/bart').createClient();

var speechQueue = [];

var say = function(estimates, voice){

    //Build two statuses, one for the next train, and one for the one after it.
    var status1;
    if(estimates[0].minutes <= 0){
        status1 = estimates[0].length + " car " + estimates[0].destination + " train now boarding platform " + estimates[0].platform;
    }else{
        status1 = estimates[0].length + " car " + estimates[0].destination + " train in " + estimates[0].minutes
            + (estimates[0].minutes > 1 ? " minutes." : " minute.");
    }

    var status2;
    if(estimates[1].minutes <= 0){
        status2 = estimates[1].length + " car " + estimates[1].destination + " train now boarding platform " + estimates[1].platform;
    }else{
        status2 = estimates[1].length + " car " + estimates[1].destination + " train in " + estimates[1].minutes
            + (estimates[1].minutes > 1 ? " minutes." : " minute.");
    }

    //Spit out the status lines to the console
    console.log(status1);
    console.log(status2);
    console.log();

    exec("say -v "+ voice + " " + status1, function(err, stdout, stderr){
        exec("sleep 1", function(e, o, r){
            exec("say -v "+ voice + " " + status2);
        });
    });
}

//Simulate the platform voices by adding an artificial delay via a queue.
var sayInterval = setInterval(function(){
    if(speechQueue.length > 0){
        item = speechQueue.shift();
        say(item.estimates, item.voice);
    }
}, 10000); //Polling the queue every 10 seconds, approx how long it takes for one of the voices to say a message.

bart.on('dbrk south', function(estimates){
    //  console.log(estimates)
    speechQueue.push({"estimates":estimates, "voice":"Victoria"});
});

bart.on('error', function(err){
   console.error(err);
});

console.log("BART talker is now running!");