var osc = require('node-osc');

//import express 
var express = require('express');
//create express object named app
var app = express();

//instantiate a server on port 3000
var server = app.listen(3000);
var io = require('socket.io')(server);

//expose the local public folder for inluding files js, css etc..
app.use(express.static('public'));

//on a request to / serve index.html
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

var oscServer = new osc.Server(8001, '10.2.0.124');
oscServer.on("message", function(msg, rinfo) {
    console.log("TUIO message:");
    console.log(msg);
    var ctrl = msg[0];
    var data = msg[1];
    if (ctrl == '/2/push1' && data == 1) {
        console.log("beep");
        io.sockets.emit('data', "beep1");
    } else if (ctrl == '/2/push2' && data == 1) {
        console.log("beep2");

        io.sockets.emit('data', "beep2");
    } else if (ctrl == '/2/push3' && data == 1) {
        console.log("beep3");

        io.sockets.emit('data', "beep3");
    } else if (ctrl == '/2/push4' && data == 1) {
        console.log("beep4");
        io.sockets.emit('data', "beep4");
    }

});

