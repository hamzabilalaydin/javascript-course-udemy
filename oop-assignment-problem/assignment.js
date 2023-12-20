class Course {
  #_price;

  get price() {
    return "$" + this.#_price;
  }

  set price(value) {
    if (value < 0) {
      throw "Invalid value!";
    }
    this.#_price = value;
  }
  constructor(courseTitle, courseLength, coursePrice) {
    this.title = courseTitle;
    this.length = courseLength;
    this.price = coursePrice;
  }

  logging() {
    console.log(
      `Title: ${this.title}, Length: ${this.length}, Price: ${this.price}`
    );
  }
  performance() {
    console.log(`Performance: ${(this.length / this.#_price).toFixed(2)}`);
  }
}

const javascript = new Course("javascript", 52, 30);
const python = new Course("python", 44, 40);

javascript.logging();
javascript.performance();
python.logging();
python.performance();

class PracticalCourse extends Course {
  constructor(title, length, price, exercisesCount) {
    super(title, length, price);
    this.numOfExercises = exercisesCount;
  }
}

const angularCourse = new PracticalCourse("Angular", 30, 50, 10);

console.log(angularCourse);
angularCourse.logging();

class TheoreticalCourse extends Course {
  publish() {
    console.log("Publishing...");
  }
}

const flutter = new TheoreticalCourse("flutter", 26, 30);

flutter.price = 22;
flutter.logging();
flutter.publish();
