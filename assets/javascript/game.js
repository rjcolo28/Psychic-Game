
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = 0;
var losses = 0;

var guessesLeft = 10;

var lettersGuessed = []

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var lettersGuessedText = document.getElementById("letter-guesses");

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function(event) {
    
    var userGuess = event.key;
    
    lettersGuessed.push(userGuess);
    //Code an if-else statment to ensure letters are not repeated
    //Code a loop to reset list after win or loss

    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 10;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }
    else {
   
        guessesLeft = guessesLeft - 1;
            if (guessesLeft === 0) {
                losses++;
                guessesLeft = 10;
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            }
        
        
    }

    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessesLeftText.textContent = "Guesses left: " + guessesLeft;
    lettersGuessedText.textContent = "Letters guessed: " + lettersGuessed;

}
