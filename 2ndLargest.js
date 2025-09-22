let arr = [1, 1, 1, 1, 1];

let maxi1 = -Infinity;
let maxi2 = -Infinity;

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

if (maxi2 === -Infinity) {
  console.log(maxi1);
  console.log("No distinct 2nd largest number");
} else {
  console.log(maxi1);
  console.log(maxi2);
}
