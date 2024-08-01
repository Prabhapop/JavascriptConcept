// implement a private variable using closures.

function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log("count :", count);
  }
  return {
    incrementCount: function () {
      increment();
    },
    getCount: function () {
      return count;
    },
  };
}
let count = 8;
const counter = createCounter();
counter.incrementCount();
counter.incrementCount();
console.log(counter.getCount());
