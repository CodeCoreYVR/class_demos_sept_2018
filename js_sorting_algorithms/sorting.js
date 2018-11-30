function bubbleSort(arr) {
  let hasSwapped = true;

  while (hasSwapped) {
    hasSwapped = false;

    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i - 1] > arr[i]) {
        const tmp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmp;

        // swap has occured
        hasSwapped = true;
      }
    }
  }
}

function bubbleSortCount(arr) {
  let hasSwapped = true;
  let endCount = arr.length;

  while (hasSwapped) {
    hasSwapped = false;

    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i - 1] > arr[i]) {
        const tmp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmp;

        // swap has occured
        hasSwapped = true;
      }
    }

    endCount -= 1;
  }
}

function bubbleSortImp(arr) {
  let hasSwapped = true;

  for (let j = arr.length; j > 0 && hasSwapped; j -= 1) {
    hasSwapped = false;

    for (let i = 1; i < j; i += 1) {
      if (arr[i - 1] > arr[i]) {
        const tmp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmp;

        // swap has occured
        hasSwapped = true;
      }
    }
  }
}

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

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let middleIndex = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, middleIndex);
  let rightArr = arr.slice(middleIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

let unsorted = [4, 6, 1, 9, 30, 2, 1];

function testBubbleSort() {
  let clone = Array.from(unsorted);
  console.log("unsorted:", clone);
  bubbleSort(clone);
  console.log("sorted:", clone);
}

function testBubbleSortImp() {
  let clone = Array.from(unsorted);
  console.log("unsorted:", clone);
  bubbleSortImp(clone);
  console.log("sorted:", clone);
}

function testBubbleSortCount() {
  let clone = Array.from(unsorted);
  console.log("unsorted:", clone);
  bubbleSortCount(clone);
  console.log("sorted:", clone);
}

function testMergeSort() {
  let clone = Array.from(unsorted);
  console.log("unsorted:", clone);
  console.log("sorted:", mergeSort(clone));
}

let largeUnsorted = Array.from({ length: 10000 }).map(() =>
  Math.floor(Math.random() * 10000)
);

let oneUnsorted = Array.from({ length: 10000 }).map((v, i) => i);
oneUnsorted[Math.floor(Math.random() * 10000)] = Math.floor(
  Math.random() * 10000
);

function benchmarkBubbleSort(arr) {
  // When used on an Array, Array.from will create a copy.
  let clone = Array.from(arr);
  console.time("bubbleSort");
  bubbleSort(clone);
  console.timeEnd("bubbleSort");
}

function benchmarkBubbleSortImp(arr) {
  // When used on an Array, Array.from will create a copy.
  let clone = Array.from(arr);
  console.time("bubbleSortImp");
  bubbleSortImp(clone);
  console.timeEnd("bubbleSortImp");
}

function benchmarkBubbleSortCount(arr) {
  // When used on an Array, Array.from will create a copy.
  let clone = Array.from(arr);
  console.time("bubbleSortCount");
  bubbleSortCount(clone);
  console.timeEnd("bubbleSortCount");
}

function benchmarkMergeSort(arr) {
  // When used on an Array, Array.from will create a copy.
  let clone = Array.from(arr);
  console.time("mergeSort");
  mergeSort(clone);
  console.timeEnd("mergeSort");
}

testBubbleSort();
testBubbleSortImp();
testBubbleSortCount();
testMergeSort();
benchmarkBubbleSort(largeUnsorted);
benchmarkBubbleSortImp(largeUnsorted);
benchmarkBubbleSortCount(largeUnsorted);
benchmarkMergeSort(largeUnsorted);
