const rock = (document.querySelectorAll(".playerSelection"))[0];
const paper = (document.querySelectorAll(".playerSelection"))[1];
const scissors = (document.querySelectorAll(".playerSelection"))[2];
const results = document.querySelector(".results");
const buttons = (document.querySelectorAll(".playerSelection"))
/* Set buttons and text equal to a constant. For example 
The paper button gets the paper constant. This is to make
the code easier to read. */


let player_wins = 0;
let computer_wins = 0;
let played_games = 0;

rock.addEventListener("click", function () {
    if (played_games === 5) {
        results.innerHTML = "Reload the Page to Play Again!";
    }
    else if (played_games < 4) {
        run_game("rock");
    }
    else if (played_games === 4) {
        run_game("rock");
        gameOver();
    }
});

paper.addEventListener("click", function () {
    if (played_games === 5) {
        results.innerHTML = "Reload the Page to Play Again!"
    }
    else if (played_games < 4) {
        run_game("paper");
    }
    else if (played_games === 4) {
        run_game("paper");
        gameOver();
    }
});

scissors.addEventListener("click", function () {
    if (played_games === 5) {
        results.innerHTML = "Reload the Page to Play Again!"
    }
    else if (played_games < 4) {
        run_game("scissors");
    }
    else if (played_games === 4) {
        run_game("scissors");
        gameOver();
    }
});
/* When a button is clicked, the text above the buttons change
according to how many games were played. For example, If it is
4, it will run the 'run_game()' function once more (which will
increase the amount of games played to 5 in the end of the
function) and the gameOver() function will run since the amount
of games played will be 5. */


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
    /* Changes the innerHTML of the text above the buttons,
    according to if the user won or not. */

    played_games = played_games + 1; 
    /* Important for making sure only 5 rounds are played. 
    Every time a round is played, this variable's amount goes
    up by 1. */
}


function gameOver() {
    if (played_games === 5) {
        if (computer_wins > player_wins) {
            results.innerHTML = ("The Computer wins the game! Player " 
            + player_wins + " - " + computer_wins + " Computer");
        }
        else if (player_wins > computer_wins) {
            results.innerHTML = ("You win the game! Player " + player_wins + " - " 
            + computer_wins + " Computer");
        }
        else if (player_wins = computer_wins) {
            results.innerHTML = ("The game ended in a tie! Player " + player_wins + " - " 
            + computer_wins + " Computer");
        }
    }
    /* Function ends the game. The function verifies if the amount of games played is
    equal to 5 to ensure that there were only 5 rounds played. Next, it changes the
    text that is right above the buttons according to who has the higher score. */

}

function run_game(playerSelection) {
    let computerSelection = Math.floor(Math.random() * (["Rock", "Paper", "Scissors"].length));
    computerPlay(playerSelection, computerSelection);
    /* Function passes in a player selection, makes a random selection for the computer by
    flooring the amount of a random number times the length of the array of ["Rock", 
    "Paper", "Scissors"]. Finally, the computerPlay function runs and passes in the 
    playerSelection argument (will vary by which button the user pressed) and the
    random computer selection. */
}


