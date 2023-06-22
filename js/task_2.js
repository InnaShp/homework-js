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
  const isAdult = prompt('Are you of legal age?');
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
  if (isNaN(firstSide) || isNaN(secondSide) || isNaN(thirdSide) || firstSide <= 0 || secondSide <= 0 || thirdSide <= 0) {
    console.log('Incorrect data.');
  } else if (firstSide + secondSide > thirdSide && firstSide + thirdSide > secondSide && secondSide + thirdSide > firstSide) {
    const p = (firstSide + secondSide + thirdSide) / 2;
    const areaOfTriangle = Math.sqrt(p * (p - firstSide) * (p - secondSide) * (p - thirdSide));
    console.log('Area of triangle is ' + areaOfTriangle.toFixed(3));
  } else console.log('The triangle with the given sides does not exist.');

  //point 5
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

  //point 6
  const pricePer100Lines = 50;
  const eachThirdDelay = 20;
  const linesPerIncome = 100

  function showLinesCount() {
    const expectedIncome = +prompt('What income do you expect to have?');
    const delayCount = +prompt('How many times have you been delayed?');
    const baseLines = Math.ceil(expectedIncome/pricePer100Lines)* linesPerIncome;
    const penaltyLines = delayCount >= 3 ? Math.ceil(Math.floor(delayCount/3*eachThirdDelay)/pricePer100Lines) * linesPerIncome : 0;
    const linesCount = baseLines + penaltyLines;
    console.log(`You should write ${linesCount} lines of code.`);
  }
  showLinesCount();
}



