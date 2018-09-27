function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

// in Node.js we can export anything to be used 
// when this file is imported using `require` in some other 
// file
module.exports = { addFn: add, multiplyFn: multiply };