// Destruction on object to get its properties

const person = {
  fname: "Prabha",
  lname: "kumari",
  age: 20,
  city: "Ranchi",
};

console.log(person);
const { fname, lname, ...left } = person;
console.log(fname); // Prabha
console.log(lname); // kumari
console.log(left);
