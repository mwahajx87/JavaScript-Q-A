// Question 1: Variable Declarations and Initialization
// Create three variables: productName (string with value "Laptop"), price (number with value 999.99), and inStock (boolean with value true). Console.log all three variables in a single statement.

let productName = "Laptop";
let price = 999.99;
let inStock = true;

console.log(productName, price, inStock);

// Question 2: Mathematical Operations
// Calculate and display:

// The remainder when 27 is divided by 4
// The square of 12 (using exponentiation operator **)
// The result of incrementing 8 by 1 using the ++ operator
// The result of decrementing 15 by 2 using the -= operator

let rnum_1 = 27;
let rnum_2 = 4;
let remainder = rnum_1 % rnum_2;

console.log(remainder);

let snum = 12;
let square = snum ** 2;

console.log(square);

let inum = 8;
let increment = ++inum;

console.log(increment);

let dnum = 15;
let decrement = (dnum -= 2);

console.log(decrement);

// Question 3: String Concatenation and Case Conversion
// Create two string variables: firstName = "alex" and lastName = "SMITH". Concatenate them with a space, then convert the result to proper case (first letter uppercase, rest lowercase). Also find the total length of the full name.

let firstName = "alex";
let lastName = "SMITH";

firstName =
  firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

let fullName = firstName + " " + lastName;

console.log(fullName);

// Question 4: if-else Conditional Logic
// Write an if-else statement that checks a temperature variable. If temperature is above 30, console.log "Hot day". If between 20 and 30 (inclusive), console.log "Pleasant day". Otherwise, console.log "Cold day". Test with temperature = 25

let temperature = 25;

if (temperature > 30) {
  console.log("Hot day");
} else if (temperature >= 20 && temperature <= 30) {
  console.log("Pleasant day");
} else {
  console.log("Cold day");
}

// Question 5: Comparison Operators
// Create three comparison operations:

// Check if 15 is strictly equal to "15"
// Check if 20 is greater than 15 AND less than 25
// Check if 10 is not equal to 10 OR 5 is greater than 3

console.log(15 === "15");

console.log(20 > 15 && 20 < 25);

console.log(10 != 10 || 5 > 3);

// Question 6: Array Manipulation - Basics
// Create an array colors with values ["red", "green", "blue"]. Then:

// Add "yellow" to the end
// Remove the first element
// Insert "purple" at index 1
// Console.log the final array and its length

let colors = ["red", "green", "blue"];

colors.push("yellow");

colors.shift();

colors.splice(1, 0, "purple");

console.log(colors);
console.log(colors.length);

// Question 7: Array Manipulation - splice()
// Start with array fruits = ["apple", "banana", "cherry", "date", "elderberry"]. Use splice() to:

// Remove "cherry"
// Replace "date" with "dragonfruit"
// Extract the middle 3 elements into a new array

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

fruits.splice(2, 1);

fruits.splice(2, 1, "dragonfruit");

let fruits_2 = ["apple", "banana", "cherry", "date", "elderberry"];

let middleFruits = fruits_2.splice(1, 3);

console.log(fruits);
console.log(middleFruits);

// Question 8: for Loop - Number Sequence
// Write a for loop that prints numbers from 1 to 10, but skips number 5 using continue, and stops at 8 using break. Also calculate the sum of all printed numbers.

let sum = 0;

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }

  if (i === 8) {
    break;
  }

  console.log(i);

  sum += i;
}

console.log("Sum of all :", sum);

// Question 9: Nested for Loop - Pattern
// Write nested for loops to create this pattern:

// *
// **
// ***
// ****
// *****

for (let i = 0; i < 5; i++) {
  let star = "";

  for (let j = 0; j <= i; j++) {
    star += "*";
  }

  console.log(star);
}

// Question 10: String Methods - Search and Extract
// Given text = "The quick brown fox jumps over the lazy dog":

// Find the position of "fox"
// Extract "brown fox" using substring/slice
// Check if the text contains "dog"
// Get the character at position 10

let text = "The quick brown fox jumps over the lazy dog";

console.log(text.match("fox").index);

let text_2 = text.slice(10, 19);
console.log(text_2);

console.log(text.includes("dog"));

console.log(text.charAt(10));

// Question 11: String Replacement
// Given sentence = "I love JavaScript and JavaScript is awesome":

