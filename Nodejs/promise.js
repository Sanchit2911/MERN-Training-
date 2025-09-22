let promise = newPromise((resolve, reject) => {
  reject("rejected");
  resolve("resolved");
});

console.log(promise);

// gec and hoistng tdz call stack hea event loop
