const button = document.querySelector("button");

// button.onclick = () => {
//   console.log("Clicked ;)");
// };

const btnClickHandler = (event) => {
  // event.target.disabled = true;
  console.log(event);
};

const anotherBtnClickHandler = () => {
  console.log("Button was clicked");
};

// button.onclick = btnClickHandler;

// button.addEventListener("click", btnClickHandler); // can not use bind method

// setTimeout(() => {
//   button.removeEventListener("click", btnClickHandler);
// }, 3000);

// buttons.forEach((btn) => {
//   btn.addEventListener("mouseenter", btnClickHandler);
// });

// window.addEventListener("scroll", (event) => {
//   console.log(event);
// });

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector("div");

div.addEventListener("mouseenter", (event) => {
  console.log("CLICKED DIV");
  console.log(event);
});

button.addEventListener("click", function (event) {
  event.stopPropagation();
  // event.stopImmediatePropagation();
  console.log("CLICKED BUTTON");
  console.log(event);
  console.log(this);
});

// const listItems = document.querySelectorAll("li");
// listItems.forEach((listItem) => {
//   listItem.addEventListener("click", (event) => {
//     event.target.classList.toggle("highlight");
//   });
// });

const list = document.querySelector("ul");
list.addEventListener("click", function (event) {
  // console.log(event.currentTarget);
  // event.target.classList.toggle("highlight");
  event.target.closest("li").classList.toggle("highlight");
  // form.submit();
  button.click();
  console.log(this);
});
