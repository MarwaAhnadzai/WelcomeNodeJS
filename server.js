const http = require('http');
const colors = require('colors');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1 style="color:green">Welcome to SYST10199</h1>');
  res.write('<h1 style="color:red">Welcome to Node JS</h1>');
  res.end();
});

const port = 8080;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
