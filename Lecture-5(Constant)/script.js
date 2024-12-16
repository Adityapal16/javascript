// const =  a variable cannot change

const pi = 3.14159;
let radius;
let circumference;

document.getElementById("mybutton").onclick = function(){
    radius = document.getElementById("mytext").value;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("result").textContent = `${circumference}`+ "cm";
}
