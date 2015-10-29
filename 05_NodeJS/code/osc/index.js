var osc = require('node-osc');

var oscServer = new osc.Server(8001, '192.168.1.211');
oscServer.on("message", function(msg, rinfo) {
    console.log("TUIO message:");
    console.log(msg);
});
