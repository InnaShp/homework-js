//task 1
const btnTask1 = document.getElementById('task1-result');
btnTask1.addEventListener('click', () => {
  const getPromise = (message, delay) => new Promise(res => setTimeout(() => res(message), delay));   
  getPromise("test promise", 2000).then(data => console.log(data));
});

//task 2
const btnTask2 = document.getElementById('task2-result');
btnTask2.addEventListener('click', () => {
  function calcArrProduct(arr) {
    return new Promise((res, rej) => arr.every(num => typeof num === 'number') 
      ? res(arr.reduce((acc, num) => acc * num, 1))
      : rej(new Error('Error! Incorrect array!'))
    );
  }
  calcArrProduct([3,4,5]).then(result => console.log(result)); 
  calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));
});

//task 3
const btnTask3 = document.getElementById('task3-result');
btnTask3.addEventListener('click', () => {
  new Promise(function (resolve, reject) {
    const number = prompt('Please enter the number.') 
    !number || isNaN(number) || number.trim() === ""
      ? reject(new Error("Invalid input! Please enter a number."))
      : resolve(parseFloat(number));
  }).catch(function (error) {
      return new Promise(resolve => {
        (function askNumber() {
          const number = prompt(error.message);
          !number || isNaN(number) || number.trim() === "" 
            ? askNumber() 
            : resolve(parseFloat(number));
        })();
      });
  }).then(function (result) {
    console.log("Number entered by the user:", result);
  });
})