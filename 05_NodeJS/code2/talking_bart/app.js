//the child_process library let's us execute command line commands, https://nodejs.org/api/child_process.html
var exec = require('child_process').exec;
//This variable stores the command we want to execute, we are going to use the say command
var say = 'say ';

//create a bart oobject that queries the API every 5 seconds
var bart = require('bart').createClient({"interval":20000});

//let's make a function that speaks
function speak(whatosay){
  //speak the string
  exec(say + whatosay);
  //log it to the console
  console.log(whatosay)
}


function queryBart(){
//choose which bart staion to to monitor, station abbreviations are here: http://api.bart.gov/docs/overview/abbrev.aspx
bart.on('powl', function(estimates){
   //log the results to the console
   console.log(estimates); 
   // store the results in some variables
   var nextTrainNorth = "next train in " + estimates[0].minutes;
   var destSouth = "Dest: " + estimates[0].destination;
   // call the function
   speak(nextTrainNorth + " minutes" + " destination is " + estimates[5].destination + " Direction is " + estimates[5].direction);
   }, 5000);
}

queryBart();

