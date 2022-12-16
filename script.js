var wins = 0;
var ties = 0;
var losses = 0;

var options = ["R", "P", "S"];

const playGame = function() {
    var userChoice = window.prompt("Enter R, P, or S:");

    if (!userChoice) {
        return;
    }


userChoice = userChoice.toUpperCase();

var index = Math.floor(Math.random() * options.length);
var computerChoice = options[index];

window.alert("The computer chose " + computerChoice);

if (userChoice === computerChoice) {
    ties++;
    window.alert("It's a tie!");
} else if (
    (userChoice === "R" && computerChoice === "S") ||
    (useChoice === "P" && computerChoice === "R") ||
    (userChoice === "S" && computerChoice === "P")
) {
    wins++;
    window.alert("You won!");  
} else {
    losses++;
    window.alert("Computer wins!");
}

//stats with line breaks indecated by \n
window.alert(
    "Stats:\nWins " + wins + "\nLosses: " + losses + "\nTies: " + ties 
);

//play again
var playAgain = window.confirm("Do you want to play again?");

if (playAgain) {
    playGame();
    }
};

playGame();

