/*  A rock paper scissors game made for the Odin Project
    Made by me, Logan.
*/

// this function will choose the computer's choiice between rock, paper, or scissors at random
function computerPlay() {
    // declare an array that will store the computer's 3 possible choices
    let arrayPossibleChoices= ['rock', 'paper', 'scissors'];

    // randomly choose either rock, paper, or scissors and store it as a variable
    let computerChoice = Math.floor(Math.random() * arrayPossibleChoices.length);

    // test our output and make sure it's working correctly
    console.log(computerChoice);

    // this will be the final string that we return at the end of the function. It's empty for now until we need to redefine it.
    let finalChoice = '';

    // convert our selection into a string using a switch statement. 0 represents rock, 1 represents paper, and 2 represents scissors
    switch(computerChoice) {
        case 0:
            finalChoice = 'rock';
            break;
        case 1:
            finalChoice = 'paper';
            break;
        case 2:
            finalChoice = 'scissors';
            break;
    }

    // test our output again
    console.log(finalChoice);

    // return the randomly selected choice
    return finalChoice;
}

// making a function where the user can play a round against the computer
// two parameters are taken, the computer's choice of what to do and the player's choice of what to do.
function playRound(playerSelection, computerSelection) {
    // first we need to make the player's selection case-insensitive no matter what they input. so we just make it lowercase
    playerSelection = playerSelection.toLowerCase();

    // if...else statements to compare the player choice against the computer choice
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return "You both chose rock! That's a tie round!";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You lose! Paper beats rock!";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You win! Rock beats scissors!";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You win! Paper beats rock!";
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return "You both chose rock! That's a tie round!";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You lose! Scissors beats rock!";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You lose! Rock beats scissors!";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You win! Scissors beats paper!";
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return "You both chose scissors! It's a tie round!";
    }
}

// testing
const playerSelection = 'SCISSORS';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));