// var http = require('http');
// var server = http.createServer(function (request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.end("Hello World\n");
// });
// server.listen(80);
// console.log("Server running at http://127.0.0.1:80/");

import http from 'http';
const PORT = 80;

const server = http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello World\n');
});

server.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}/`)
);
