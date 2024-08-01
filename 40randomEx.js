// Create a function that takes an array of no. and return 'BOOM!'
// if the digit 7 is appears in the array. Otherwise return "there is no 7 in the array".

function sevenBoom(arr) {
  for (const num of arr) {
    if (num.toString().includes("7")) {
      return "BOOM!";
    }
  }
  return "there is no 7 in the array";
}
console.log(sevenBoom([1, 2, 3, 4, 5, 6]));
console.log(sevenBoom([1, 2, 3, 4, 5, 7]));
console.log(sevenBoom([1, 2, 3, 4, 5, 79]));
