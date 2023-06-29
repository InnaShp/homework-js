const buttonTask4 = document.querySelector('#task_4-results');
buttonTask4.addEventListener('click', showResultsTask4);
function showResultsTask4() {
  //point 1
  function sumSliceArray(arr, first, second) {
    try {
      //check if the values of first and second are not integers
      if (!Number.isInteger(first) || !Number.isInteger(second)) {
        throw new Error('The provided values are not integers.');
      }
      //check if the values of first and second are our of range
      if (first >= arr.length || second >= arr.length || first < 0 || second < 0) {
        throw new Error("One or both of the indices exceed the array length.");
      }
      console.log(arr[first] + arr[second]);
    } catch (error) {
      console.error(error.message);
    }
  }
  const ordinaryNumbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const first = 3;
  const second = 7;
  sumSliceArray(ordinaryNumbersArray, first, second);

  //point 2
  function checkAge() {
    try {
      const name = prompt('What is your name?');
      const age = +prompt('How old are you?');
      const status = prompt('What is your status: admin, moderator, user?');
      //check if there are empty fields
      if (name === '' || name === null) {
        throw new Error('The field is empty! Please enter your name.');
      }
      if (age === '') {
        throw new Error('The field is empty! Please enter your age.');
      }
      if (status === '' || status === null) {
        throw new Error('The field is empty! Please enter your status.');
      }
      //check if the value of age is out of range or is not an integer
      if (!Number.isInteger(age)) {
        throw new Error('The value of age should be an integer.');
      }
      if (age > 70 || age < 18) {
        throw new RangeError('The value of age is out of range.');
      }
      //check if the status corresponds to the required value, not including whitespace or register
      if (
        status.trim().toLowerCase() !== 'admin' &&
        status.trim().toLowerCase() !== 'moderator' &&
        status.trim().toLowerCase() !== 'user'
      ) {
        throw new EvalError('You should enter the correct data.');
      }
      alert(`Hello ${name}, you are allowed to view the movie!`);
    } catch (error) {
      alert(`There is no access. ${error.name}: ${error.message}`)
    }
  }
  checkAge();

  //point 3
  function calcRectangleArea(width, height) {
    try {
      if (
        Number.isNaN(width) ||
        Number.isNaN(height) ||
        typeof width !== 'number' ||
        typeof height !== 'number'
      ) {
        throw new Error('The provided value is not a number.');
      }
      if (width <= 0 || height <= 0) {
        throw new Error('The measured value cannot be zero or less than zero.');
      }
      const area = Math.round((height * width) / 2);
      console.log(`The area of the right triangle is ${area}.`);
    } catch (error) {
      console.error(`${error.name}: ${error.message}`);
    }
  }
  calcRectangleArea(6, 10.7);

  //point 4 
  class MonthException extends Error {
    constructor(message) {
      super();
      this.name = 'MonthException';
      this.message = message;
    }
  }
  function showMonthName(month) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];
    if (month > 12 || month < 1)
      throw new MonthException('Incorrect month number.');
    return months[month - 1];
  }
  try {
    console.log(showMonthName(5));
    console.log(showMonthName(14));
  } catch (error) {
    console.error(error.name + ': ' + error.message);
  }

  //point 5
  function showUser(id) {
    if (id < 0) {
      throw new Error(`ID must not be negative: ${id}`);
    }
    return { id };
  }
  function showUsers(ids) {
    const users = ids.map(id => {
      try {
        return showUser(id);
      } catch (error) {
        console.error(error.message);
      }
    }).filter(user => user !== undefined);
    console.log(users);
  }
  showUsers([7, -12, 44, 22]);
}