//Math = built-in object that provides a collection of properties and methods 

// The JavaScript Math object allows you to perform mathematical tasks on numbers.

Math.PI;
console.log(Math.PI)


//The Math Object
// Unlike other objects, the Math object has no constructor.

// The Math object is static.

// All methods and properties can be used without creating a Math object first.


// Math Properties (Constants)
// The syntax for any Math property is : Math.property.

// JavaScript provides 8 mathematical constants that can be accessed as Math properties:

Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E

console.log(Math.E)
console.log(Math.PI)
console.log(Math.SQRT2)
console.log(Math.SQRT1_2)
console.log(Math.LN2)
console.log(Math.LN10)
console.log(Math.LOG2E)
console.log(Math.LOG10E)

// Math Methods
// The syntax for Math any methods is : Math.method(number)


// Number to Integer
// There are 4 common methods to round a number to an integer:

//  Math.round(x)	//Returns x rounded to its nearest integer
//  Math.ceil(x) Returns x rounded up to its nearest integer
//  Math.floor(x) Returns x rounded down to its nearest integer
//  Math.trunc(x) Returns the integer part of x (new in ES6)

let x = Math.random(5.7);
// window.alert(x);

let y = Math.ceil(78.8);
// window.alert(y);

// Math.sign()
// Math.sign(x) returns if x is negative, null or positive:

Math.sign(-4);
Math.sign(0);
Math.sign(4);

// Math.pow()
// Math.pow(x, y) returns the value of x to the power of y:

let  a = Math.pow(8, 2);
console.log(a);

// Math.sqrt()
// Math.sqrt(x) returns the square root of x:

let b = Math.sqrt(64);
console.log(b);


// Math.abs()
// Math.abs(x) returns the absolute (positive) value of x:

let c = Math.abs(-4.7);
console.log(c);

// Math.sin()
// Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).

// If you want to use degrees instead of radians, you have to convert degrees to radians:

// Angle in radians = Angle in degrees x PI / 180.


let d = Math.sin(90 * Math.PI / 180); 
console.log(d);


// Math.cos()
// Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).

// If you want to use degrees instead of radians, you have to convert degrees to radians:

// Angle in radians = Angle in degrees x PI / 180.

let e = Math.cos(0 * Math.PI / 180); ;

console.log(e);    // returns 1 (the cos of 0 degrees)


// Math.min() and Math.max()
// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:


let f = Math.min(0, 150, 30, 20, -8, -200);
let g = Math.max(0, 150, 30, 20, -8, -200);
console.log(f,g);

// The Math.log() Method
// Math.log(x) returns the natural logarithm of x.

// The natural logarithm returns the time needed to reach a certain level of growth:

let h = Math.log(1);
let i = Math.log(2);
let j = Math.log(3);
let k = Math.log(4);
console.log(h , i, j, k);

// The Math.log2() Method
// Math.log2(x) returns the base 2 logarithm of x.


// How many times must we multiply 2 to get 8?
let l = Math.log2(8);
console.log(l);

// The Math.log10() Method
// Math.log10(x) returns the base 10 logarithm of x.
// How many times must we multiply 10 to get 1000?

let m = Math.log10(1000);
console.log(m);


// JavaScript Math Methods


// abs(x)	Returns the absolute value of x
// acos(x)	Returns the arccosine of x, in radians
// acosh(x)	Returns the hyperbolic arccosine of x
// asin(x)	Returns the arcsine of x, in radians
// asinh(x)	Returns the hyperbolic arcsine of x
// atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
// atan2(y, x)	Returns the arctangent of the quotient of its arguments
// atanh(x)	Returns the hyperbolic arctangent of x
// cbrt(x)	Returns the cubic root of x
// ceil(x)	Returns x, rounded upwards to the nearest integer
// cos(x)	Returns the cosine of x (x is in radians)
// cosh(x)	Returns the hyperbolic cosine of x
// exp(x)	Returns the value of Ex
// floor(x)	Returns x, rounded downwards to the nearest integer
// log(x)	Returns the natural logarithm (base E) of x
// max(x, y, z, ..., n)	Returns the number with the highest value
// min(x, y, z, ..., n)	Returns the number with the lowest value
// pow(x, y)	Returns the value of x to the power of y
// random()	Returns a random number between 0 and 1
// round(x)	Rounds x to the nearest integer
// sign(x)	Returns if x is negative, null or positive (-1, 0, 1)
// sin(x)	Returns the sine of x (x is in radians)
// sinh(x)	Returns the hyperbolic sine of x
// sqrt(x)	Returns the square root of x
// tan(x)	Returns the tangent of an angle
// tanh(x)	Returns the hyperbolic tangent of a number
// trunc(x)	Returns the integer part of a number (x)





