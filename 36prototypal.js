// Prototypal Inheritance: Create an Object person with properties like name ,age, Then create a new object student that inherts
// from person and add a new property called studentId, Add a method to the person object and demonstrate that student also has access to it.

const person = {
  name: "Prabha",
  age: 29,

  introduce: function () {
    return `Hi my name is ${this.name} and i m ${this.age} year old`;
  },
};
const student = Object.create(person);
student.studentId = 123;

console.log(student.name);
console.log(student.studentId);

console.log(person);
console.log(student.introduce());
