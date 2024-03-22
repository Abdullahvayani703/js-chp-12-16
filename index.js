// Q1
const input = prompt("Please enter a character (number or string):");

// Checking if the input is a number
if (!isNaN(input * 1)) {
  console.log("The given input is a number.");
}
else if (input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90) {
  console.log("The given input is an uppercase letter.");
}
else if (input.charCodeAt(0) >= 97 && input.charCodeAt(0) <= 122) {
  console.log("The given input is a lowercase letter.");
} else {
  console.log("The given input is neither a number nor a letter.");
}




// Q2
// Taking input from the user
const num1 = prompt("Enter the first integer:");
const num2 = prompt("Enter the second integer:");

// Converting the inputs to integers
num1 = parseInt(num1);
num2 = parseInt(num2);

if (num1 === num2) {
  console.log("The two integers are equal.");
}
else if (num1 > num2) {
  console.log("The first integer is larger.");
}
else {
  console.log("The second integer is larger.");
}



// Q3
// Taking input from the user
const num = prompt("Enter a number:");

// Converting the input to a number
num = Number(num);

if (num > 0) {
  console.log("The number is positive.");
}
else if (num < 0) {
  console.log("The number is negative.");
}
else {
  console.log("The number is zero.");
}


// Q4
// Taking input from the user
const char = prompt("Enter a character:");

if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
  console.log(true);
}
else {
  console.log(false);
}

// Q5
const correctPassword = "secret";

const userPassword = prompt("Please enter your password:");

if (!userPassword) {
  console.log("Please enter your password.");
}
else {
  if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");
  }
  else {
    console.log("Incorrect password.");
  }
}

// Q6
let greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
}
else {
  greeting = "Good evening";
}



// Q7
// Asking the user to enter the time
const time = prompt("Please enter the time (24-hour clock format):");

// Extracting the hours from the time
const hour = parseInt(time.substring(0, 2), 10);

//  if the time is before 12:00
if (hour < 12) {
  console.log("Good morning");
}
//  if the time is between 12:00 and 17:59
else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon");
}
//  if the time is between 18:00 and 20:59
else if (hour >= 18 && hour < 21) {
  console.log("Good evening");
}
//  if the time is between 21:00 and 23:59
else if (hour >= 21 && hour <= 23);


                    //           ARRAY           //  


// Q1
let studentNames = [];

// Q2
let studentName = new Array();

// Q3
let stringsArray = ['hello', 'world', 'this', 'is', 'a', 'strings', 'array'];

// Q4
let numbersArray = [1, 2, 3, 4, 5];

// Q5
let booleanArray = [true, false, true, false, true];

// Q6
let mixedArray = [1, 'hello', true, null, {name: 'John'}, [1, 2, 3]];

// Q7
let educationQualifications = ['SSC', 'HSC', 'BS', 'BCOM', 'MS', 'M.Phil.', 'PhD'];
