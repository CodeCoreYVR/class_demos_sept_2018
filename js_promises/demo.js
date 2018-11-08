// P R O M I S E S

// Demo: Returning Async.

function dropCounter(cbFn) {
  let counter = 0;

  const intervalId = setInterval(() => {
    counter += 1;
  }, 50);

  setTimeout(() => {
    clearInterval(intervalId);
    cbFn(counter);
  }, Math.random() * 5000);
}

// Creating Promises

// To create a Promise, use the Promise constructor. The constructor
// takes one required argument which is a callback that we
// usually name "resolver" or "executor".

//           👇 "resolver" callback
new Promise(() => {});

new Promise((resolve, reject) => {
  // The "resolver" callback gets two arguments:
  // - The first is function usually named "resolve".
  //   When called, it transitions the promise from its
  //   "pending" state to the "resolved" state. It accepts
  //   a single argument. If given, it will become the promise
  //   value.
  // - The second is a function usually named "reject".
  //   When called, it transitions the promise from its
  //   "pending" state to the "rejected" state. It accepts
  //   a single argument. If given, it will become the promise
  //   value.
});
//   We call "resolve" when some asynchronous has completed.
//   We call "reject" when some asynchronous has done something
//   wrong. This is how we throw an error.

new Promise((resolve, reject) => {
  // The first of "resolve" or "reject" that is called
  // will be the only one that can transition the promise
  // to another state from "pending". Any subsequent call
  // will be ignored.
  resolve("Am I first?");
  reject("OOPS!");
  resolve("Hello, World!");
});

// Demo: flipCoin

function flipCoin() {
  return new Promise((resolve, reject) => {
    const face = ["HEADS", "TAILS"][Math.floor(Math.random() * 2)];
    resolve(face);
  });
}

function random(n) {
  return Math.floor(Math.random() * n);
}

// Demo: throwCoin
function throwCoin() {
  let timeId = random(2000);
  console.time(`throwCoin ${timeId}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const face = ["HEADS", "TAILS"][random(2)];
      resolve(face);
      console.timeEnd(`throwCoin ${timeId}`);
    }, 1000 + random(2000));
  });
}

// Exercise: throwDie

function throwDie(numberOfFaces) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(random(numberOfFaces) + 1);
    }, random(2000) + 3000);
  });
}

// Using Promise Values

// To read a promise value when promise transitions from
// "pending" to "resolved", use the "then" prototype method
// of promnises.

throwCoin().then(promiseValue => {
  // This callback is only called once the promise
  // is resolved. It is passed a single argument, the promise value.
  console.log(promiseValue);
  // The then-callback is not called when the promise is
  // "rejected".
});

throwCoin()
  .then(face => `Coin face is: ${face}`)
  .then(text => [text])
  .then(arr => console.log(arr));

// The then method always returns a promise.

// When its then-callback returns a (non-promise) value, that
// value is used as the promise value of a newly returned promise.

// When its then-callback returns a promise, that promise
// is return from then directly.

throwCoin()
  .then(face => {
    console.log("First coin:", face);
    return throwCoin();
  })
  .then(promiseValue => console.log(promiseValue));

// Chaining then is useful when we need to execute a bunch promises
// in order because some functions calls depend on values from
// promises.

// We make a GET request to "http://www.recipepuppy.com/api"
if (false) {
  fetch("http://www.recipepuppy.com/api")
    // When complete, then-callback gets a promise value which
    // is the HTTP response in this case
    // The HTTP response contains JSON which may be a large amount
    // of data and could take some time to process it. For this reason,
    // the .json() returns promise.
    .then(res => {
      return res.json();
    })
    // The then-callback of the following gets the processed
    // json from the then-callback in the previous line.
    // We get the first recipe from the result and return from
    // this then-callback.
    .then(data => data.results[0])
    // In the next then-callback, we get the recipe as its promise
    // value.
    .then(recipe => console.log(recipe));

  let recipes;
  fetch("http://www.recipepuppy.com/api")
    .then(res => {
      return res.json();
    })
    .then(data => {
      recipes = data.results;
      return throwDie(9);
    })
    .then(dieResult => {
      return recipes[dieResult];
    })
    // .then(value => console.log(value))
    .then(console.log);
}

// The .catch method
// Use the .catch on promise with callback to react a promise
// that's been rejected.

throwCoin()
  .then(face => {
    return new Promise((resolve, reject) => reject("Oops"));
  })
  // The following then-callback can not get the value
  // of the promise above, because it's rejected.
  .then(value => console.log("value:", value))
  // Instead, to get that value, we must use catch with
  // a callback just like then.
  .catch(error => console.log("error:", error));
// In a sequence of promise use then in chain, you only need one
// catch at the capture any reject that might occur along the way.
// It will catch the first reject, because all further promises
// are skipped.

// Promise Methods

// Promise.all(<array-of-promises-or-non-promises>)
// Promise.all() takes a array of values then returns a promise.
// The return promise will resolve once all promise from the array
// have resolve where each of them execute in parallel.

function throwManyCoins() {
  return Promise.all([
    throwCoin(),
    throwCoin(),
    throwCoin(),
    throwCoin(),
    throwCoin()
  ]);
}

// Async / Await

// Any function can be declared as an "async" function.
// Within the body of an "async" function, you can wait for
// value of promise before proceeding to the next line code.
// This works as a expression. You can assign the value of
// promise a to a variable.

// It allows to treat asynchonous as if it's synchronous.

async function testAsync() {
  console.log("Throwing started");
  // In the line below throwCoin() returns a promise.
  // Normally, we would use .then to make of the value.
  // Instead, prefix it with the `await` which will force
  // JavaScript to wait a value received to continue allowing
  // to assign value to `firstCoin`.
  const firstCoin = await throwCoin();
  console.log("First coin done");
  const secondCoin = await throwCoin();
  console.log("Second coin done");
  const thirdCoin = await throwCoin();
  console.log("Third coin done");

  const coins = await Promise.all([
    throwCoin(),
    throwCoin(),
    throwCoin(),
    throwCoin()
  ]);
  console.log("4 coins done");

  // Because an "async" is inherently asynchronous, we're unsure
  // when a value might returned from it, it will always return a Promise.

  // To any code using this function, `firstCoin` will be return wrapped
  // inside a promise.
  return firstCoin;
}

// Valid ways to create async functions:

const myAsyncArrow = async () => {};
const myAsyncFn = async function() {};

const myObj = {
  async myAsyncMethod() {},
  mySyncMethod() {}
};

class MyClass {
  async myAsyncMethod () {}
}