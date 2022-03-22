const rock = (document.querySelectorAll(".playerSelection"))[0];
const paper = (document.querySelectorAll(".playerSelection"))[1];
const scissors = (document.querySelectorAll(".playerSelection"))[2];

let player_wins = 0;
let computer_wins = 0;
let played_games = 0;
let stop_game = false;
let stop_print = false;

rock.addEventListener("click", function () {
    if (played_games === 5) {
        console.log("Reload the page to play again!");
    }
    else if (played_games < 4) {
        let playerSelection = "rock";
        let computerSelection = Math.floor(Math.random() * (["Rock", "Paper", "Scissors"].length));
        computerPlay(playerSelection, computerSelection);
    }
    else if (played_games === 4) {
        let playerSelection = "rock";
        let computerSelection = Math.floor(Math.random() * (["Rock", "Paper", "Scissors"].length));
        computerPlay(playerSelection, computerSelection);
        gameOver();
    }
});
paper.addEventListener("click", function () {
    if (played_games === 5) {
        console.log("Reload the page to play again!");
    }
    else if (played_games < 4) {
        let playerSelection = "paper";
        let computerSelection = Math.floor(Math.random() * (["Rock", "Paper", "Scissors"].length));
        computerPlay(playerSelection, computerSelection);
    }
    else if (played_games === 4) {
        let playerSelection = "paper";
        let computerSelection = Math.floor(Math.random() * (["Rock", "Paper", "Scissors"].length));
        computerPlay(playerSelection, computerSelection);
        gameOver();
    }
});
scissors.addEventListener("click", function () {
    if (played_games === 5) {
        console.log("Reload the page to play again!");
    }
    else if (played_games < 4) {
        let playerSelection = "scissors";
        let computerSelection = Math.floor(Math.random() * (["Rock", "Paper", "Scissors"].length));
        computerPlay(playerSelection, computerSelection);
    }
    else if (played_games === 4) {
        let playerSelection = "scissors";
        let computerSelection = Math.floor(Math.random() * (["Rock", "Paper", "Scissors"].length));
        computerPlay(playerSelection, computerSelection);
        gameOver();
    }
});


function computerPlay(playerSelection, computerSelection) { 
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
    played_games = played_games + 1;
}


function gameOver() {
    if (played_games === 5) {
        console.log("You won " + player_wins + " times. The computer won " 
        + computer_wins + " times.");
        if (computer_wins > player_wins) {
            console.log("The Computer wins!");
        }
        else if (player_wins > computer_wins) {
            console.log("You win!");
        }
        else if (player_wins = computer_wins) {
            console.log("Tie!");
        }
    }

}
