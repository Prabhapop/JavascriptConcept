// Randomo Exercise: Create a function that determines whether a number is oddish oe evenish
// a no. is oddlish if the sum of all of its digitis odd and no. is evenish if the sum of all
//  of its digit is even if the no. is oddlish,return 'oddish'. Otherwise return 'evenish'.

function oddlishEvenish(num) {
  const digits = num.toString().split("").map(Number);

  const sum = digits.reduce((acc, digit) => acc + digit, 0);
  return sum % 2 === 0 ? "Evenish" : "Oddish";
}

console.log(oddlishEvenish(121));
console.log(oddlishEvenish(122));
console.log(oddlishEvenish(123));
