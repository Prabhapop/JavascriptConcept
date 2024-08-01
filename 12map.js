// use map to double all the element in the array

arr = [12, 23, 45, 35, 67, 54];

// let result = arr.map((element) => {
//   return element * 2;
// });
// console.log(result);
doubleArr = (arr) => {
  return arr.map((num) => num * 2);
};
console.log(doubleArr(arr));
