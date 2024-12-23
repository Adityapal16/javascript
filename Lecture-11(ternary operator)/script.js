// Ternary operator = a shortcut to if{} and else {} statements
//                    helps to assign a variable based on a condition
//                    condition ? codeifture : codeiffalse

let age = 25;
let name = "Sahil";
let isAdult = age >= 18 ? "Adult" : "Minor";
console.log(isAdult); // Prints "Adult"
console.log(name); // Prints "Sahil"

// Prompt user for marks and assign grade using the ternary operator
let marks = window.prompt("Enter your marks:");
marks = Number(marks); // Convert input to a number
let grade = marks >= 80 ? "A" : marks >= 60 ? "B" : marks >= 40 ? "C" : "D";

// Display the grade in an HTML element
const yourmarks = document.getElementById("yourmarks");
if (yourmarks) {
    yourmarks.textContent = `Your grade is: ${grade}`;
} else {
    console.error("Element with ID 'yourmarks' not found in the document.");
}
