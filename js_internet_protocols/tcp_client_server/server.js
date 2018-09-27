const net = require('net');

const server = net.createServer ((socket) => {
  // when data is received on the server it will execute this callback
  // function and the data received will be passed as the argument `data`
  socket.on('data', (data) => {
    console.log(`data received from client: ${data}`);
    socket.write('Thank you for sending the data over');
  });
});

server.listen(5000, '127.0.0.1');
console.log('server is up and running on port 5000');
