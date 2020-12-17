// import functions and grab DOM elements
import compareNumbers from './compareNumbers.js';

const input = document.getElementById('number-input');
const button = document.getElementById('submit-button');
const triesRemaining = document.getElementById('tries-remaining');
const winLose = document.getElementById('win-lose');
const guess = document.getElementById('guess');
const resetButton = document.getElementById('reset');

// initialize state
const correctNumber = Math.ceil(Math.random() * 20);
let guessesRemaining = 4;

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    const currentGuess = Number(input.value);

    const result = compareNumbers(currentGuess, correctNumber);

    if (result === 1) {
        guessesRemaining--;
      //display message, change view
        triesRemaining.textContent = (`${guessesRemaining} tries remaining.`);
        guess.textContent = `Your guess was too low.`;
    }
      //too high
    else if (result === -1) {
        guessesRemaining--;
        triesRemaining.textContent = (`${guessesRemaining} tries remaining.`);
        guess.textContent = `Your guess was too high.`;
      //display message, change view
    }
    else if (result === 0) {
        winLose.textContent = 'You Win!';
        //end the game
        document.getElementById('hide-me').style.visibility = 'hidden';
    }
    else if (guessesRemaining === 0) {
        winLose.textContent = 'You Lose!';
        //disable game
        document.getElementById('hide-me').style.visibility = 'hidden';
    }
});

const resetPage = () => {
    const userChoice = window.confirm('Reset?');

    if (userChoice === true) {
        document.location.reload();
    } else {
        return false;
    }
};
resetButton.addEventListener('click', resetPage);
