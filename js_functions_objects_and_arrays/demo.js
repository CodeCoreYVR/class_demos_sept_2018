// Functions

// Exercise: Rude Bot

// To create a function, use the `function` keyword
// followed by a name (optional), then a () with
// arguments declared inside and {} for the body of
// the function where we write code to be executed later.

// In the function below, `name` is its argument.
// Arguments allow us to take values as inputs to
// function when we call it.
function insult(name) {
  // return "Hi.";
  // The moment a function's body encounters the return
  // keyword all lines of code that come are ignored.
  // The function is exited immediately.

  const randNum = Math.floor(Math.random() * 3);

  if (randNum == 0) {
    // To get an output from a function, you
    // must use the `return` keyword followed
    // by an expression or a value.
    return `${name}, you doofus!`;
  } else if (randNum == 1) {
    return `${name}, your father smelt of elderberries!`;
  } else {
    return `Your mother was a hamster, ${name}`;
  }
}

// Example usage:

// To use function and to get its return value, we call
// the function appending () to its name with the
// arguments inside.
insult("Steve"); // <- "Steve" is the argument
insult("Bob");
insult; // <- This doesn't call the function, but
// returns the function itself instead.

// Objects

const daeny = {
  firstName: "Daenerys",
  lastName: "Targaryen",
  titles: ["Queen of Meereen", "Khaleesi"]
};

// To read a key from an object, use the . notation
daeny.firstName; // 'Daenerys'

// Or, use square brackets where a key name written as
// string is passed inside
daeny["lastName"]; // 'Targaryen'
daeny["titles"]; // [ 'Queen of Meereen', 'Khaleesi' ]

// To create or modify existing keys, assign to
// a key with the . notation as you would assign
// to a variable,

daeny.royalHouse = "House Targaryen";
// The above adds the key "royalHouse"
// with the associated value "House Targaryen"
// to the daeny object.

daeny; // Updated object
// { firstName: 'Daenerys',
//   lastName: 'Targaryen',
//   titles: [ 'Queen of Meereen', 'Khaleesi' ],
//   royalHouse: 'House Targaryen' } // <--

// You can also create or modify keys using the
// square bracket notation. When using this style,
// you can put any kind character inside of your
// key name when normally a key only be written
// with alphabetic chars., numbers, _ and $.
daeny["Played by"] = "Emilia Clarke";
daeny;
// { firstName: 'Daenerys',
//   lastName: 'Targaryen',
//   titles: [ 'Queen of Meereen', 'Khaleesi' ],
//   royalHouse: 'House Targaryen',
//   'Played by': 'Emilia Clarke' }

obj; // { a: 1, b: 2, c: 3 }
obj.d = { a: 1, b: 2, c: 3, d: { say: "When will it end" } }; // { a: 1, b: 2, c: 3, d: { say: 'When will it end' } }
obj;
// { a: 1,
// b: 2,
// c: 3,
// d: { a: 1, b: 2, c: 3, d: { say: 'When will it end' } } }

// When we have objects inside objects (or nested objects),
// you can chain the . notation along with [] notation
// to access any value deeply nested.
obj.d; // { a: 1, b: 2, c: 3, d: { say: 'When will it end' } }
obj.d.d.say; // 'When will it end'

// In the example below, we get the value of
// the key "d" on the "obj" variable which is an object.
// Then, we get that's object value at key "d" which
// is another object.
// Finally, we get the string at key "say" and get
// its first character.
obj.d.d.say[0]; // 'W'
obj["d"].d["say"][0]; // 'W'

// You can freely re-assign values objects like you
// would do to variables
obj;
//  { a: 'Something else',
//   b: 2,
//   c: 3,
//   d: { a: 1, b: 2, c: 3, d: { say: 'When will it end' } } }
obj.d = true;
obj;
//  { a: 'Something else', b: 2, c: 3, d: true }
obj.b += 2;
obj.b *= 10;
obj.c = obj.c + obj.b;

// Arrays


// Create arrays with square brackets where each
// value inside is seperated by a comma
const arr = [1,2,3,4,5] // undefined
arr // [ 1, 2, 3, 4, 5 ]

// Get the size array with the length property like
// strings
arr.length // 5
[].length // 0

// Read values from arrays by their position or index.
// Indexes begin at 0.
arr[0] // 1
arr[2] // 3

// To get last value, use the length of the arr. minus 1
arr[arr.length - 1] // 5
arr[10] // undefined

// Arrays are built with object which means that we can
// create key value pairs with their [] notation, but
// we should avoid doing this. This means that indexes
// are actually object keys.
arr['myKey'] = "hello" // 'hello'
arr // [ 1, 2, 3, 4, 5, myKey: 'hello' ]

// Use .concat() to combine arrays into new array
// without changing the original array
const a = [ 1, 2, 3, 4, 5 ]
a.concat(['a', 'b', 'c']) // [ 1, 2, 3, 4, 5, 'a', 'b', 'c' ]
a // [ 1, 2, 3, 4, 5 ]

