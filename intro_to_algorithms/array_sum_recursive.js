function sum(arr){
  // termination condition
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sum(arr.slice(1));
  }
}

console.log(sum([4, 5, 6, 7]));
console.log(sum([4]));
console.log(sum([4, 5]));
console.log(sum([]));

function sum([first, ...rest]) {
  if(first === undefined) {
    return 0;
  } else {
    return first + sum(rest);
  }
}

console.log(sum([4, 5, 6, 7]));
console.log(sum([4]));
console.log(sum([4, 5]));
console.log(sum([]));