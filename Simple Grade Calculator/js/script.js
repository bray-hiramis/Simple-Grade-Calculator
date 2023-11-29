'use strict';

const inputScore = prompt('Please enter your score');
// const inputScore = 85;
// const inputScore = 'Please enter your score'; // change this later to prompt

const validScore = valid => {
    if (isNaN(valid) || valid < 0 || valid > 100 || valid === '-') {
        prompt(`${inputScore} is not a valid score! Please enter a valid score again.`);
    } else {
        return validScore;
    }
}

function studentScore() {
    if (inputScore >= 90 && inputScore <= 100) {
        console.log("Your Grade is A!");
    } else if (inputScore >= 80 && inputScore <= 89) {
        console.log("Your Grade is B!");
    } else if (inputScore >= 70 && inputScore <= 79) {
        console.log("Your Grade is C!");
    } else if (inputScore >= 60 && inputScore <= 69) {
        console.log("Your Grade is D!");
    } else if (inputScore < 60) {
        console.log("Your Grade is F!");
    } else {
        validScore(inputScore);
    }
}

const callScore = studentScore();