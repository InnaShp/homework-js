//task 1
const btnTask1 = document.getElementById('task1-result');
btnTask1.addEventListener('click', () => {
  function upperCase(string) {
    if (string.charAt(0) === string.charAt(0).toUpperCase())
      console.log("String's starts with uppercase character");
    else console.log("String's not starts with uppercase character");
  }
  upperCase('regexp');
  upperCase('RegExp');
});

//task 2
const btnTask2 = document.getElementById('task2-result');
btnTask2.addEventListener('click', () => {
  function checkEmail(string) {
    const pattern = /\S+@\S+\.\S+/;
    console.log(pattern.test(string));
  }
  checkEmail("Qmail2@gmail.com");
  checkEmail("mt@gmailcom");
});

//task 3
const btnTask3 = document.getElementById('task3-result');
btnTask3.addEventListener('click', () => {
  const inputString = 'Java Script';
  const pattern = /(\w+)\s+(\w+)/;
  const outputString = inputString.replace(pattern, '$2, $1');
  console.log('Input string: ' + inputString);
  console.log('Output string: ' + outputString);
})

//task 4
const btnTask4 = document.getElementById('task4-result');
btnTask4.addEventListener('click', () => {
  function validateCardNumber(cardNum) {
    const pattern = /\d{4}-\d{4}-\d{4}-\d{4}/;
    if (pattern.test(cardNum)) console.log('The card number is valid');
    else console.log('The card number is NOT valid');
  }
  validateCardNumber('9999-9999-9999-9999');
  validateCardNumber('0099 9999 9999 9999');
  validateCardNumber('0dd9-9999-9999-9999');
});

//task 5
const btnTask5 = document.getElementById('task5-result');
btnTask5.addEventListener('click', () => {
  function checkEmail(email) {
    const pattern = /^[A-Za-z0-9]+([A-Za-z0-9_.-](?!.*[_.-]{2}))*@[A-Za-z0-9]+([.-](?!.*[_.-]{2}))*\.[A-Za-z]{2,}$/;
    return pattern.test(email) ? "Email is correct!" : "Email is not correct!";
  }
  console.log(checkEmail('my_mail@gmail.com'));
  console.log(checkEmail('#my_mail@gmail.com'));
  console.log(checkEmail('my_ma--il@gmail.com'));
});

//task 6
const btnTask6 = document.getElementById('task6-result');
btnTask6.addEventListener('click', () => {
  function checkLogin(str) {
    const loginPattern = /^[A-Za-z][A-Za-z0-9.]{1,9}$/;
    const numberPattern = /\d+(\.\d+)?/g;
    const isValidLogin = loginPattern.test(str);
    const numbers = str.match(numberPattern);
    return `Is valid login: ${isValidLogin}, numbers: ${numbers}`;
  }
  console.log(checkLogin('ee1.1ret3'));
  console.log(checkLogin('ee1*1ret3'));
});
