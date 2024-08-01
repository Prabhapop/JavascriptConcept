// find the no. is add or even
EvenOdd = (num) => {
  if (num % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
};
EvenOdd(987);
EvenOdd(87);
EvenOdd(97);
EvenOdd(98);

// Find the year is leap year or not
leepyear = (year) => {
  if ((year % 4 == 0 && year % 100 !== 0) || year % 400 === 0)
    console.log("Leap Year");
  else {
    console.log("not leap year");
  }
};
leepyear(3453);
leepyear(2343);
leepyear(2014);
leepyear(2004);

// find the sum of arr
arr = [12, 23, 12, 32, 44, 34];

sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);