// If you must change the original variable, you
// can re-assign like this
a = a.concat(['a', 'b', 'c']) // [ 1, 2, 3, 4, 5, 'a', 'b', 'c' ]
a // [ 1, 2, 3, 4, 5, 'a', 'b', 'c' ]

a.concat(1) // [ 1, 2, 3, 4, 5, 'a', 'b', 'c', 1 ]
a.concat(9,8,7,6) // [ 1, 2, 3, 4, 5, 'a', 'b', 'c', 9, 8, 7, 6 ]

// Use .slice to create new array from
// a part of another array.

a // [ 1, 2, 3, 4, 5, 'a', 'b', 'c' ]
// The first argument is the index of where
// to start keeping values.
a.slice(5) // [ 'a', 'b', 'c' ]
a // [ 1, 2, 3, 4, 5, 'a', 'b', 'c' ]

// The second argument is the index of where to
// stop keeping values. If not given, it's
// to the end of the array (the last index).
a.slice(0, 5) // [ 1, 2, 3, 4, 5 ]
a.slice(5, 6) // [ 'a' ]

// If a value is given as a negative number, then
// slice will act in reverse (beginning from the end)
a.slice(-1) // [ 'c' ]
a.slice(-3) // [ 'a', 'b', 'c' ]
a.slice(-3, -2) // [ 'a' ]


// You can bracket notation with assignment to add
// or replace values in an array as you with
// objects

a // [ 1, 2, 3, 4, 5, 'a', 'b', 'c' ]
a[0] = 3 // replaces the first value of a
a // [ 3, 2, 3, 4, 5, 'a', 'b', 'c' ]

a[a.length] // undefined
a[a.length] = 90 // Adds 90 as value at the end of the array
a // [ 3, 2, 3, 4, 5, 'a', 'b', 'c', 90 ]

// The recommended to add values to the end of
// array is with .push()

a // [ 3, 2, 3, 4, 5, 'a', 'b', 'c' ]
a.push("My Value") // 9
a // [ 3, 2, 3, 4, 5, 'a', 'b', 'c', 'My Value' ]
a.push({a: 1}) // 10
a // [ 3, 2, 3, 4, 5, 'a', 'b', 'c', 'My Value', { a: 1 } ]

// To add values add the beginning of an array, use
// .unshift()
const b = []
b.unshift(1) // 1

// You can add multiple values at a time. This also works
// with .push()
b.unshift(4, 5, 6) // 4
b // [ 4, 5, 6, 1 ]

// Use .pop() to remove and return the last value
// of an array. This changes the original array (a mutation).
a // [ 10, 10, 3, 2, 3, 4, 5, 'a', 'b', 'c', 'My Value', { a: 1 } ]
a.pop() // { a: 1 }
a // [ 10, 10, 3, 2, 3, 4, 5, 'a', 'b', 'c', 'My Value' ]
a.pop() // 'My Value'
a.pop() // 'c'
a // [ 10, 10, 3, 2, 3, 4, 5, 'a', 'b' ]

a.pop(2) // This doesn't anything different.
// You can only .pop() one value at a time
a // [ 10, 10, 3, 2, 3, 4, 5, 'a' ]

// Use .shift() like .pop() to remove and return
// the first element of an array.
a // [ 10, 10, 3, 2, 3, 4, 5, 'a' ]
a.shift() // 10
a.shift() // 10
a.shift() // 3
a // [ 2, 3, 4, 5, 'a' ]

// To check if a value is an array use,
// Array.isArray(...)

Array.isArray(1) // false
Array.isArray({}) // false
Array.isArray([]) // true
Array.isArray(a) // true

// To create strings from arrays, use .toString()
// or .join(...) with a string as an argument

a // [ 2, 3, 4, 5, 'a' ]
a.toString() // '2,3,4,5,a'

// With join, you can decided how the values from
// are joined together
a.join() // '2,3,4,5,a'
a.join(" ") // '2 3 4 5 a'
a.join(" | ") // '2 | 3 | 4 | 5 | a'
a.join("\n") // '2\n3\n4\n5\na'

// To test if value is inside and array or not,
// use .includes(...) with a value as an argument

a // [ 2, 3, 4, 5, 'a' ]
// It returns `true` when the value present
a.includes('a') // true
// `false` otherwise
a.includes('b') // false

// Sometimes you would prefer to the index of that
// value, use .indexOf() in that case.
a.indexOf(5) // 3
// It returns -1 if the value doesn't exist.
a.indexOf(10) // -1

// Use .split(...) on a string to transform into an
// array where its argument is a string that acts
// as seperator inside the string.
"1 2 3".split() // [ '1 2 3' ]
"1 2 3".split(" ") // [ '1', '2', '3' ]
"1 / 2 / 3 / 4".split(" / ") // [ '1', '2', '3', '4' ]