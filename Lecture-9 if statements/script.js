// if statements = The if statement is used to execute a block of code only if a specified condition evaluates to true.


// The condition age >= 18 checks if the age is 18 or older.
let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
}


// The if-else statement lets you specify an alternative block of code if the condition is false.

let temperature = 30;

if (temperature > 25) {
  console.log("It's a hot day!");
} else {
  console.log("It's a cool day.");
}

// For multiple conditions, use if-else if-else.
let marks = 85;

if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 75) {
  console.log("Grade: A");
} else if (marks >= 50) {
  console.log("Grade: B");
} else {
  console.log("Grade: F");
}

// You can combine multiple conditions using logical operators like && (AND) and || (OR).

let time = 10;

if (time >= 9 && time <= 12) {
  console.log("Good Morning!");
}

// Example: OR Operator (||)

let day = "Saturday";

if (day === "Saturday" || day === "Sunday") {
  console.log("It's a weekend!");
}

// Nested if Statements
// You can place an if statement inside another if.

let username = "admin";
let password = "12345";

if (username === "admin") {
  if (password === "12345") {
    console.log("Login successful!");
  } else {
    console.log("Incorrect password.");
  }
} else {
  console.log("Invalid username.");
}


// question pratice:
// Write a program to check if a number is positive, negative, or zero.
// Create a script that tells whether a number is divisible by both 3 and 5.
