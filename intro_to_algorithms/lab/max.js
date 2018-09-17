function maxRecursive(array, currentMax) {
  if(array.length === 0) {
    return currentMax;
  } else if (currentMax === undefined) { // maxRecursive([4, 5, 6, 2]) -> maxRecursive([5, 6, 2], 4)
    return maxRecursive(array.slice(1), array[0]);
  } else if(array[0] > currentMax) {
    return maxRecursive(array.slice(1), array[0]);
  } else {
    return maxRecursive(array.slice(1), currentMax);
  }
}

console.log(maxRecursive([ 213, 12, 66, 999 ]));
console.log(maxRecursive([ 1, 2, 3, 11, 3, 6, 5 ]));
console.log(maxRecursive([ 1 ]));
console.log(maxRecursive([  ]));
console.log(maxRecursive([ 4, 6 ]));
console.log(maxRecursive([ 4, 6, -5 , -6 ]));
console.log(maxRecursive([ -4, -6, -5 , -6 ]));

let number = 0
function maximumRecursive(arr){
  if (arr.length < 1) {
    return (number);
  } else if (arr[0]>number){
    number = arr[0];
    maximumRecursive(arr.slice(1))
  }
  return number;
}

console.log(maximumRecursive([3, 5, 6, 7, 14, 11]))

