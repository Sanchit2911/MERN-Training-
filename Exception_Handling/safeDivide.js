function safeDivide(a, b) {
  if (b === 0) {
    throw new RangeError("Division by zero");
  }
  return a / b;
}

function runSafeDivide(a, b) {
  try {
    return safeDivide(a, b); // return result if OK
  } catch (err) {
    console.error("Error:", err.message);
    return null; // graceful fallback
  }
}

console.log(runSafeDivide(10, 2)); // 5
console.log(runSafeDivide(10, 0)); // null + logs "Division by zero"
