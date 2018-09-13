// Iterating Arrays

const arr = ["a", "b", "c", "d", "e"];

for (let i = 0; i < arr.length; i += 1) {
  console.log("Value:", arr[i], "Index:", i);
}

for (let value of arr) {
  console.log("Value:", value);
}
