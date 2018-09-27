const fs = require("fs");

const args = process.argv.slice(2);
const fileName = args[0];

fs.readFile(fileName, (err, data) => {
  if (err) {
    console.log(`can't read file ${err}`);
  } else {
    const lines = data.toString().split('\n');
    const linesWithNumbers = [];
    for(let i = 0; i < lines.length; i++) {
      linesWithNumbers.push(`${i + 1}   | ${lines[i]}`);
    }
    console.log(linesWithNumbers.join('\n'));

    // `neater` solution
    // console.log (data
    // .toString()
    // .split('\n')
    // .map( (item, i) => `${i}   | ${item}`)
    // .join(`\n`));
  }
});