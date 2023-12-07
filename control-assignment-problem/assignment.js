const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

const num = Math.random();
let check = true;

// while (check) {
//   if (randomNumber > 0.7) {
//     alert(`Number is found: ${randomNumber}`);
//     check = false;
//   }
// }

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}

for (let i = 8; i >= 0; i--) {
  console.log(myArr[i]);
}

while (check) {
  if (
    (num > 0.7 && randomNumber > 0.7) ||
    num < 0.2 ||
    randomNumber < 0.2
  ) {
    alert(`two numbers ar here ${randomNumber} and ${num}`);
    check = false;
  }
}
