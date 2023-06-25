const buttonTask3 = document.querySelector('#task_3-results');
buttonTask3.addEventListener('click', showResultsTask3);
function showResultsTask3() {
  //point 1
  function createArray(start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
  }
  const arr = createArray(2, 9);
  console.log(arr);

  //point 2
  function displayNumbers(a, b) {
    for (let i = a; i <= b; i += 1) {
      for (let j = 0; j < i - a + 1; j++) {
        console.log(i);
      }
    }
  }
  displayNumbers(2, 7);

  //point 3
  function randArray(k) {
    const array = [];
    const min = 1;
    const max = 500;
    for (let i = 0; i < k; i++) {
      array.push(Math.floor(min + Math.random() * (max - min) + 1));
    }
    console.log(array);
  }
  randArray(5);

  //point 4
  function compact(arr) {
    const result = [];
    for (let i = 0; i < arr.length; ++i) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  const array = [5, 3, 4, 5, 6, 7, 3];
  const arr2 = compact(array);
  console.log(arr2);

  //point 5 
  function extractStringsAndNumbers(arr, arrOfNum, arrOfStr) {
    for (let i = 0; i < arr.length; i++) {
      switch (true) {
        case typeof arr[i] === 'string':
          arrOfStr.push(arr[i]);
          break;
        case typeof arr[i] === 'number':
          arrOfNum.push(arr[i]);
          break;
        case Array.isArray(arr[i]):
          extractStringsAndNumbers(arr[i], arrOfNum, arrOfStr);
          break;
      }
    }
  }
  function funcName(arr) {
    const arrayOfNumbers = [];
    const arrayOfStrings = [];
    extractStringsAndNumbers(arr, arrayOfNumbers, arrayOfStrings);
    return [arrayOfNumbers, arrayOfStrings];
  }
  let array2 = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];
  let arrNew = funcName(array2);
  console.log(arrNew);

  //point 6
  function calc(a, b, op) {
    switch (true) {
      case op === 1:
        return a-b;
      case op === 2:
        return a*b;
      case op === 3:
        return a/b;
      default:
        return a+b;
    }
  }
  console.log(calc(10, 3, 1));
  console.log(calc(4, 5, 2));
  console.log(calc(24, 6, 3));
  console.log(calc(0, 7, 7));

  //point 7
  function findUnique(arr) {
    const uniqueArr = [];
    for(let i = 0; i < arr.length; ++i) {
      if (uniqueArr.indexOf(arr[i]) === -1) {
        uniqueArr.push(arr[i]);
      }
    }
    return uniqueArr.length === arr.length;
  }
  console.log(findUnique([1, 2, 3, 5, 3])); 
  console.log(findUnique([1, 2, 3, 5, 11]));

  //point 8
  function create(str) {
    return function(string) {
      return str === string;
    }
  } 
  const tom = create("pass_for_Tom");
  tom("pass_for_Tom"); 
  tom("pass_for_tom");
}

