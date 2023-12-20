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

Person.__proto__;

const person = new Person();
person.greet();
console.log(person.__proto__);
