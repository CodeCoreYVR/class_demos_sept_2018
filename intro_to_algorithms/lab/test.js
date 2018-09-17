function linear(arr, num) {
  for (item of arr) {
      if (item === num) {
          return arr.indexOf(item);
      }
  }
}

console.log("linear search", linear([3, 5, 7, 8, 10, 12], 10));

function binary(arr, item, startIndex, endIndex) {  
  startIndex = startIndex || 0;
  endIndex = endIndex || arr.length - 1;
  if (startIndex === endIndex) {
  return arr[startIndex] === item ? startIndex : -1;
  }
  const midItemIndex = Math.floor((startIndex + endIndex) / 2);
  
  if(arr[midItemIndex] === item) {
  return midItemIndex;
  } else if(arr[midItemIndex] > item) {
  return binary(arr, item, 0, midItemIndex);
  } else {
  return binary(arr, item, midItemIndex+1, endIndex);
  }
}

console.log("binary search", binary([3, 5, 7, 8, 10, 12], 10));

// const num=-1
// const num=1
const arr =[];
const num = Math.floor(Math.random()*1000);
for (let i=0; i<1000;i++){
  arr.push(i);
}

console.time('linear search')
for (let i = 0; i < 10000; i++) {
  linear(arr, num);
}
console.timeEnd('linear search')

console.time('binary search')
for (let i = 0; i < 10000; i++) {
  binary(arr, num);
}
console.timeEnd('binary search')