/*
 * intervals.js
 * Intervals and Timeouts in javascript
 */

//******************************************************************************//
/*
 * setInterval(callback, time) : repeats the callback function every *time* ms
 * clearInterval(timer) : stops a corresponding setInterval callback
 */

var repeatingFunction = setTimeout(writePing,1000);

function writePing(){
	console.log("Ping");
}


//******************************************************************************//

//******************************************************************************//
/*
 * setTimeout(callback, time) : delays the callback function for *time* ms
 * clearTimeout(timer) : stops a corresponding setTimeout callback
 */