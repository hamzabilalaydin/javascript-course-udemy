const buttons = document.querySelectorAll("button");

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

buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", btnClickHandler);
});

window.addEventListener("scroll", (event) => {
  console.log(event);
});
