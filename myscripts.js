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

