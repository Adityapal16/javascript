// Type conversion = change the datatypes of a value to another 
//                   (strings, numbers, booleans)

let age = window.prompt("What was your age?");
age = Number(age);   //if we dont use this type conversion it will show string to age variable
 age = age + 1;
// console.log(typeof age);
console.log(age, typeof age);

//Here are another examples

let x = "Riya";
let y = "Riya";
let z = "Riya";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

//lets repalce the string with number 0 ;
let a = "0";
let b = "0";
let c = "0";

a = Number(a);
b = String(b);
c = Boolean(c);

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);


//lets replace the string with empty values;

// let e = ""; 
// let f = "";
// let g = "";

// e = Number(e);
// f = String(f);
// g = Boolean(g);

// console.log(e, typeof e);
// console.log(f, typeof f);
// console.log(g, typeof g);

//just declare the variables;
let e; 
let f;
let g;

e = Number(e);
f = String(f);
g = Boolean(g);

console.log(e, typeof e);
console.log(f, typeof f);
console.log(g, typeof g);



