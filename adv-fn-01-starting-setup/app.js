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
