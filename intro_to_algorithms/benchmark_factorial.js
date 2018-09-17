function factorialRecursive(num) {
  if(num === 0) {
    return 1;
  } else {
    return num * factorialRecursive(num - 1);
  }
}

function factorialLoop(num) {
  let result = 1;
  for(let e = 1; e <= num; e++) {
    result *= e;
  }
  return result;
}

console.time("Factorial Recursive");
for(let i = 0; i < 1e8; i++) {
  factorialRecursive(10);
}
console.timeEnd("Factorial Recursive");

console.time("Factorial Loop");
for(let i = 0; i < 1e8; i++) {
  factorialLoop(10);
}
console.timeEnd("Factorial Loop");
