const fs = require("fs");

const myText = 'Hello CodeCore Students!';

fs.writeFile("FileOutput.txt", myText, (err) => {
  if(err) {
    console.log(`could not write to a file ${err}`);
  }
});