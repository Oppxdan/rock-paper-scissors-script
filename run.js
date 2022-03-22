const rock = (document.querySelectorAll(".playerSelection"))[0];
const paper = (document.querySelectorAll(".playerSelection"))[1];
const scissors = (document.querySelectorAll(".playerSelection"))[2];
const results = document.querySelector(".results");
const buttons = (document.querySelectorAll(".playerSelection"))

let player_wins = 0;
let computer_wins = 0;
let played_games = 0;
let stop_game = false;
let stop_print = false;

rock.addEventListener("click", function () {
    if (played_games === 5) {
        results.innerHTML = "Reload the Page to Play Again!";
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
        results.innerHTML = "Reload the Page to Play Again!"
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
        results.innerHTML = "Reload the Page to Play Again!"
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
            results.innerHTML = ("Tie! Rock can't beat rock! " 
            + player_wins + " - " + computer_wins);
        }
        else if (playerSelection === "paper") {
            player_wins = player_wins + 1;
            results.innerHTML = ("You win! Paper beats rock! " 
            + player_wins + " - " + computer_wins);
        }
        else if (playerSelection === "scissors") {
            computer_wins = computer_wins + 1;
            results.innerHTML = ("You lose! Rock beats scissors! "
            + player_wins + " - " + computer_wins);
        }
    }
    else if (computerSelection === 1) {
        if (playerSelection === "rock") {
            computer_wins = computer_wins + 1;
            results.innerHTML = ("You lose! Paper beats Rock! " 
            + player_wins + " - " + computer_wins);
        }
        else if (playerSelection === "paper") {
            results.innerHTML = ("Tie! Paper can't beat paper! " 
            + player_wins + " - " + computer_wins);
        }
        else if (playerSelection === "scissors") {
            player_wins = player_wins + 1;
            results.innerHTML = ("You win! Scissors beat paper! "
            + player_wins + " - " + computer_wins);
        }
    }
    else if (computerSelection === 2) {
        if (playerSelection === "rock") {
            player_wins = player_wins + 1;
            results.innerHTML = ("You win! Rock beats scissors! " 
            + player_wins + " - " + computer_wins);
        }
        else if (playerSelection === "paper") {
            computer_wins = computer_wins + 1;
            results.innerHTML = ("You lose! Scissors beat paper. " 
            + player_wins + " - " + computer_wins);
        }
        else if (playerSelection === "scissors") {
            results.innerHTML = ("Tie! Scissors can't beat scissors! " 
            + player_wins + " - " + computer_wins);
        }
    }
    played_games = played_games + 1;
}


function gameOver() {
    if (played_games === 5) {
        if (computer_wins > player_wins) {
            results.innerHTML = ("The Computer wins! Player " 
            + player_wins + " - " + computer_wins + " Computer");
        }
        else if (player_wins > computer_wins) {
            results.innerHTML = ("You win!" + player_wins + " - " 
            + computer_wins + " Computer");
        }
        else if (player_wins = computer_wins) {
            results.innerHTML = ("Tie! Player " + player_wins + " - " 
            + computer_wins + " Computer");
        }
    }

}
