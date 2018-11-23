module.exports = {
  mode: "development"
  // You can specify "entry" files in multiplay ways.
  // An "entry" is a file webpack begins bundling modules
  // from.
  // entry: "./src/client.js"
  // Use an array for multiple entries where all entries
  // will be combined into one output file.
  // entry: ["./src/client.js", "./src/server.js"]
  // You can also use an object for single or multiple
  // entries. When doing so the keys will act as the names
  // of the output files where each key-value pair will
  // have an output.
  entry: {
    client: "./src/client.js",
    // server: "./src/server.js"
  },
};
