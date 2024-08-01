// Create a counter function using closures that increments the count on each call.

function counter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

let cou = counter();
console.log(cou());
console.log(cou());
console.log(cou());
console.log(cou());
