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

const renderMovies = (filter = "") => {
  const movielist = document.getElementById("movie-list");

  if (movies.length === 0) {
    movielist.classList.remove("visible");
    return;
  } else {
    movielist.classList.add("visible");
  }
  movielist.innerHTML = "";

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    const { info, ...otherProps } = movie;
    // console.log(otherProps);
    // const { title: movieTitle } = info;
    let { getFormattedTitle } = movie;
    // getFormattedTitle = getFormattedTitle.bind(movie);
    let text = getFormattedTitle.apply(movie) + " - ";
    for (const key in info) {
      if (key !== "title" && key !== "_title") {
        text = text + `${key}: ${info[key]}`;
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

  if (extraName.trim() === "" || extraValue.trim() === "") {
    return;
  }

  const newMovie = {
    info: {
      set title(val) {
        if (val.trim() === "") {
          this._title = "DEFAULT";
          return;
        }
        this._title = val;
      },
      get title() {
        return this._title;
      },
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    getFormattedTitle() {
      console.log(this);
      return this.info.title;
    },
  };

  newMovie.info.title = title;
  console.log(newMovie.info.title);

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  console.log(this);
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
