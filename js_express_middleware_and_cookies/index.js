const path = require("path");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

// the express package returns a function that can be called to generate
// an instance of the Express application.
// we build our web application by calling different functions to the
// `app` object
const app = express();

// this registers EJS as our default `view engine` meaning that when you
// attempt to render templates, it will look for a matching file with `.ejs` extension
// with a folder named `views`
app.set("view engine", "ejs");

// MIDDLEWARE

// LOGGER
// when we call `app.use` we're registering a `middleware` that works well
// with Express.js. The middleware can be a function we write ourselves, or it
// can be a `plugin` (Node Module) like morgan which we installed using the `npm install`
// command
app.use(morgan("dev"));

// BODY PARSER
// When setting the option "extended" to `true`, express
// will support arrays and objects as data in addition
// to strings and numbers from forms.
app.use(bodyParser.urlencoded({ extended: true }));

// STATIC ASSETS
// Use `path.join` to combine strings into directory paths.
// Example:
// path.join("/", "Users", "bob") // "/Users/bob"

// `__dirname` is a global variable available in Node
// that returns the full directory path beginning from the
// root (i.e. /) of your computer to the file where `__dirname`
// is located.

// The static assets middleware will take all files and directories
// inside a specified path and serve them all as URLs to the web.
// This allows to send images, css files, js files, videos, etc.
console.log("__dirname in ./index.js:", __dirname);
app.use(express.static(path.join(__dirname, "public")));

app.use((request, response, next) => {
  console.log(">>>>");
  console.log(">>>>");
  next();
});

app.get("/hello_world", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/", (request, response) => {
  const name = request.query.name;
  // this will render a file called: welcome.ejs (because ejs is our default view engine)
  // within a folder called `views` (by convention)
  response.render("welcome", { visitorName: name });
});

app.get("/survey", (request, response) => {
  response.render("survey");
});

app.post("/survey/results", (request, response) => {
  response.render("surveyResult", {
    name: request.body.fullName,
    color: request.body.color
  });
});

app.use((request, response, next) => {
  console.log("#####");
  console.log("#####");
  next();
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
