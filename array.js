const arr1 = []; // empty array
const arr2 = [1, 2, 3]; // literal
const arr3 = new Array(3); // length = 3 (holes)
const arr4 = Array.of(1, 2, 3); //  preferred if using constructor with numbers

// mutable methods (change array in place)

const arr = [1, 2, 3];

arr.push(4); // [1,2,3,4]   add to end
arr.pop(); // [1,2,3]     remove from end

arr.unshift(0); // [0,1,2,3]   add to start
arr.shift(); // [1,2,3]     remove from start

// arrN.splice(startIndex, deleteCount, item1, item2, itemN);

arr.splice(1, 1, 99); // remove 1 element at index 1, insert 99 → [1, 99, 3]

// Non-mutating (return new array)

const nums = [1, 2, 3, 4];
const sliced = nums.slice(1, 3); // [2, 3]
const mapped = nums.map((x) => x * 2); // [2,4,6,8]
const filtered = nums.filter((x) => x % 2 === 0); // [2,4]

// Iteration

const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // classic
}

for (const fruit of fruits) {
  console.log(fruit); // // for..of → cleanest
}

fruits.forEach((f, i) => {
  console.log(i, f);
});

// debugging patterns

const a = [10, 20, 30];
console.table(a); // displays index + values

console.assert(a.length === 3, "Array length mismatch!");

// Edge Cases

// Holes vs Undefined

const ar = [, 2, undefined];
console.log(ar.length); // 3
ar.forEach((v) => console.log(v)); // skips first element (hole)
console.log(ar.map((v) => v)); // [ <1 empty item>, 2, undefined ]

// Sorting
[(10, 2, 5)].sort(); // ["10","2","5"] → ["10","2","5"] (string sort!)
[10, 2, 5].sort((a, b) => a - b); // [2,5,10] (numeric sort)

// Copying;

const a1 = [1, 2, 3];
const b = a; // reference copy modifies a
b.push(4);
console.log(a1); // [1,2,3,4]

const c = [...a1]; // shallow clone (safe)

// shallow copy

const original = [1, [2, 3], 4];
const shallowClone = [...original];

// Change a top-level element
shallowClone.push(5);
console.log(original); // [1, [2, 3], 4] - original is unchanged

// Change a nested element
shallowClone[1].push(99);
console.log(original); // [1, [2, 3, 99], 4] - original is changed

// Negative number modulo

const ans = ((-5 % 3) + 3) % 3;
console.log(ans);
