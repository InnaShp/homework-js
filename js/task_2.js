const buttonTask2 = document.querySelector('#task_2-results');
buttonTask2.addEventListener('click', showResultsTask2);
function showResultsTask2() {
  //point 1
  function displayExpressionOutput(a, b, c) {
    if (a < b && b < c) {
      console.log(`The statement ${a}<${b}<${c} is true!`);
    } else console.log(`The statement ${a}<${b}<${c} is false!`);
  }
  displayExpressionOutput(10, 5, 7);
  displayExpressionOutput(1, 3, 5);

  //point 2
  let x = 1;
  let y = 2;
  let res1 = x.toString() + y.toString();
  console.log(res1);
  console.log(typeof res1);

  let res2 = (x < y).toString() + '2';
  console.log(res2);
  console.log(typeof res2);

  let res3 = x < y;
  console.log(res3);
  console.log(typeof res3);

  let res4 = x + y - 'Number';
  console.log(res4);
  console.log(typeof res4);

  //point 3
  const isAdult = prompt('Are you of legal age? Please enter your age.');
  if (0 < isAdult && isAdult < 18) {
    alert('You are too young.');
  } else {
    if (isAdult > 18) {
      alert('You have reached the age of majority.');
    } else alert('Please, make sure you have entered the correct data.');
  }

  //point 4
  const firstSide = +prompt('Enter the fist side of triangle, please.');
  const secondSide = +prompt('Enter second side of triangle, please.');
  const thirdSide = +prompt('Enter third side of triangle, please.');

  function calculateTriangleArea(a, b, c) {
    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
      console.log('Incorrect data.');
    } else if (a + b > c && a + c > b && b + c > a) {
      const p = (a + b + c) / 2;
      const areaOfTriangle = Math.sqrt(p * (p - a) * (p - b) * (p - c));
      console.log('Area of triangle is ' + areaOfTriangle.toFixed(3));
      const isRightTriangle = a ** 2 + b ** 2 === c ** 2;
      console.log(`This triangle is ${isRightTriangle ? '' : 'not '}a right triangle.`);
    } else console.log('The triangle with the given sides does not exist.');
  }
  calculateTriangleArea(firstSide, secondSide, thirdSide);

  //point 5
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greeting = null;
  switch (true) {
    case (currentHour >= 23 || currentHour < 5):
      greeting = 'Доброї ночі';
      break;
    case (currentHour >= 5 && currentHour < 11):
      greeting = 'Доброго ранку';
      break;
    case (currentHour >= 11 && currentHour < 17):
      greeting = 'Доброго дня';
      break;
    default:
      greeting = 'Доброго вечора';
  }
  console.log(greeting);

  //point 6
  const arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
  const data = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {})
  const frequencies = Object.keys(data).map(key => data[key]);
  const maxFrequency = Math.max(...frequencies);
  const mostFrequentNumber = Object.keys(data)
    .filter(key => data[key] === maxFrequency)
    .map(Number);
  const newArray = arr.filter(num => !mostFrequentNumber.includes(num));
  console.log(mostFrequentNumber);
  console.log(newArray);

  //point 7
  const menuOption =  prompt('Please, enter the number corresponding to the option you want to calculate: 1 - lines of code, 2 - number of delays, 3 - total income.');
  switch (menuOption) {
    case '1':
      showLinesCount();
      break;
    case '2':
      showDelaysCount();
      break;
    case '3': 
      showIncomeCount();
      break;
    default: 
      console.error('Out of range.');
      break;
  }

  const pricePer100Lines = 50;
  const eachThirdDelay = 20;
  const linesPerIncome = 100;

  function showLinesCount() {
    const expectedIncome = +prompt('What income do you expect to have?');
    const delayCount = +prompt('How many times have you been delayed?');
    const baseLines = Math.ceil(expectedIncome / pricePer100Lines) * linesPerIncome;
    const penaltyLines = delayCount >= 3 ? Math.ceil(Math.floor(delayCount / 3 * eachThirdDelay) / pricePer100Lines) * linesPerIncome : 0;
    const linesCount = baseLines + penaltyLines;
    console.log(`You should write ${linesCount} lines of code.`);
  }
  function showDelaysCount() {
    const linesOfCode = +prompt('How many lines of the code have you written?');
    const expectedIncome = +prompt('What income do you expect to have?');
  }
  function showIncomeCount() {
    console.log('hi');
  }
}
  

 