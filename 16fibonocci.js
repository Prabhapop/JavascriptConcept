// Implement a recursive function to find the nth Fibonacci number

fibonocci = (num) => {
  if (num <= 1) {
    return num;
  } else {
    return fibonocci(num - 1) + fibonocci(num - 2);
  }
};

console.log(fibonocci(5));
console.log(fibonocci(3));
console.log(fibonocci(9));
