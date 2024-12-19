// let radomnumber =Math.floor( Math.random() * 100) + 6;
// console.log(radomnumber);

// const min = 50;
// const max = 100;
// let radomnumber =Math.floor( Math.random() * (max-min)) + min;
// console.log(radomnumber);


const mybutton = document.getElementById("mybutton");
const mylable = document.getElementById("mylabel");
const min = 1;
const max = 6;
let randomNum;  

mybutton.onclick = function () {
    randomNum = Math.floor(Math.random() * max) + min;
    mylable.textContent = randomNum;
}



