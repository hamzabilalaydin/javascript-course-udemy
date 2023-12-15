let person = {
  name: "hba",
  age: 28,
  hobbies: ["sports", "cooking"],
  greet: function () {
    alert("Hi there!");
  },
};

delete person.age;
person.isAdmin = true;
person.greet();
console.log(person);
