const http = require('http');
const url  = require('url');

const server = http.createServer( (request, response) => {
  // this parses the HTTP params (anything after the `?` in the URL)
  // what we get back is a JS object based on the query. for instace.
  // if the user makes a request to. http://.../abc?name=john&age=10
  // params will look like: { name: "John", age: "10" }
  const params = url.parse(request.url, true).query;
  response.writeHead(200, { 'Content-Type': 'text/html '});
  response.write(`<!DOCTYPE html>
                  <html>
                  <head>
                    <title>My First Node.js HTTP server</title>
                  </head>
                  <body>
                    <h1>Welcome to my Awesome Page!</h1>
                    <h2>Hello ${params.name}</h2>
                  </body>
                </html>
                `);
  response.end(); // send the response with head and body above to client
});

server.listen(5001);
console.log('HTTP server up and running on port 5001');
