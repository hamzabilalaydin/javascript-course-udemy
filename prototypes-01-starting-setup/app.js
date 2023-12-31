class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person {
  name = "hba";

  constructor() {
    this.age = 28;
  }

  // greet = () => {
  //   console.log(`Hi my name is ${this.name}, i am ${this.age} years old.`);
  // };

  greet() {
    console.log(`Hi my name is ${this.name}, i am ${this.age} years old.`);
  }
}

// function Person() {
//   this.age = 28;
//   this.name = "hba";
// }

// Person.prototype.greet = function () {
//   console.log(`Hi my name is ${this.name}, i am ${this.age} years old.`);
// };

// Person.describe = function () {
//   console.log("Creating persons...");
// };

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };

// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// console.dir(Person);

// const person = new Person();
// person.greet();
// person.printAge();
// console.log(person);
// console.dir(Object.prototype.__proto__);

// const person1 = new Person();
// const person2 = new Person();
// person1.greet();
// console.log(person1);

// const button = document.getElementById("btn");
// button.addEventListener("click", person1.greet.bind(person1));

const course = {
  title: "Javascript the complete guide",
  rating: 4,
};

// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
  // ...Object.getPrototypeOf(course),
  printRating() {
    console.log(`${this.rating}`);
  },
});

const student = Object.create(
  {
    printProgress: function () {
      console.log(this.progress);
    },
  },
  {
    name: {
      configurable: true,
      enumerable: true,
      value: "Hba",
      writable: false,
    },
  }
);

// student.name = "Hba";

Object.defineProperty(student, "progress", {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false,
});

student.printProgress();
console.log(student);
course.printRating();
