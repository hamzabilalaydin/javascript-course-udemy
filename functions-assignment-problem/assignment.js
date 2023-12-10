const sayHello = (name) => console.log("Hi " + name);

const sayHello2 = (name, phrase) => console.log(phrase + " " + name);

const sayHello3 = () => console.log("Hi asdasd");
const sayHello4 = (name) => "Hi " + name;

sayHello("hba");
sayHello2("hba", "hello");
sayHello3();
console.log(sayHello4("hba"));

const sayHello5 = (name, phrase = "hi") =>
  console.log(phrase + " " + name);

sayHello5("hba");
sayHello5("hba", "hihi");

function checkInput(cb, ...args) {
  let hasEmptyText = false;
  for (const text of args) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}

checkInput(
  () => {
    console.log("All not empty");
  },
  "Hello",
  "12",
  "adsas",
  "Not empty"
);
