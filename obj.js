// Objects
const obj = {
  name: "Sanchit",
  age: 21,
  address: {
    city: "Noida",
    state: "India",
  },
};

const obj1 = {
  name: "Sakshi",
  age: 21,
  address: {
    city: "Patna",
    state: "India",
  },
};

const final = {};

// copy object without spread operator
for (let key in obj) {
  if (typeof obj[key] === "object" && obj[key] !== null) {
    final[key] = {};
    for (let k in obj[key]) {
      final[key][k] = obj[key][k];
    }
  } else {
    final[key] = obj[key];
  }
}
console.log("Final Object:", final);

// merge two objects without spread operator
