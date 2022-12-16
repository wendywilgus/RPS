var options = ["R", "P", "S"];

const playGame = function() {
    var userChoice = window.prompt("Enter R, P, or S:");

    if (!userChoice) {
        return;
    }
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
    
}

