// //~~~~~~~~~~~~~~~~SETS~~~~~~~~~~~~~~~//
// const ids = new Set(["h", "b", "a"]);
// ids.add(2);
// // console.log(ids.has(1)); //returns true
// // console.log(ids.has(4)); //returns false
// console.log(ids.has(2));
// if (ids.has("h")) {
//   ids.delete("h");
// }

// for (const entry of ids.entries()) {
//   console.log(entry);
// }
// console.log(ids);

//~~~~~~~~~~~~~~~~MAPS~~~~~~~~~~~~~~~//

const person1 = { name: "hba" };
const person2 = { name: "sum" };

const personData = new Map([
  [person1, [{ date: "yesterday", price: 10 }]],
]);

personData.set(person2, [{ date: "two weeks", price: 20 }]);
console.log(personData);
console.log(personData.get(person1));

for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

for (const key of personData.keys()) {
  console.log(key);
}

for (const value of personData.values()) {
  console.log(value);
}

console.log(personData.size);
