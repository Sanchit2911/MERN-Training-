let computer = {
  cpu: 12,
};

let lenovo = {
  screen: "HD",
  __proto__: computer,
};

let appleHardware = {};

console.log(`lenovo`, lenovo.__proto__);
