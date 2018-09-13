// Exercise: Sum

// function sum(numbers) {
//   let total = 0;

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (typeof numbers[i] === "number") {
//       total += numbers[i];
//     }
//   }

//   // DO NOT FORGET TO RETURN!
//   return total;
// }

function sum(numbers) {
  let total = 0;

  for (let number /* numbers[i] */ of numbers) {
    if (typeof number === "number") {
      total += number;
    }
  }

  // DO NOT FORGET TO RETURN!
  return total;
}

console.log("---- TESTING SUM ----");
console.log(sum([1, 2, 3, 4, 5]));
console.log(sum([1, 2, "a", 3, 4, 5]));
