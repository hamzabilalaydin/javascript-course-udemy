const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER WINS";
const RESULT_COMPUTER_WIN = "COMPUTER WINS";

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! We choose ${ROCK} for you`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomVAlue = Math.random();
  if (randomVAlue < 0.34) {
    return ROCK;
  } else if (randomVAlue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// const getWinner = (cChoice, pChoice) =>
//   cChoice === pChoice
//     ? RESULT_DRAW
//     : (cChoice === ROCK && pChoice === PAPER) ||
//       (cChoice === PAPER && pChoice === SCISSORS) ||
//       (cChoice === SCISSORS && pChoice === ROCK)
//     ? RESULT_PLAYER_WIN
//     : RESULT_COMPUTER_WIN;

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
//---BOTH CODES ARE DOING THE EXACT THING---//
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

const getWinner = function (cChoice, pChoice) {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WIN;
  } else {
    return RESULT_COMPUTER_WIN;
  }
};

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  // we can give anonymous functions' a name
  console.log("Game is starting..."); // if we need a function just one time, we can use it anonymously
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  console.log(winner);
});
