const args = process.argv.slice(2);
const mood = args[0];

// An if-block is a statement instead expression.
// A statement is similar to an expression, but it
// never evaluates to a value. This means that you
// can't assign it to a variable for instance.

// In an if-statement, the first block where its condition
// evaluates to `true` is executed and all other blocks
// are ignored

// Blocks are opened by a { and closed by }.
if (mood === "happy") {
  console.log("Yay! 😀");
} else if (mood === "angry") {
  console.log("About what!?");
} else {
  console.log("Ok. 😶");
}

if (1) {
  console.log("Am I being executed?");
}

// When using a conditional or anything expects
// a boolean, you do not need to actually provide
// a boolean. JavaScript will eagerly converty
// to one following certain rules. This is called
// "type coercion".

// To verify how it convert's a value to a boolean,
// use two nots (!!) on the value:

!!1; // true
!!0; // false
!!"false"; // true
!!""; // false
!!Infinity; // true
!!NaN; // false
!!undefined; // false
!![]; // true

// Values that convert to `true` are considered
// "truthy" and values that convert to `false`
// are considered "falsy"
