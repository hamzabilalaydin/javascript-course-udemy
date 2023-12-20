// class AgedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }

// class Person extends AgedPerson {
//   name = "hba";

//   constructor() {
//     super();
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

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };

Person.prototype.printAge = function () {
  console.log(this.age);
};

console.dir(Person);

const person = new Person();
person.greet();
person.printAge();
console.log(person.__proto__);
