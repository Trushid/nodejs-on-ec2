var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Automatedade file everything again'); //write a response to the client
  res.end(); //end the response
}).listen(5000); //the server object listens on port 5000
