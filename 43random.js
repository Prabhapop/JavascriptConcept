// Create a function that takes the month and year (as integers) and return
// the number of days in that month

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function days(month, year) {
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  } else if ([4, 6, 9, 11].includes(month)) {
    return 30;
  } else {
    return 31;
  }
}
console.log(days(5, 2832));
console.log(days(2, 2008));
console.log(days(6, 2013));
console.log(days(3, 2012));
