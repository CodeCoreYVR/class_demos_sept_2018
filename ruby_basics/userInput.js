const rl = require('readline');

const interface = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

interface.question("What is your name? ", (name) => {
  console.log('Hey! ' + name);
});

console.log("Hello");
