let arr = [7, 4, 9, 1, 3, 2, 5, 8];

let mini1 = Number.MAX_VALUE;
let mini2 = Number.MAX_VALUE;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < mini1) {
    mini2 = mini1;
    mini1 = arr[i];
  } else if (arr[i] > mini1 && arr[i] < mini2) {
    mini2 = arr[i];
  }
}

console.log(mini1);
console.log(mini2);
