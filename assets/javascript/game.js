
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = 0;
var losses = 0;

guessesLeft = 10;

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var lettersGuessed = document.getElementById("letter-guesses");

document.onkeyup = function(event) {
    
    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if ((userGuess === computerGuess)) {
        wins++;
    }
    else {
        losses++;
    }
    console.log ("winstText", winsText);
    console.log (wins);
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;

}