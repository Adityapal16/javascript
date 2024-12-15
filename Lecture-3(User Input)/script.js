//how to accept user input


//1. Easy Way = window prompt

//2. Professional way = Html textbox

// let username ;
// username = window.prompt("What's your username");
// console.log(username);

let username;
document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("text").value;
    // console.log(username);
    document.getElementById("myh1").textContent = `Hello ${username}`;

}