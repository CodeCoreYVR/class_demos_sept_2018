const http = require('http');
const url = require('url');

const server = http.createServer( (request, response) => {
  const params = url.parse(request.url, true).query;
  const tempInC = (params.temp - 32) * 5 / 9;
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(`<!DOCTYPE html>
                <html>
                <head>
                  <title>Temp converter</title>
                </head>
                <body>
                  <h1>${tempInC}</h1>
                </body>
              </html>`);
  response.end();
});

server.listen(8080);
console.log('server is up and running on port 8080');