const startGameBtn = document.getElementById("start-game-btn");

function startGame() {
  console.log("Game is starting...");
}

// const person = {
//   name: "hamza",
//   greet: function greet() {
//     console.log("Hello there!");
//   },
// };
// person.greet();

// console.dir(startGame); // FUNCTIONS ARE OBJECTS

startGameBtn.addEventListener("click", startGame);
