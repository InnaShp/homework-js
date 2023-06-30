const buttonTask5 = document.querySelector('#task_5-results');
buttonTask5.addEventListener('click', showResultsTask5);
function showResultsTask5() {
  //point 1
  class Circle {
    constructor(x, y, radius) {
      this.centerX = x;
      this.centerY = y;
      this.radius = radius;
    }
    getСircumference() {
      return Math.round(2*Math.PI*this.radius);
    } 
    static getCircumferenceByRadius(radius) {
      return Math.round(2*Math.PI*radius);
    }
    getCopy() {
      return new Circle(this.centerX, this.centerY, this.radius);
    }
    static getNewCircle(x, y, radius) {
      return new Circle(x, y, radius);
    }
    checkPoint(x, y) {
      const distance = Math.sqrt(Math.pow(x - this.centerX, 2) + Math.pow(y - this.centerY, 2));
      return distance <= this.radius;
    }
    toString() {
      return `Circle: center(${this.centerX}, ${this.centerY}), radius(${this.radius})`;
    }
  }
  const circle = new Circle(0, 0, 7);
  console.log(`The circumference is ${circle.getСircumference()}`);
  const circumference = Circle.getCircumferenceByRadius(15);
  console.log(`The circumference for a given radius is ${circumference}`);
  console.log(circle.getCopy());
  console.log(Circle.getNewCircle(1, 5, 10));
  console.log(circle.checkPoint(4, 6));
  console.log(circle.toString());

  //point 2
  function propsCount(currentObject) {
    return Object.keys(currentObject).length;
  }
  let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development"
  };
  console.log(propsCount(mentor));

  //point 3
  class Person {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
    showFullName() {
      return `Full name is ${this.name} ${this.surname}`
    }
  }
  class Student extends Person {
    constructor(name, surname, year) {
      super(name, surname);
      this.year = year;
    }
    showFullName(midleName) {
      return `Full name is ${this.name} ${this.surname} ${midleName}`;
    }
    showCourse() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.year; 
    }
  }
  const stud1 = new Student("Petro", "Petrenko", 2019);
  console.log(stud1.showFullName("Petrovych")); 
  console.log("Current course: " + stud1.showCourse());
}