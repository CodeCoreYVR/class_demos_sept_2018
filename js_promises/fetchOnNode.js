// To use "fetch" on Node.js, you must install the "node-fetch"
// which is implementation of "fetch" from the browser.
// This will allow to make web requests from Node.js
// by calling the function. It works the same the the browser's
// with fewer limitations.
const fetch = require("node-fetch");

(async () => {
  const response = await fetch(
    "https://jobs.github.com/positions.json?description=javascript&location=new+york"
  );

  const data = await response.json();

  console.log(data);
})();
