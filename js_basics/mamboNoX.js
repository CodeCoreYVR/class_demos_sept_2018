// The `for` loop's is used for 3 different
// types of operations:

// - In the first part, we declared variables
//   that are used in the iteration.
// - In the second part, we write a condition
//   that `false` will cause the loop to end.
// - In the third part, we write a expression
//   that will eventually cause loop to exit.
//   This often means altering a variable from the
//   the first part.
for (let i = 0, j = 10; i < j; i += 1) {
  console.log(`Mambo No. ${i}`);

  // The third part (i.e. i += 1) executes
  // at the end of this block before the
  // next iteration.
}
