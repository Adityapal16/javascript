// function =  A section of reusable code.
//             Declare code once , use it whenever you want.
//             call the function to exceute that code.

// function happyNewyear(username, age) {
//     console.log(`Happy New Year!🎉🎊${username}`);
//     console.log(`Happy New Year!🎉🎊${age}`);
//     console.log(`Happy New Year!🎉🎊${username} ${age}`);
//     console.log("Happy New Year!🎉🎊");
// }
// happyNewyear("Deepak", 19);
// happyNewyear("Rahul", 20);
// happyNewyear("Raj", 21);

function add(a, b) {
    // let result = a + b;
    // return result;
    return a + b;

}
//  let answer = add(10, 20);
//  console.log(answer);
console.log(add(10, 20));

function subtract (a, b) {
    return a - b;
}
function multiply (a, b) {
    return a * b;
}
function divide (a, b) {
    return a / b;
}


// function iseven (num) {
//     if (num % 2 === 0) {
//         return true;
//     }
//     return false;
// }
// let a = window.prompt("Enter a number to check if it is even or odd");
// console.log(iseven(a));

function iseven (num) {
    return num % 2 === 0 ? true : false;
}
// let a = window.prompt("Enter a number to check if it is even or odd");
// console.log(iseven(a));

function isvalidemail (email) {
    // if (email.includes("@") && email.includes(".")) {
    //     return true;
    // }else {
    //     return false;
    // }
    return email.includes("@") && email.includes(".") ? true : false;
}
console.log(isvalidemail("is@.com"));