// Replace the first "JavaScript" with "coding"
// Replace ALL "JavaScript" with "JS"
// Replace "awesome" with uppercase "AWESOME"

let sentence = "I love JavaScript and JavaScript is awesome";

let sentence_2 = sentence.replace("JavaScript", "coding");

let sentence_3 = sentence_2.replaceAll("JavaScript", "JS");

let sentence_4 = sentence_3.replace("awesome", "AWESOME");

sentence = sentence_4;

console.log(sentence);

// Question 12: Number Rounding and Formatting
// Given num = 123.456789:

// Round to 2 decimal places
// Round to nearest integer
// Get the floor value
// Get the ceiling value
// Format to show exactly 4 decimal places

let num = 123.456789;

console.log(num.toFixed(2));

roundNum = Math.round(num);
console.log(roundNum);

floorNum = Math.floor(num);
console.log(floorNum);

ceilNum = Math.ceil(num);
console.log(ceilNum);

console.log(num.toFixed(4));

// Question 13: Random Number Generation
// Generate:

// A random integer between 1 and 100 (inclusive)
// A random decimal between 0 and 1 with 3 decimal places
// A random number between 50 and 75 (inclusive)

console.log(Math.floor(Math.random() * 100) + 1);

console.log(Math.random().toFixed(3));

console.log(Math.floor(Math.random() * 26) + 50);

// Question 14: Type Conversion
// Perform these conversions:

// Convert string "123" to number
// Convert string "45.67" to decimal (float)
// Convert number 789 to string
// Check the type of "true" after converting to boolean

let str = "123";
console.log(+str);

let str_2 = "45.67";
console.log(parseFloat(str_2));

let strNum = 789;
console.log(strNum.toString());

let str_3 = "true";
toBoolean = Boolean(str_3);

console.log(typeof toBoolean);

// Question 15: Date and Time Operations
// Create a Date object for the current time and:

// Extract the year, month (0-11), and day
// Get the hours in 24-hour format
// Format it as "YYYY-MM-DD"
// Create a specific date for December 25, 2024

let date = new Date();

let year = date.getFullYear();

let month = date.getMonth();

let day = date.getDay();

console.log(year);
console.log(month);
console.log(day);

let hour = date.getHours();

console.log(hour);

formatDate = year + "-" + (month + 1) + "-" + day;

console.log(formatDate);

specificDate = new Date(2024, 11, 25);

console.log(specificDate);

// Question 16: Function - Basic Calculator
// Write a function calculate that takes two numbers and an operator (+, -, *, /) as parameters and returns the result. Handle division by zero by returning "Error: Division by zero".

function calculate(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      return "Error: Division by zero";
    }

    return num1 / num2;
  } else {
    return "Invalid operator";
  }
}

console.log(calculate(2, 1, "+"));
console.log(calculate(2, 2, "-"));
console.log(calculate(2, 3, "*"));
console.log(calculate(2, 4, "/"));
console.log(calculate(2, 0, "/"));

// Question 17: Function - Local vs Global Variables
// Create a global variable globalCounter = 0. Write a function incrementCounter that declares a local variable with the same name and increments it, while also incrementing the global variable. Show the difference after calling the function twice.

let globalCounter = 0;

function incrementCounter() {
  let globalCounter = 0;

  globalCounter++;

  console.log(globalCounter);
}

incrementCounter();

console.log(globalCounter);

incrementCounter();

// Question 18: switch Statement - Day of Week
// Write a switch statement that takes a number (0-6) and returns the corresponding day name (0=Sunday, 1=Monday, etc.). Include a default case for invalid numbers.

let dayNumber = 3;
let dayName;

switch (dayNumber) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day number";
}

console.log(dayName);

// Question 19: while Loop - Countdown
// Write a while loop that starts at 10 and counts down to 1, printing each number. Then print "Blast off!". Also calculate the factorial of 5 using a while loop.

let i = 10;
let n = 5;
let fraction = 1;

while (i >= 1) {
  console.log(i);

  if (i == 1) {
    console.log("Blast Off!");
  }

  if (n >= 1) {
    fraction = fraction * n;
    n--;
  }

  i--;
}

console.log(fraction);

