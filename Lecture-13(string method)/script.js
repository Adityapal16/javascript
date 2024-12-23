// string methods = allow you to manipulate and work with text (strings)


let username  = "ParaLengend"
let greeting = `Hello👋, ${username}!` // template literals = allow you to embed expressions
console.log(greeting);

console.log(username.charAt(0));
console.log(username.charAt(1));
console.log(username.charAt(2));
console.log(username.charAt(3));
console.log(username.charAt(4));
console.log(username.charAt(5));
console.log(username.charAt(6));

console.log(username.indexOf("L"));
console.log(username.indexOf("P"));
console.log(username.indexOf("g"));
console.log(username.indexOf("d"));
console.log(username.indexOf("a"));

console.log(username.lastIndexOf("a"));
console.log(username.lastIndexOf("e"));

console.log(username.length);

let name = "Paraspartin";
 name = "Paraspartin  ";
 console.log(name.trim());

 name = name.toUpperCase();  //.toLowerCase()
 console.log(name); 

 name =  name.repeat(4);
 console.log(name);
 

//  let result = name.startsWith(" ");
//  console.log(result);
let result = name.endsWith(" ");
 console.log(result);


 let sirname = "sharma sing";
 sirname = sirname.includes(" ");
 console.log(sirname);

//  let phonenumber = "345-567-21-465";
//   phonenumber = phonenumber.replaceAll("-","");
//   console.log(phonenumber);

//   let phonenumber = "345-567-21-465";
//   phonenumber = phonenumber.replaceAll("-","/");
//   console.log(phonenumber);

// let phonenumber = "345-567-21-465";
// phonenumber = phonenumber.padStart(20, "0");
// console.log(phonenumber);


let phonenumber = "345-567-21-465";
phonenumber = phonenumber.padEnd(20, "0");
console.log(phonenumber);

