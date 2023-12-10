const startGameBtn = document.getElementById("start-game-btn");

//                              // you can store functions in variables
// const start = function () {
//   console.log("Game is starting...");
// };

// const person = {
//   name: "hamza",
//   greet: function greet() {
//     console.log("Hello there!");
//   },
// };
// person.greet();

// console.dir(startGame); // FUNCTIONS ARE OBJECTS

startGameBtn.addEventListener("click", function () {
  // we can give anonymous functions' a name
  console.log("Game is starting..."); // if we need a function just one time, we can use it anonymously
});
