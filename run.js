let player_wins = 0;
let computer_wins = 0;
function computerPlay(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection === 0) {
        if (playerSelection === "rock") {
            console.log("Tie! Rock can't beat rock!");
        }
        else if (playerSelection === "paper") {
            console.log("You win! Paper beats rock!")
            player_wins = player_wins + 1
        }
        else if (playerSelection === "scissors") {
            console.log("You lose! Rock beats scissors!")
            computer_wins = computer_wins + 1
        }
    }
    else if (computerSelection === 1) {
        if (playerSelection === "rock") {
            console.log("You lose! Paper beats Rock!")
            computer_wins = computer_wins + 1
        }
        else if (playerSelection === "paper") {
            console.log("Tie! Paper can't beat paper!")
        }
        else if (playerSelection === "scissors") {
            console.log("You win! Scissors beat paper!")
            player_wins = player_wins + 1
        }
    }
    else if (computerSelection === 2) {
        if (playerSelection === "rock") {
            console.log("You win! Rock beats scissors!")
            player_wins = player_wins + 1
        }
        else if (playerSelection === "paper") {
            console.log("You lose! Scissors beat paper.")
            computer_wins = computer_wins + 1
        }
        else if (playerSelection === "scissors") {
            console.log("Tie! Scissors can't beat scissors!")
        }
    }
}


for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Type rock, paper, or scissors: ");
    let computerSelection = Math.floor(Math.random() * (["Rock", "Paper", "Scissors"].length));
    computerPlay(playerSelection, computerSelection);
    /* The computer picks a random number. This number has to be rounded down in order to be
    an integer. Since Math.random returns a number between 0 and 1 on its own, 
    I took the length of the list and multiplied it by that number. This makes Math.random return a
    number between 0 and 3. */ 

 }

 console.log("You won " + player_wins + " times. The computer won " + computer_wins + " times.")
 if (computer_wins > player_wins) {
    console.log("The Computer wins!")
 }
 else if (player_wins > computer_wins) {
    console.log("You win!")
 }
 else if (player_wins = computer_wins) {
    console.log("Tie!")
 }