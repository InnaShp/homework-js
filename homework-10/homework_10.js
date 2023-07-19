//task 1
const btnTask1 = document.getElementById('task1-result');
btnTask1.addEventListener('click', () => {
  let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob",
  };
  let { first:f, third:x, fifth='Name №5' } = names;
  console.log(f);
  console.log(x); 
  console.log(fifth); 
});

//task 2
const btnTask2 = document.getElementById('task2-result');
btnTask2.addEventListener('click', () => {
  let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
  };
  let { names: [, name2,, name4], ages: [, age2,, age4] }= data;
  console.log(name2); 
  console.log(age2); 
  console.log(name4); 
  console.log(age4);
});

//task 3
const btnTask3 = document.getElementById('task3-result');
btnTask3.addEventListener('click', () => {
  function mul(...data) {
    const validNumbers = data.filter(el => typeof el === 'number' && Number.isFinite(el));
    return validNumbers.length > 0 ? validNumbers.reduce((acc, val) => acc * val) : 0;
  } 
  console.log(mul(1, "str", 2, 3, true));
  console.log(mul(null, "str", false, true));
})

//task 4
const btnTask4 = document.getElementById('task4-result');
btnTask4.addEventListener('click', () => {
  function mapBuilder (keysArray, valuesArrays) {
    const map = new Map();
    for (let i = 0; i < keysArray.length; i++) {
      map.set(keysArray[i], valuesArrays[i]);
    }
    return map;
  }
  let keys = [1, 2, 3, 4];
  let values = ["div", "span", "b", "i"];
  let map = mapBuilder(keys, values);
  console.log(map.size); 
  console.log(map.get(2)); 
});

//task 5
const btnTask5 = document.getElementById('task5-result');
btnTask5.addEventListener('click', () => {
  var arr = [];
  function showResult(num) {
    return function () {
      console.log(num);
    };
  }
  for (var i = 0; i <= 2; i++) { 
    arr[i] = showResult(i); // or instead of var use let
  }
  arr[0]();
  arr[arr.length - 1]();
});
