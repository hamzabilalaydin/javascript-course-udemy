//~~~~~~~~~~~~~~~~SETS~~~~~~~~~~~~~~~//
const ids = new Set(["h", "b", "a"]);
ids.add(2);
// console.log(ids.has(1)); //returns true
// console.log(ids.has(4)); //returns false
console.log(ids.has(2));
if (ids.has("h")) {
  ids.delete("h");
}

for (const entry of ids.entries()) {
  console.log(entry);
}
console.log(ids);

//~~~~~~~~~~~~~~~~MAPS~~~~~~~~~~~~~~~//
