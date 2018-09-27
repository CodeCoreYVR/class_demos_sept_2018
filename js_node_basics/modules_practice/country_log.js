const countries = require("./countries.js");

countries.forEach ( (country) => {
  console.log(`${country} - ${country.length}`);
});

for(let country of countries) {
  console.log(`${country} - ${country.length}`);
}