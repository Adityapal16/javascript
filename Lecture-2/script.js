// Variable =  variables are containers used to store data that can be referenced and manipulated in your program.
// Data Types =  data types are the types of data that a variable can hold. For example
// int, float, char, string, bool etc.

// var (old way, used before ES6)
// let (introduced in ES6, recommended for most use cases)
// const (introduced in ES6, for values that don’t change)

// var variableName = value;   // Declaring with var
// let variableName = value;   // Declaring with let
// const variableName = value; // Declaring with const

let y = "rohit";

let food = "pizza";
let name = "Riya";
let age = 25;
let isMarried = true;
let address = "India";
let hobbies = ["reading", "swimming", "coding"];
let person = {
  name: "Riya",
  age: 25,
  address: "India",
  hobbies: ["reading", "swimming", "coding"],
};
let numbers = [1, 2, 3, 4, 5];
console.log(typeof food);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof address);
console.log(typeof hobbies);

const PI = 3.14;
console.log(typeof PI);
let area = 68;
console.log(typeof area);

const jatin = "batman(ballaman)";
console.log(typeof jatin);
const marks = 56;

let dev = "Nice Guy";
let result = 78;
let dream = "Dream big";
let gf_name = "honewale";
let gf_age = 25;
let gf_address = "India";
console.log(
  `dev is ${dev}, who got ${result} in maths test, because of ${gf_name},this was the big reason to forgot ${dream},her gf age is ${gf_age},who lives in ${gf_address}`
);
console.log(typeof marks);
console.log(`i got ${marks} in hindi`);
console.log(`i like to eat ${food}`);
console.log(
  `myself ${name},I am ${age} years old, i live in ${address}, my hobbies are ${hobbies}`
);
console.log(person);

document.getElementById("p1").textContent = name;
document.getElementById("p2").textContent = `you are ${age} years old`;
document.getElementById("p3").textContent = address;
document.getElementById("h1").textContent = "Hello developers";

//   Arithmetic operations  =  arithmetic operators are used to perform mathematical operations on numbers.
//   For example: +, -, *, /, % etc.
console.log(56 + 67);
console.log(56 * 56);
let mathematical = 78;
let science = 90;
let cs = 90;
let ip = 45;

console.log(cs + ip);
console.log(cs - ip);
console.log(cs / ip);
console.log(cs * ip);
console.log(cs % ip);
console.log(mathematical + science);
console.log(mathematical % science);
console.log(mathematical / science);
console.log(mathematical ** science);
//   Comparison operators =  comparison operators are used to compare two values and return a boolean value.
//   For example: ==, !=, ===, !==, >, <, >=,
//   <= etc.
let a = 10;
let b = 20;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a == b);
// console.log(a != b);
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);

//   Assignment operators =  assignment operators are used to assign a value to a variable.
//   For example: =, +=, -=, *=, /= etc.

let launchpad = 78;
let add_logs = 89;

boat = launchpad *= add_logs;

console.log(launchpad);
// window.alert(launchpad)

//   Increment and decrement operators =  increment and decrement operators are used to increase or decrease the
//   value of a variable by 1.
//   For example: ++, -- etc.
boat++;
boat--;
boat--;
boat--;
boat--;
boat++;
boat++;
boat++;
boat++;
console.log(boat);
