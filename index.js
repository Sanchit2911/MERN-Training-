var score = 50;
let level = 2;
const maxLevel = 5;

if (score > 80) {
  console.log("Excellent");
} else if (score > 60) {
  console.log("Good");
} else {
  console.log("Needs Improvement");
}

function multiply(a, b = 2) {
  return a * b;
}

console.log("Multiply:", multiply(5));
console.log("Multiply:", multiply(5, 3));

for (let i = 1; i <= maxLevel; i++) {
  let power = multiply(level, i);
  console.log(`Level ${i}: Power ${power}`);
}

let count = 0;
while (count < 3) {
  console.log("Attempt", count + 1);
  count++;
}
