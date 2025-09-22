// funciton

function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}

let teaOrder = makeTea("lemon tea");
// console.log(teaOrder);

function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for chai`;
  }
  return confirmOrder();
}

let teaOrderConfirm = orderTea("chai");
// console.log(teaOrderConfirm);

// Arrow function
function greet() {}

const greets = () => {};

const calculateTotal = (price, quantity) => {
  totalCost = price * quantity;
  return totalCost;
};

let costCalculation = calculateTotal(200, 50);
// console.log(costCalculation);

//

function makeTea() {}
function processTeaOrder(teaFunction) {}

processTeaOrder(makeTea);
