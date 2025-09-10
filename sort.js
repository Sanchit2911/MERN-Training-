// merge two sorted arrays
function merge(left, right) {
  const a = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      a.push(left[i]);
      i++;
    } else {
      a.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    a.push(left[i]);
    i++;
  }

  while (j < right.length) {
    a.push(right[j]);
    j++;
  }

  return a;
}

// merge sort
function mergeSort(a) {
  if (a.length <= 1) {
    return a;
  }
  const mid = Math.floor(a.length / 2);
  const left = a.slice(0, mid);
  const right = a.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

// test
const arr = [5, 3, 8, 6, 2, 7, 4, 1, 3, 5, 7];
console.log("Unsorted array:", arr);

const sortedArr = mergeSort(arr);
const finalArr = [];

// push first element
finalArr.push(sortedArr[0]);

// skip duplicates
for (let i = 1; i < sortedArr.length; i++) {
  if (sortedArr[i] !== sortedArr[i - 1]) {
    finalArr.push(sortedArr[i]);
  }
}

console.log("Final Sorted array:", finalArr);
