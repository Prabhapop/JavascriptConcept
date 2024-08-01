// Multidimenion Array: Create  a javascript function that generate a 2D array with the specified number of rows and columns.
// Each element in the array should contain the sum of its row index and column index. Once you're created the array. write
// two additional function to display the array in its original form and its ResizeObserverSize.

function createMDArray(rows, columns) {
  let arr = [];
  for (let i = 0; i < rows; i++) {
    arr.push(new Array(columns));
    for (let j = 0; j < columns; j++) {
      arr[i][j] = i + j;
    }
  }
  return arr;
}
function display(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].join(" "));
  }
}
const rows = 3;
const columns = 4;
const mutiArray = createMDArray(rows, columns);

function reverseDisplay(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i].reverse().join(" "));
  }
}

console.log("Original Array");
display(mutiArray);

console.log("Reversed Array");
reverseDisplay(mutiArray);
