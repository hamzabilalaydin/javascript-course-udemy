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
    alert(`Invalid choice! We choose ${DEFAULT_USER_CHOICE} for you`);
    return;
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

const getWinner = function (cChoice, pChoice = DEFAULT_USER_CHOICE) {
  //what after the equal sign is default value
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
  let message = `You picked ${playerChoice}, computer picked ${computerChoice}, `;
  if (winner === RESULT_DRAW) {
    message = message + "had a draw.";
  } else if (winner === RESULT_PLAYER_WIN) {
    message = message + "you won.";
  } else {
    message = message + "you lost.";
  }
  alert(message);
  gameIsRunning = false;
});
