const fs = require("fs");

fs.stat("FileOutput.txt", (err, stats) => {
  console.log(stats);
});