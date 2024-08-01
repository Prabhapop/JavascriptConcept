// Write a regular expression to validate an email address

const emailRegex = /^[a-zA-Z._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validate(email) {
  return emailRegex.test(email);
}

const email1 = "pea@g.com";
const email2 = "prabha21@gmail";
const email3 = "prabha@gmail.nj";

console.log(validate(email1));
console.log(validate(email2));
console.log(validate(email3));
