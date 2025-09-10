var x = 10;
console.log("var x =", x);

let y = 20;
console.log("let y =", y);

const z = 30;
console.log("const z =", z);

let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

function add(a, b) {
  return a + b;
}
console.log("Sum =", add(5, 7));

for (let i = 1; i <= 5; i++) {
  console.log("For loop count:", i);
}

let i = 1;
while (i <= 5) {
  console.log("While loop count:", i);
  i++;
}
