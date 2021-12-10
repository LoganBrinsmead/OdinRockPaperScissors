/*  A rock paper scissors game made for the Odin Project
    Made by me, Logan.
*/


/*
// making a function where the user can play a round against the computer
// two parameters are taken, the computer's choice of what to do and the player's choice of what to do.
function playRound(playerSelection, computerSelection) {
    // first we need to make the player's selection case-insensitive no matter what they input. so we just make it lowercase
    playerSelection = playerSelection.toLowerCase();

    // create a variable to see whether the player gains, loses, or ties in points
    let point = 0;

    // if...else statements to compare the player choice against the computer choice
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        console.log("You both chose rock! That's a tie round!")
        return point;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log("You lose! Paper beats rock!");
        return point -= 1;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log("You win! Rock beats scissors!")
        return point += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log("You win! Paper beats rock!");
        return point += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        console.log("You both chose rock! That's a tie round!");
        return point;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log("You lose! Scissors beats paper!");
        return point -= 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log("You lose! Rock beats scissors!");
        return point -= 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log("You win! Scissors beats paper!");
        return point += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        console.log("You both chose scissors! It's a tie round!");
        return point;
    } else {
        // the player didn't input rock, paper, or scissors, so let's let him know
        console.log("You didn't input rock, paper, or scissors. Please input one of those!");
    }
}
*/

/*
// this function will play a 5 round game that will keep score and report a winner or lose by the end
function game() {

    // save the computer's choice as a constant
    const computerSelection = computerPlay();

    // create a string for the player's choice. leave it empty for now.
    let playerSelection = '';

    // create an int to keep score for the player. init at 0;
    let playerScore = 0;

    // create an int to keep score for the computer. init at 0;
    let computerScore = 0;

    // we're going to play five times, so let's make a for loop that loops 5 times
    for (let i = 0; i < 5; i++) {
        // prompt the user to input their choice and save it to the variable we just declared
        playerSelection = prompt("Rock, paper, or scissors?");

        // if statement to see what the playRound function returns and to distribute points depending on what it returns
        switch(playRound(playerSelection, computerSelection)) {
            case -1:
                // in this case, the player lost and the computer won, so distribute points according to that.
                computerScore += 1;
                break;
            case 0:
                // in this case, the player and the computer tied so no points are distributed
                break;
            case 1:
                // in this case the player won. distribute points accordingly
                playerScore += 1;
                break;
        }
    }

    // find out who won and print an appropriate message
    if (playerScore > computerScore) {
        console.log("Hip, hip, hurray! You won!");
    } else if (playerScore < computerScore) {
        console.log("Oof! You lost! Try again next time!");
    } else if (playerScore === computerScore) {
        console.log("It's a tie game! What are the odds!");
    }
    
} 
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


// declaring the 'rock' button
const rockButton = document.querySelector('#rock-button');

// declaring the 'paper' button
const paperButton = document.querySelector('#paper-button');

// declaring the scissors button
const scissorsButton = document.querySelector('#scissors-button');

// div class 'results' is for displaying the results... code for that is as follows
const divContainer = document.querySelector('#results-div');

// create div for the notification of if you won or not, etc. then modify it according to the parameters
const notify = document.createElement('div');
notify.classList.add('notify');

function playRound(playerSelection, computerSelection) {
    // first we need to make the player's selection case-insensitive no matter what they input. so we just make it lowercase
    playerSelection = playerSelection.toLowerCase();

    // variable for keeping points
    let point = 0;

    if (playerSelection === 'rock' && computerSelection === 'rock') {
        notify.textContent = "You both chose rock! That's a tie round!"
        divContainer.appendChild(notify);
        return point;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        notify.textContent = "You lose! Paper beats rock!";
        divContainer.appendChild(notify);
        return point -= 1;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        notify.textContent = "You win! Rock beats scissors!";
        divContainer.appendChild(notify);
        return point += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        notify.textContent = "You win! Paper beats rock!";
        divContainer.appendChild(notify);
        return point += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        notify.textContent = "You both chose paper! That's a tie round!";
        divContainer.appendChild(notify);
        return point;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        notify.textContent = "You lose! Scissors beats paper!";
        divContainer.appendChild(notify);
        return point -= 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        notify.textContent = "You lose! Rock beats scissors!";
        divContainer.appendChild(notify);
        return point -= 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        notify.textContent = "You win! Scissors beats paper!";
        divContainer.appendChild(notify);
        return point += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        notify.textContent = "You both chose scissors! It's a tie round!";
        divContainer.appendChild(notify);
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

    console.log('Computer score: ' + computerScore);
    console.log('Player score: ' + playerScore);

    if (computerScore === 5) {
        alert("You lost!");
    } else if (playerScore === 5) {
        alert("You win!");
    } 
}

let computerScore = 0;
let playerScore = 0;

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

