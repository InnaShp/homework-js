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

  //point 4
  class Marker {
    constructor(color, inkQuantity ) {
      this.color = color;
      this.inkQuantity = inkQuantity;
    }
    print(text) {
      let printedText = '';
      for (let i = 0; i < text.length; i++) {
        if (text[i] !== ' ') {
          if (this.inkQuantity >= 0.5) {
            printedText += text[i];
            this.inkQuantity -= 0.5;
          } else {
            break;
          }
        } else {
          printedText += ' ';
        }
      }
      console.log('%c' + printedText, `color: ${this.color}`);
    }
  }
  class RefillableMarker extends Marker {
    refill(inkQuantity) {
      this.inkQuantity += inkQuantity;
    }
  }
  const marker = new Marker('violet', 10);
  marker.print('Lviv, Ukraine'); 
  marker.print('Hello World'); 
  const refillableMarker = new RefillableMarker('purple', 5);
  refillableMarker.print('Lviv, Ukraine'); 
  refillableMarker.refill(20); 
  refillableMarker.print('Hello World');

  //point 5
  class Worker {
    constructor(fullName, dayRate, workingDays) {
      this.fullName = fullName;
      this.dayRate = dayRate;
      this.workingDays = workingDays;
    }
    showSalary() {
      const salary = this.dayRate * this.workingDays;
      console.log(`Worker's salary is ${salary}`);
    }
    #experience = 1.2;
    get experience() {
      return this.#experience;
    }
    set experience(newExperience) {
      return this.#experience = newExperience;
    }
    showSalaryWithExperience() {
      const salaryWithExperience = this.dayRate * this.workingDays * this.#experience;
      console.log(`Worker's salary with experience is ${salaryWithExperience}`);
    }
  }
  const workers = [
    new Worker('John Johnson', 20, 23), 
    new Worker('Tom Tomson', 48, 22),
    new Worker('Andy Ander', 29, 23)
  ];
  workers.forEach(worker => {
    console.log(worker.fullName);  
    worker.showSalary();
    console.log("New experience: " + worker.experience);
    worker.experience = 1.5;
    console.log("New experience: " + worker.experience);
    worker.showSalaryWithExperience();
  });
  const sortedWorkers = workers.sort((a, b) => {
    return (a.dayRate * a.workingDays * a.experience) - (b.dayRate * b.workingDays * b.experience);
  });
  sortedWorkers.forEach(worker => {
    console.log(`${worker.fullName}: ${worker.dayRate * worker.workingDays * worker.experience}`);
  });
  
}