const movieList = document.getElementById("movie-list");
movieList.style["background-color"] = "red";
movieList.style.display = "block";

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
// person.greet();
console.log(person["name"]);
