// Given two integers representing the numerator and denominator of a
// fraction return hr fraction in string format.

function fraction(numerator, denominator) {
  const res = numerator / denominator;
  return res.toString();
}

console.log(fraction(1, 2));
console.log(fraction(2, 4));
console.log(fraction(7, 2));
console.log(typeof fraction(1, 2));
