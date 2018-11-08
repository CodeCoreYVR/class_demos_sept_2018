// Demo: Promisify Reading a File

const fs = require("fs");

// fs.readFile(<path>, <encoding-str>, <callback>)
// - <path> is a path to a file
// - <encoding> is usually "utf8" if it's a text file
// - <callback> a function to use the read data from a file

// Intended usage:
// readFile("demo.js", "utf8").then(data => console.log(data));

const readFile = (path, encoding) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (error, data) => {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

// readFile("demo.js", "utf8").then(data => console.log(data));

// This function is called created and called at the same time
// to be able to await freely inside this part of the script.
(async () => {
  console.log(await readFile("demo.js", "utf8"));
})();
