const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease"); 
const reset = document.getElementById("reset");

const countlabel = document.getElementById("countlabel");
let count = 0;

increase.onclick = function () {
    count++;
    countlabel.textContent = count;
};

decrease.onclick = function () {
    count--;
    countlabel.textContent = count;
};

reset.onclick = function () {
    count = 0;
    countlabel.textContent = count;
};






// increase.addEventListener("click", () => {
//     count++;
//     countlabel.textContent = count;
// });

// decrease.addEventListener("click", () => {
//     count--;
//     countlabel.textContent = count;
// });

// reset.addEventListener("click", () => {
//     count = 0;
//     countlabel.textContent = count;
// });
