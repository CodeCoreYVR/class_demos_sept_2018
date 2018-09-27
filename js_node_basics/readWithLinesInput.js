const readline = require('readline');
const addLines = require('./addLineNumbers.js');
const fs       = require("fs");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interface.question('What is the file path?', (filePath) => {
  fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    console.log(addLines(data));
    process.exit();
  });
});