// class Person {
//   name = "hba";

//   constructor() {
//     this.age = 28;
//   }

//   greet() {
//     console.log(`Hi my name is ${this.name}, i am ${this.age} years old.`);
//   }
// }

function Person() {
  this.age = 28;
  this.name = "hba";
  this.greet = function () {
    console.log(`Hi my name is ${this.name}, i am ${this.age} years old.`);
  };
}

const person = new Person();
person.greet();
