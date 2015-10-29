// Load the http module to create an http server.
var http = require('http');

//create an array 7 greetings
var greeting = ["hello","hi","how are you","sup","yo","what's going on","hey"]

//create a function to get a random greeting
function randGreet(arr){
	//generate a random number between 0 - 7
	var val = Math.floor((Math.random() * 7) + 0);	
	//use val to get a random element from the array
	return arr[val];
}

// Configure our HTTP server to respond with a random greeting to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
  //return a random greeting
  response.end("<h1>" + randGreet(greeting) + "<h1>\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");

