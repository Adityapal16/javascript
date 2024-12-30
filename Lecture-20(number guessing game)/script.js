// Number Guessing Game

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}:`);

    // Handle case when user clicks "Cancel"
    if (guess === null) {
        window.alert('Game cancelled. Better luck next time!');
        break;
    }

    // Convert input to a number
    guess = Number(guess);

    // Check if the input is a valid number
    if (isNaN(guess)) {
        window.alert('Invalid input. Please enter a valid number.');
    } else if (guess < minNum || guess > maxNum) {
        window.alert(`Out of range. Please enter a number between ${minNum} and ${maxNum}.`);
    } else {
        // Increment the attempt counter
        attempts++;

        // Compare guess with the answer
        if (guess === answer) {
            window.alert(`🎉 Congratulations! You guessed the correct number (${answer}) in ${attempts} attempts.`);
            running = false; // Exit the game loop
        } else if (guess < answer) {
            window.alert('Too low! Try a higher number.');
        } else {
            window.alert('Too high! Try a lower number.');
        }
    }
}
