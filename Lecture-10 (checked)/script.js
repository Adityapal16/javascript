const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const mastercardbtn = document.getElementById("mastercardbtn");
const upibtn = document.getElementById("upibtn");
const mysubmit = document.getElementById("mysubmit");
const subresult = document.getElementById("subresult");
const pyamentresult = document.getElementById("pyamentresult");

mysubmit.onclick = function () {
    // Check if the checkbox is checked
    if (mycheckbox.checked) {
        subresult.innerHTML = "You have selected the checkbox";
    } else {
        subresult.innerHTML = "You have not selected the checkbox";
    }

    // Check which radio button is selected
    if (visabtn.checked) {
        pyamentresult.textContent = `You are paying with Visa`;
    } else if (mastercardbtn.checked) {
        pyamentresult.textContent = `You are paying with MasterCard`;
    } else if (upibtn.checked) {
        pyamentresult.textContent = `You are paying with UPI`;
    } else {
        pyamentresult.textContent = `You are not paying with any of the above`;
    }
};
