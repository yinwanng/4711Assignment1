// Execute functions when page is loaded
window.onload=function() {
    createWelcomeMessage();
    createScore();
    createButtons();
    randomDictionaryWord();
    populateWord();
    submitButton();
    // retrieveUsername();
    retrieveUsername().then(updateScore);
}

function updateScore(scores) {
    document.getElementById("scoreCount").innerHTML= scores.score; 
    $("#hiddenScore").val(scores.score);
    scoreCount = scores.score;
}

// The letter clicked is being guessed if it is in the word
function letterClicked(){
    var letter = this.innerHTML;  
    // iterate each letter in the word 
    for(var i = 0; i < guessWord.length; i++) { 
        // found character match
        if (letter == guessWord.charAt(i).toUpperCase()){ 
            displayLetter(i, letter);
            // if letter hasn't been guessed yet 
            // if(lettersGuessedCorrect.indexOf(letter) == -1) {
                lettersGuessedCorrect.push(letter);
                incrementScore();
            // } 
        } 
    }
    // if character match hasn't been found
    if(lettersGuessedCorrect.indexOf(letter) === -1) {
        decrementLifeScore();
        decrementScore();
    }
    this.disabled = true;
    this.classList = ['keyboard btn btn-default btn-lg'];
    checkIfGameOver();
    checkIfWordCompleted();
}

// Generate a random word to be guessed
function randomDictionaryWord() {
    var randomNumber = Math.floor(Math.random() * 9); // Random 0 to 9 
    document.getElementById("definition").innerHTML = dictionary[randomNumber].definition;
    guessWord = dictionary[randomNumber].word;
}

// Display the random word on the page
function populateWord() {
    var wordLength = guessWord.length;
    var guessWordElement = document.getElementById("guessWord");

    for(var i = 0; i < wordLength; i++) {
        var span = document.createElement("span");
        span.id = ['characterToGuess' + i];
        var text = document.createTextNode("_ ");
        span.appendChild(text);
        guessWordElement.appendChild(span);
    }
}

// Minus one point on the Life Count
function decrementLifeScore() {
    document.getElementById("lifeCount").innerHTML = --lifeCount;
}

// Add one point to the Score Count
function incrementScore() {
    document.getElementById("scoreCount").innerHTML = ++scoreCount;
    console.log("incremented:" + scoreCount);
    $("#hiddenScore").val(scoreCount);
}

// Minus one point on the Score Count
function decrementScore() {
    document.getElementById("scoreCount").innerHTML = --scoreCount;
    console.log("decremented:" + scoreCount);
    $("#hiddenScore").val(scoreCount);
}

// Display the letter if there is a match
function displayLetter(index, letter) {
    document.getElementById("characterToGuess" + index).innerHTML = letter;
}

// Clearing the guess word on page and letters guessed letters in the array
function clearWord(){
    document.getElementById("guessWord").innerHTML = "";
    lettersGuessedCorrect = [];
}

// Clearing the message result on page
function clearMessageResult() {
    document.getElementById("messageResult").innerHTML = "";
}

// Resetting the life count back to 7
function resetLifeCount() {
    lifeCount = 7;
    document.getElementById("lifeCount").innerHTML = lifeCount;   
}

// Reset all the buttons that were disabled back to enabled
function resetButtons(){
    var keys = document.getElementsByClassName("keyboard").length;
    for(var i = 0; i < keys; i++) {
        document.getElementsByClassName("keyboard")[i].disabled = false;
        document.getElementsByClassName("keyboard")[i].classList = ['keyboard btn btn-primary btn-lg'];   
    }
}

// Restarting the game by continueing
function restartGame() {
    event.preventDefault();
    continuePlaying();
}

// Reset the game if wanting the game to continue with next word to guess
function continuePlaying() {
    clearWord();
    clearMessageResult();
    resetLifeCount();
    randomDictionaryWord();
    populateWord();
    resetButtons();
}

// Display a game over message if life count reached to 0 and disable all buttons
function checkIfGameOver() {
    if(lifeCount == 0) {
        document.getElementById("messageResult").innerHTML = loseMessage;
        disableAllButtons();
    }
}

// Check if all the letters are a match for the guess word and display a congratulation message
function checkIfWordCompleted() {
    currentWord = "";
    // retrieves the current word that is being displayed
    for(var i = 0; i < guessWord.length; i++){
        currentWord+=document.getElementById("characterToGuess" + i).innerHTML;
    }
    // checks if the current word is a match of the word being guessed
    if(currentWord == guessWord.toUpperCase()) {
        document.getElementById("messageResult").innerHTML = winMessage;
        disableAllButtons();
    }
}

// Disables all the buttons
function disableAllButtons() {
    var keys = document.getElementsByClassName("keyboard").length;
    for(var i = 0; i < keys; i++) {
        document.getElementsByClassName("keyboard")[i].disabled = true;
    }
}