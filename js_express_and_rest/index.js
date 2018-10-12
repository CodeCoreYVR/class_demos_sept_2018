const path = require("path");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");

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

// METHOD OVERRIDE
app.use(
  methodOverride((req, res) => {
    if (typeof req.body === "object" && req.body._method) {
      const httpMethod = req.body._method;
      delete req.body._method;

      // The value returned by this callback will be the method
      // used for this request. If it returns "DELETE", it will be
      // process as a delete.
      return httpMethod;
    }
  })
);

// COOKIE PARSER
app.use(cookieParser());

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

// CUSTOM USERNAME MIDDLEWARE
app.use((request, response, next) => {
  // Read cookies from the request with `request.cookies`
  // Cookies are represented as an object where each key is
  // the name of the cookie and its value the content of the cookie.
  // To use `request.cookies` or `response.cookie()` you must
  // first install "cookie-parser" middleware.

  // console.log("🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪");
  // console.log(request.cookies);
  // console.log("🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪");

  const username = request.cookies.username;
  // Properties set on `response.locals` become variables in
  // all rendered templates. This means the `username` can be used
  // as a variable inside the "welcome.ejs" or any other template.
  response.locals.username = "";

  if (username) {
    response.locals.username = username;
    console.log(`😎 Signed in as ${username}`);
  }

  // The third argument to middleare functions, `next`, is a function
  // that tells Express that this middleware has completed its work
  // and its time to call the next middleware in order.

  // The order in which middleware functions are executed is based on where
  // they're positioned in your code relative to other middleware functions.
  next();
});

app.use((request, response, next) => {
  console.log(">>>>");
  console.log(">>>>");
  next();
});

// ROUTERS

const postsRouter = require("./routes/posts");

app.use("/", postsRouter);

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

const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 5;
app.post("/sign_in", (request, response) => {
  // Pro Tip: Use `response.send` as alternative to
  // `console.log` to look at some JS objects in the browser.
  // response.send(request.body);

  const username = request.body.username;

  // `response.cookie(<cookie-name>, <cookie-value>, <options>)`
  // The above method is added to the `response` object by the
  // cookie parser middleware. Use to send cookies to the browser.
  // - The first arg. is a string that's the name of the cookie
  // - The second arg. is a value for the cookie which can be
  //   an object or an array.
  // - (optional) The last, options for the cookie.

  response.cookie("username", username, { maxAge: COOKIE_MAX_AGE });

  // Like `response.send` and `response.render`, `response.redirect` ends
  // the response. It tells browser to make GET request to a specified
  // location forcing the user to go to a new URL.
  response.redirect("/");
});

app.post("/sign_out", (request, response /*, next */) => {
  response.clearCookie("username");
  response.redirect("/");
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
