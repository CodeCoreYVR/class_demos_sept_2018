// JS: Higher-Order Functions

// Arrow Functions

// Exercise: To Arrow

// function add(a, b) {
//   return a + b;
// }

// const add = (a, b) => {
//   return a + b;
// };

const add = (a, b) => a + b;

// function flip(fn) {
//   return function(a, b) {
//     return fn(b, a);
//   };
// }

// const flip = fn =>
//   function(a, b) {
//     return fn(b, a);
//   };

const flip = fn => (a, b) => fn(b, a);

// function V(x) {
//   return function(y) {
//     return function(z) {
//       return z(x)(y);
//     };
//   };
// }

const V = x => y => z => z(x)(y);

// Arrow functions can't be used as a constructor.
// They do not have a `prototype` property.

V.prototype === undefined; // true

// Arrow functions' `this` works differently. It can't be changed.
// It's determined at the time the function is created
// instead of at the time the function is used.
// It will always be the `this` of the surrounding
// block of code.

const myArrow = () => this;
const myFunc = function() {
  return this;
};

console.log("myFunc:", myFunc());
console.log("myArrow:", myArrow());

const myObject = {
  myProp: "A property value",
  myArrow: myArrow,
  myFunc: myFunc,
  myInlineArrow: () => this,
  myMethod() {
    const myFunc = function() {
      return this;
    };
    const myArrow = () => this;

    console.log("--- Inside myObject.myMethod() ---");
    console.log("myFunc:", myFunc());
    console.log("myArrow:", myArrow());
  }
};

console.log("myObject.myFunc():", myObject.myFunc());
console.log("myObject.myArrow():", myObject.myArrow());
console.log("myObject.myInlineArrow():", myObject.myInlineArrow());
myObject.myMethod();

// Higher-Order Functions

// Demo: Loud Function
// Exercise: Custom Logger

const five = () => 5;

const loud = (logFn, fn, ...args) => {
  logFn(`Calling ${fn.name}`);
  const value = fn(...args);
  // The above translates to the code below
  // const value = fn(args[0], args[1], args[2], args[3], ...);
  logFn(`Called ${fn.name} & returned ${value}`);
  return value;
};

// Example:

loud(console.log, five);
loud(console.warn, add, 5, 10);

loud(console.error, add, 5, 6);
// Calling add
// Called add & returned 11
loud(val => console.log(`🔥 ${val} 🔥`), add, 5, 6);
// 🔥 Calling add 🔥
// 🔥 Called add & returned 11 🔥

// Use gather (i.e. ...) to get any number of arguments from
// from function as values in an array.
const allArgs = (...myArgs) => myArgs;
allArgs(9, 10, 11, 12); // (4) [9, 10, 11, 12]
allArgs(9, 10, 11, "dasdsa", {}); // (5) [9, 10, 11, "dasdsa", {…}]
allArgs(); // []

// To do the reverse, that is pass values of array as arguments
// to a function use the same symbol `...`. This is called spread.
Math.max(...[1, 2, 3]); // 3
Math.max(...[1, 2, 3, ...[5, 6, 7]]); // 7

// Demo: Higher-order function: Each

// [1,2,3,4].forEach(v => console.log(v))
const each = (fn, arr) => {
  // for (let val of arr) {
  //   fn(val);
  // }

  for (let i = 0; i < arr.length; i += 1) {
    fn(arr[i], i);
  }
};

each((val, index) => console.log("Val:", val, "Index:", index), [
  1,
  2,
  3,
  4,
  5,
  6
]);
// Logs the following:
// Val: 1 Index: 0
// Val: 2 Index: 1
// Val: 3 Index: 2
// Val: 4 Index: 3
// Val: 5 Index: 4
// Val: 6 Index: 5
each(
  function(val) {
    return console.log(val ** 2);
  },
  [1, 2, 3]
);

// Exercise: Higher-order functions: Map

const map = (fn, arr) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    newArr.push(fn(arr[i], i));
  }

  return newArr;
};

// Example usage:

map(v => v ** 2, [1, 2, 3, 4, 5]); // (5) [1, 4, 9, 16, 25]
map(v => `Hello, ${v}!`, ["Jon", "Jim", "Jane"]);
// (3) ["Hello, Jon!", "Hello, Jim!", "Hello, Jane!"]
map((v, i) => v.repeat(i), ["a", "b", "c", "d", "e"]);
// (5) ["", "b", "cc", "ddd", "eeee"]

// Asynchronous Functions

// setTimeout

function setTimeoutDemo() {
  let count = 0;
  console.log("Before setTimeout:", count);

  setTimeout(() => {
    count += 1;
    console.log("Inside first setTimeout cb:", count);
  }, 1000);

  console.log("After setTimeout:", count);

  setTimeout(() => console.log("After 2 seconds:", count), 2000);
}

// When calling `setTimeout` it returns an integer, this number
// can be used to cancel the `setTimeout` with the `clearTimeout` function.

const timeoutId = setTimeout(() => console("BOOM!"), 2000);
clearTimeout(timeoutId);

// There's `setInterval` that is similar to `setTimeout`, but
// calls the callback every `delay` in milliseconds.
const intervalId = setInterval(() => console.log("Every 1s"), 1000);
// Also, cancellable
clearInterval(intervalId);

// Variable Scoping Demos

function letDemo() {
  let i = "Bye!";
  console.log(i);
  {
    if (true) {
      {
        i = "Hello!";
      }
    }
  }
  console.log(i);
}

function varDemo() {
  (function() {
    var i = 10;
  })();

  console.log(i);
}

function strangeVarDemo() {
  // var i;
  for (var i = 0; i < 3; i += 1) {
    // setTimeout(() => console.log("var is", i), 200);
    console.log("var is", i);
  }

  // var is 0
  // var is 2
  // var is 4 ...
  for (let j = 0; j < 10; j += 2) {
    setTimeout(() => console.log("var is", j), 200);
  }

  // 👇 fix for for-var with setTimeout
  for (var k = 0; k < 3; k += 1) {
    // Use a IIFE, but take in `k` as an argument to it
    (function(kInside) {
      setTimeout(() => console.log("var is", kInside), 200);
    })(k);
  }
}
