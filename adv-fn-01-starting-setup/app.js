function add(num1, num2) {
  return num1 + num2;
}

console.log(add(5, 1));
console.log(add(12, 15));

function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(4));

let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

console.log(addMoreNumbers(5, 1));

const hobbies = ["Sports", "Cooking"];

function printHobbies(h) {
  h.push("New Hobby");
  console.log(h);
}

printHobbies(hobbies);

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }
  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmoount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateIncomeTaxAmoount(200));

let userName = "Hba";

function greetUser() {
  // let name = "Anna";
  console.log("Hi " + name);
}

let name = "Max";

userName = "Sum";

greetUser();

// function powerOf(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

function powerOf(x, n) {
  // if (n === 1) {
  //   return x;
  // }
  // return x * powerOf(x, n - 1);

  return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3)); //2 * 2 * 2 = 8

const myself = {
  name: "Hba",
  friends: [
    {
      name: "Max",
      friends: [
        {
          name: "Aka",
        },
      ],
    },
    {
      name: "Benji",
    },
  ],
};

function getFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }
  return collectedNames;
}

console.log(getFriendNames(myself));
