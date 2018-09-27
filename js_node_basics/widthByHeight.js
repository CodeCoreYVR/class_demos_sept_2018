const args = process.argv.slice(2);
const fs = require("fs");
const size = args.map( (item) => parseInt(item) );

let myStar = "";

for(let i = 0; i < size[0]; i++) {
  for(let j = 0; j < size[1]; j++) {
    myStar += "*"
  }
  myStar += '\n';
}

const fileName = `${size[0]}_by_${size[1]}`;

fs.writeFile(fileName, myStar, (err) => {
  if(err) {
    console.log(`Could not write file ${err}`);
  } else {
    console.log(`writing to file ${fileName} done!`);
  }
})

console.log('abc');