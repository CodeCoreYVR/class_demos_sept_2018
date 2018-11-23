const path = require("path");

module.exports = {
  mode: "development",
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
    client: "./src/client.js"
    // server: "./src/server.js"
  },
  output: {
    // `path` property is used to specify the location where
    // our bundle files will be created.
    path: path.join(__dirname, "public"),
    // `filename` property specifies the name of bundles.
    // Use `[name]` in the value to interpolate
    // the name of the entry specified by the keys
    // of the `entry` property object.
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader",
        options: {
          outputPath: "images/"
        }
      }
    ]
  }
};
