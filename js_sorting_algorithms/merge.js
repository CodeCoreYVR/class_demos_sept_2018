function merge(is, js) {
  // merge the sorted arrays is and js in a single iteration
  // efficiently

  let i = 0;
  let j = 0;
  let ijs = [];

  while (i < is.length && j < js.length) {
    if (is[i] < js[j]) {
      ijs.push(is[i]);
      i += 1;
    } else {
      ijs.push(js[j]);
      j += 1;
    }
  }

  return ijs.concat(is.slice(i)).concat(js.slice(j));
}

let arr1 = [1, 3, 7, 10, 19, 23, 28, 36, 45];
let arr2 = [4, 7, 18, 20, 99, 112];

console.log("arr1:", arr1);
console.log("arr2:", arr2);
console.log("merged:", merge(arr1, arr2));
