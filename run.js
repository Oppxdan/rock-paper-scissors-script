function computerPlay(playerSelection, computerSelection) {
    if (computerSelection === 0) {
        if (playerSelection === "rock") {
            console.log("Tie! Rock can't beat rock!")
        }
        else if (playerSelection === "paper") {
            console.log("You win! Paper beats rock!")
        }
        else if (playerSelection === "scissors") {
            console.log("You lose! Rock beats scissors!")
        }
    }
    else if (computerSelection === 1) {
        if (playerSelection === "rock") {
            console.log("You lose! Paper beats Rock!")
        }
        else if (playerSelection === "paper") {
            console.log("Tie! Paper can't beat paper!")
        }
        else if (playerSelection === "scissors") {
            console.log("You win! Scissors beat paper!")
        }
    }
    else if (computerSelection === 2) {
        if (playerSelection === "rock") {
            console.log("You win! Rock beats scissors!")
        }
        else if (playerSelection === "paper") {
            console.log("You lose! Scissors beat paper.")
        }
        else if (playerSelection === "scissors") {
            console.log("Tie! Scissors can't beat scissors!")
        }
    }
}


computerPlay(prompt("Type rock, paper, or scissors: "), Math.floor(Math.random() * (["Rock", "Paper", "Scissors"].length)));
/* The computer picks a random number. This number has to be rounded down in order to be
an integer. Since Math.random returns a number between 0 and 1 on its own, 
I took the length of the list and multiplied it by that number. This makes Math.random return a
number between 0 and 3. */