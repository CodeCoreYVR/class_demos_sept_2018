const net = require('net');

const client = net.Socket();

client.on('data', (data) => {
  console.log(`data received from server: ${data}`);
  process.exit();
});

client.connect(5000, '127.0.0.1', () => {
  client.write('Hello from client');
});