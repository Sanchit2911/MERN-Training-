let arr = [1, 2, 3, 4, 5, 5, 8];

let maxi1 = -1;
let maxi2 = -1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maxi1) {
    maxi2 = maxi1;
    maxi1 = arr[i];
    // console.log(maxi1);
    // console.log(maxi2);
  } else if (arr[i] < maxi1 && arr[i] > maxi2) {
    maxi2 = arr[i];
    // console.log(maxi2);
  }
}

console.log(maxi1);
console.log(maxi2);
