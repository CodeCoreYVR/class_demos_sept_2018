const readLine = require("readline");

const interface = readLine.createInterface( {
  input: process.stdin,
  output: process.stdout
});

interface.question('What did you have for breakfast?', (answer) => {
  console.log(`Ewwww! I don't like ${answer}`);
  process.exit();
});