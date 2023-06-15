// point 2
console.log('Inna Shpachynska');

// point 3
let age = 24;
let newAge = 43;
alert(`${age}, ${newAge}`);
age = newAge;
alert(`${age}, ${newAge}`);

// point 4
const person  = {
  name: 'John',
  age: 20,
  isEmployed: false,
  maritalStatus: undefined,
  experience: null
}

// point 5
const isAdult = confirm('Are you of legal age?');
console.log(isAdult);

// point 6
const firstName = 'Inna';
const lastName = 'Shpachynska';
const studyGroup = '09.06.2023 JS Fundamentals';
const birthYear = 1999;
const isMarried = false;
console.log(birthYear, isMarried, firstName, lastName, studyGroup);
const workingExperience = null;
const workplace = undefined;
console.log(typeof(workingExperience), typeof(workplace));

// point 7
const login = prompt('What is your login?');
const email = prompt('What is your email?');
const password = prompt('What is your password?');
alert(`Dear ${login}, your email is ${email}, your password is ${password}!`);

// point 8
const secondsInHour = 60 * 60; // 60 seconds in 1 minute and 60 minutes in 1 hour
const secondsInDay = secondsInHour * 24; // 24 hours in a day
const secondsInMonth = secondsInDay * 30; // 30 days in a month
alert(`In 1 hour = ${secondsInHour} seconds , in 1 day = ${secondsInDay} seconds, in 1 month = ${secondsInMonth} seconds`);