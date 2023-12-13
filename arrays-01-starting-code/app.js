// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = new Array(1, 4); //default: [] if we pass more than one number that would be its items
// // const moreNumbers = Array(5); //default: []  if we pass just one number that would be it length
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll("li");
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ["Cooking", "Sports"];
// const personalData = [28, "Hba", { moreDetails: [] }];

// const analyticsData = [
//   [1, 1.5],
//   [-5, 0.4, 2.1],
// ];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1]);

// const hobbies = ["Sports", "Cooking"];
// hobbies.push("Reading"); // push add items to end of an array---returns the new length of the array
// hobbies.unshift("Coding"); // unshift add items to the begining of an array---returns the new length of the array
// const removedValue = hobbies.pop(); // pop removes the last element and return it, so we can store the returned value
// hobbies.shift(); // removes and returns the firs value
// console.log(hobbies);

// hobbies[1] = "Coding";
// hobbies[5] = "Reading";
// console.log(hobbies);

// hobbies.splice(1, 0, "Walking");
// console.log(hobbies);

// hobbies.splice(0, 1);
// console.log(hobbies);

const testResult = [1, 5.3, 1.5, 10.9, -5, 10];

let testResultsCopy = testResult.slice(); // when using like this slice returns a copy of an array
testResultsCopy = testResult.slice(0, 2); // selecting ranges both are indexes so second one needs to be higher thane first one
testResultsCopy = testResult.slice(2); // if we use just one parameter it will start that index to the end of an array and returns it
console.log(testResultsCopy);
