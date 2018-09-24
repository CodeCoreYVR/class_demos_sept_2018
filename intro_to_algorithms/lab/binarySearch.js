function binarySearch(arr, item, startIndex, endIndex) {
  startIndex = startIndex || 0;
  endIndex   = endIndex || arr.length - 1;

  if(arr.length == 0) { return -1 }

  if(startIndex === endIndex) {
    if(arr[startIndex] === item) {
      return startIndex;
    } else {
      return -1;
    }
  }

  const midIndex = Math.floor((startIndex + endIndex) / 2);

  if(arr[midIndex] === item) {
    return midIndex;
  } else if (arr[midIndex] > item) {
    return binarySearch(arr, item, startIndex, midIndex - 1);
  } else {
    return binarySearch(arr, item, midIndex + 1, endIndex);
  }

}

console.log(binarySearch([ 3, 5, 7, 8, 10, 12 ], 10)); // 4
console.log(binarySearch([ 3, 5, 7, 8, 10, 12 ], 3)); // 0
console.log(binarySearch([ 3, 5, 7, 8, 10, 12 ], 78)); // -1
console.log(binarySearch([ 3, 5, 7, 8, 10, 12 ], -1)); // -1
console.log(binarySearch([ ], 78)); // -1
console.log(binarySearch([ 15 ], 78)); // -1
console.log(binarySearch([ 78 ], 78)); // 0