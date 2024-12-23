// Logical operators = used to combine or manipulate boolean values
//                      (true or false)


//                      AND = &&
//                      OR = ||
//                      NOT = !

// const temp = 25;
// if (temp > 0 && temp <= 30) {
//     console.log("The Weather is Good");
// }else{
//     console.log("The Weather is BAD");
// }


const temp = 250;
if (temp <= 0 || temp > 30) {
    console.log("The Weather is BAD");
}else{
    console.log("The Weather is GOOD");
}

const isUserLoggedIn = true;

if(!isUserLoggedIn){
    console.log("User is not logged in");
}else{
    console.log("User is logged in");
}