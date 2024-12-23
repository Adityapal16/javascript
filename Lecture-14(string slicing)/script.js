// String slicing = creating a substring from a portion 
//                  portion of another string 

//                  string.slice(start, end)


const fullName = "Deepak  Kumar";

// let FirstName = fullName.slice(0, 6);
// console.log(FirstName);

// let LastName = fullName.slice(6, 14);
// console.log(LastName);

// let lastchar = fullName.slice(-1);
// console.log(lastchar);

let FirstName = fullName.slice(0, fullName.indexOf(" "));
console.log(FirstName);

let LastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(LastName);

//some more examples

const email = "paralengend@gmail.com";

let username = email.slice(0, email.indexOf("@"));
console.log(username);

let extesnion = email.slice(email.indexOf("@") + 1);
console.log(extesnion);


