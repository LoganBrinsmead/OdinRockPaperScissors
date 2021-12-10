/*  A rock paper scissors game made for the Odin Project
    Made by me, Logan.
*/

// create const to select all the buttons
const buttons = document.querySelectorAll('button');

// declaring the 'rock' button
const rockButton = document.querySelector('#rock-button');

// declaring the 'paper' button
const paperButton = document.querySelector('#paper-button');

// declaring the scissors button
const scissorsButton = document.querySelector('#scissors-button');

// div class 'results' is for displaying the results
const resultsDiv = document.querySelector('#results-div');

// declariing the pointsDiv to display the points
const pointsDiv = document.querySelector('#points-div');

// declaring the endDiv to display thhe end result of the game
const endDiv = document.querySelector('#end-div');

// create div for the notification of if you won *that round* or not, etc. then modify it according to the parameters
const notify = document.createElement('div');
notify.classList.add('notify');


// create div for the points of the computer
const computerPointsDiv = document.createElement('div');
computerPointsDiv.classList.add('computer-points-div');

// create div for the points of the player
const playerPointsDiv = document.createElement('div');
playerPointsDiv.classList.add('player-points-div');

// create div in memory for the end of the game
const gameOverDiv = document.createElement('div');


// integers to keep score for the computer and the player
let computerScore = 0;
let playerScore = 0;


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

function playRound(playerSelection, computerSelection) {
    // first we need to make the player's selection case-insensitive no matter what they input. so we just make it lowercase
    playerSelection = playerSelection.toLowerCase();

    // variable for keeping points
    let point = 0;

    if (playerSelection === 'rock' && computerSelection === 'rock') {
        notify.textContent = "You both chose rock! That's a tie round!"
        resultsDiv.appendChild(notify);
        return point;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        notify.textContent = "You lose! Paper beats rock!";
        resultsDiv.appendChild(notify);
        return point -= 1;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        notify.textContent = "You win! Rock beats scissors!";
        resultsDiv.appendChild(notify);
        return point += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        notify.textContent = "You win! Paper beats rock!";
        resultsDiv.appendChild(notify);
        return point += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        notify.textContent = "You both chose paper! That's a tie round!";
        resultsDiv.appendChild(notify);
        return point;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        notify.textContent = "You lose! Scissors beats paper!";
        resultsDiv.appendChild(notify);
        return point -= 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        notify.textContent = "You lose! Rock beats scissors!";
        resultsDiv.appendChild(notify);
        return point -= 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        notify.textContent = "You win! Scissors beats paper!";
        resultsDiv.appendChild(notify);
        return point += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        notify.textContent = "You both chose scissors! It's a tie round!";
        resultsDiv.appendChild(notify);
        return point;
    }   
}

function score(point) {


    switch(point) {
        case -1:
            computerScore += 1;
            break;
        case 0:
            break;
        case 1:
            playerScore += 1;
            break;
    }

    // set the text content of the computer points div to a string of computer score and add it to the DOM
    computerPointsDiv.textContent = "THE FOE'S SCORE: " + +computerScore;
    pointsDiv.appendChild(computerPointsDiv);
    

    // set the text content of the player points div to a string of player score and add it to the DOM
    playerPointsDiv.textContent = "YOUR SCORE: " + +playerScore;
    pointsDiv.appendChild(playerPointsDiv);

    if (computerScore == 5) {
        // display results and end the game by disabling the button
        endDiv.textContent = "You Lost! Nooooo!!!\n\n Refresh the page to play again!";
        endDiv.appendChild(gameOverDiv);
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;

    } else if (playerScore == 5) {
        // display results and end the game by disabling the buttons
        endDiv.textContent = "YOU WIN! LET'S GO!!!\n\n Refresh the page to play again!";
        endDiv.appendChild(gameOverDiv);
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    } 
}


// add event listener to rock so that when a player clicks it, player selection is passed as 'rock'
rockButton.addEventListener('click', () => {
    score(playRound('rock', computerPlay()))
});

// add event listener to paper button so that when a player clicks it, player selection is passed as 'paper'
paperButton.addEventListener('click', () => {
    score(playRound('paper', computerPlay()))
});

// add event listener to scissors button so that when a player clicks it, player selection is passed as 'scissors'
scissorsButton.addEventListener('click', () => {
    score(playRound('scissors', computerPlay()))
});     