// Question 20: do...while Loop - User Input Simulation
// Create a do...while loop that simulates asking for a password. Start with enteredPassword = "" and keep "asking" (incrementing a counter) until enteredPassword === "secret123" or 5 attempts are made.

let enteredPassword = "";
let attempts = 0;

do {
  attempts++;

  enteredPassword = "";

  console.log("Attempt", attempts);

  if (attempts === 5) {
    enteredPassword = "secret123";
  }
} while (enteredPassword !== "secret123" && attempts < 5);

if (enteredPassword === "secret123") {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}

// Question 21: Array Methods with for Loop
// Given numbers = [12, 45, 78, 23, 56, 89, 34]:

// Use a for loop to find the maximum value
// Use a for loop to calculate the average
// Create a new array with only numbers greater than 50
// Reverse the array without using reverse() method

let numbers = [12, 45, 78, 23, 56, 89, 34];

let max = numbers[0];
let sumNum = 0;
let greaterThan50 = [];
let reversed = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log(max);

for (let i = 0; i < numbers.length; i++) {
  sumNum += numbers[i];
}

let average = sumNum / numbers.length;

console.log(average);
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 50) {
    greaterThan50.push(numbers[i]);
  }
}

console.log(greaterThan50);

for (let i = numbers.length - 1; i >= 0; i--) {
  reversed.push(numbers[i]);
}

console.log(reversed);

// Question 22: Event Handling Simulation
// Create a function handleClick that:

// Gets a value from an input field with id "username"
// Checks if it's empty and shows an alert if so
// Otherwise, displays "Welcome, [username]!" in a paragraph with id "greeting"
// Resets the input field after greeting
function handleClick() {
  let username = document.getElementById("username").value;
  let para = document.getElementById("greeting");

  if (username !== "") {
    para.innerText = "Welcome, " + username + " !";
  } else {
    alert("Please enter a username");
  }

  document.getElementById("username").value = "";
}

// Question 23: Form Validation Function
// Write a function validateForm that:

// Takes email and password as parameters
// Returns true if email contains "@" and password length ≥ 8
// Otherwise returns false with specific error messages
// Test with multiple test cases

function validateForm(email, password) {
  if (!email.includes("@")) {
    console.log("Invalid email: @ missing");
    return false;
  }

  if (password.length <= 8) {
    console.log("Invalid password: 8 characters needed");
    return false;
  }

  return true;
}

console.log(validateForm("testemail.com", "password123"));

console.log(validateForm("test@email.com", "password123"));

console.log(validateForm("test@email.com", "pass"));

console.log(validateForm("test@email.com", "password123"));

// Question 24: Temperature Converter
// Create a function convertTemperature that:

// Takes a temperature and a unit ("C" or "F") as parameters
// Converts Celsius to Fahrenheit: (C × 9/5) + 32
// Converts Fahrenheit to Celsius: (F - 32) × 5/9
// Returns the converted value with 1 decimal place

function convertTemperature(temp, unit) {
  let result;

  if (unit === "C") {
    result = (temp * 9) / 5 + 32;

    return result.toFixed(1);
  } else if (unit === "F") {
    result = ((temp - 32) * 5) / 9;

    return result.toFixed(1);
  } else {
    return "Invalid unit";
  }
}

console.log(convertTemperature(80, "C"));
console.log(convertTemperature(50, "F"));

// Question 25: Shopping Cart Array Operations
// Create an array cart = [] and write these functions:

// addItem(name, price): Adds item object to cart
// removeItem(name): Removes item by name
// calculateTotal(): Returns sum of all item prices
// applyDiscount(percent): Applies discount to total
// listItems(): Returns array of just item names

let cart = [];

function addItem(name, price) {
  cart.push({ name: name, price: price });
}
function removeItem(name) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      cart.splice(i, 1);
      break;
    }
  }
}
function calculateTotal() {
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].price;
  }

  return total;
}
function applyDiscount(percent) {
  let total = calculateTotal();
  let discount = (total * percent) / 100;
  return total - discount;
}
function listItems() {
  let names = [];

  for (let i = 0; i < cart.length; i++) {
    names.push(cart[i].name);
  }

  return names;
}
addItem("Shoes", 2000);
addItem("Shirt", 1500);
addItem("Watch", 3000);

console.log(listItems());

console.log(calculateTotal());

console.log(applyDiscount(10));

removeItem("Shirt");

console.log(listItems());
