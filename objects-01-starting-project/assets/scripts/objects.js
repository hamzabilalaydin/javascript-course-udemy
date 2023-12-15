// const movieList = document.getElementById("movie-list");
// movieList.style["background-color"] = "red";
// movieList.style.display = "block";

// const userKeyName = "level";

// let person = {
//   name: "hba",
//   age: 28,
//   hobbies: ["sports", "cooking"],
//   [userKeyName]: "...", // value of userKeyName given as a 'key'
//   greet: function () {
//     alert("Hi there!");
//   },
//   1.5: "hello", // numbers can be used as keys
// };

// delete person.age;
// person.isAdmin = true;
// // person.greet();
// const keyName = "name";

// console.log(person[keyName]);
// console.log(person[1.5]); // with numbers we don't have to use "quotes"
// console.log(person);

const addMovieBtn = document.querySelector("#add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = () => {
  const movielist = document.getElementById("movie-list");

  if (movies.length === 0) {
    movielist.classList.remove("visible");
    return;
  } else {
    movielist.classList.add("visible");
  }
  movielist.innerHTML = "";

  movies.forEach((movie) => {
    const movieEl = document.createElement("li");
    let text = movie.info.title + " - ";
    for (const key in movie.info) {
      if (key !== "title") {
        text = text + `${key}: ${movie.info[key]}`;
      }
    }
    movieEl.textContent = text;
    movielist.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      title: title,
      [extraName]: extraValue,
    },
    id: Math.random(),
  };

  movies.push(newMovie);
  renderMovies();
};

addMovieBtn.addEventListener("click", addMovieHandler);
