/*
* A simple example.
*/

var bart = require('../lib/bart');

bart.on('dbrk', function(estimates){
    console.log(estimates);
});

bart.on('error', function(err){
    console.log(err);
});