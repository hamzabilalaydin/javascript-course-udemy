const movieList = document.getElementById("movie-list");
movieList.style["background-color"] = "red";
movieList.style.display = "block";

const userKeyName = "level";

let person = {
  name: "hba",
  age: 28,
  hobbies: ["sports", "cooking"],
  [userKeyName]: "...", // value of userKeyName given as a 'key'
  greet: function () {
    alert("Hi there!");
  },
  1.5: "hello", // numbers can be used as keys
};

delete person.age;
person.isAdmin = true;
// person.greet();
const keyName = "name";

console.log(person[keyName]);
console.log(person[1.5]); // with numbers we don't have to use "quotes"
console.log(person);
