const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers.filter((number) => number > 5));
console.log(numbers.map((number) => ({ num: number })));

console.log(
  numbers.reduce((preVal, curVal) => {
    return preVal * curVal;
  }, 1)
);

function findMax([...numbers]) {
  let curMax = numbers[0];
  let curMin = numbers[0];
  let gec;
  let newArr = [];
  for (const number of numbers) {
    gec = number;
    if (curMax < number) {
      curMax = number;
    }
    if (gec < curMin) {
      curMin = gec;
    }
  }
  newArr.push(curMax, curMin);
  console.log(newArr);
  const [max, min] = newArr;
}

findMax(numbers);

const newSet = new Set();

newSet.add(2);
newSet.add(4);
newSet.add(5);
newSet.add(5);

console.log(newSet);
