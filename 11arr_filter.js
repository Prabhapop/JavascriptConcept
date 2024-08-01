// Write a function that take an array of number and return a new array with only the even no.

arr = [12, 13, 24, 454, 65, 77, 33, 223];

evenArr = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};
console.log(evenArr(arr));
