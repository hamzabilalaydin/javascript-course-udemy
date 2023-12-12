const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector("#add-modal");
// const addMovieModal = document.body.children[1];

const startAddMovieButton = document.querySelector("header button");

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
};

const backdrop = document.querySelector("#backdrop");

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
startAddMovieButton.addEventListener("click", toggleBackdrop);
