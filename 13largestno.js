findLargestNo = (arr) => {
  return arr.reduce((max, current) => (current > max ? current : max));
};
console.log(findLargestNo([1, 2, 3, 4, 5, 6]));

arr = [56, 76, 68, 86, 97, 35];
console.log(findLargestNo(arr));
