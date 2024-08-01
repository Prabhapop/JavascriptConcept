// find factorial no.
// factorial=(num)=>{
//   if (num == 0 || num == 1) {
//     return 1;
//   } else {
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//       fact *= i;
//     }
//     return fact;
//   }
// };

// console.log(factorial(5));

factorial = (num) => {
  if (num == 0 || num == 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};
console.log(factorial(5));
