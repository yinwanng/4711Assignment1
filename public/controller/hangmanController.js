// Execute functions when page is loaded
window.onload=function() {
    createWelcomeMessage();
    createScore();
    createButtons();
    randomDictionaryWord();
    populateWord();
    submitButton();
    retrieveUsername().then(updateScore);
}

updateScore = (scores) => {
    document.getElementById("scoreCount").innerHTML= scores.score; 
    $("#hiddenScore").val(scores.score);
    scoreCount = scores.score;
}

// The letter clicked is being guessed if it is in the word
letterClicked = () => {
    event.preventDefault();
    let letter = this.innerHTML;  
    // iterate each letter in the word 
    for(let i = 0; i < guessWord.length; i++) { 
        // found character match
        if (letter == guessWord.charAt(i).toUpperCase()){ 
            displayLetter(i, letter);
                lettersGuessedCorrect.push(letter);
                incrementScore();
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
randomDictionaryWord = () => {
    let randomNumber = Math.floor(Math.random() * 9); // Random 0 to 9 
    document.getElementById("definition").innerHTML = dictionary[randomNumber].definition;
    guessWord = dictionary[randomNumber].word;
}

// Display the random word on the page
populateWord = () => {
    let wordLength = guessWord.length;
    let guessWordElement = document.getElementById("guessWord");

    for(let i = 0; i < wordLength; i++) {
        let span = document.createElement("span");
        span.id = ['characterToGuess' + i];
        let text = document.createTextNode("_ ");
        span.appendChild(text);
        guessWordElement.appendChild(span);
    }
}

// Minus one point on the Life Count
decrementLifeScore = () => {
    document.getElementById("lifeCount").innerHTML = --lifeCount;
}

// Add one point to the Score Count
incrementScore = () => {
    document.getElementById("scoreCount").innerHTML = ++scoreCount;
    $("#hiddenScore").val(scoreCount);
}

// Minus one point on the Score Count
decrementScore = () => {
    document.getElementById("scoreCount").innerHTML = --scoreCount;
    $("#hiddenScore").val(scoreCount);
}

// Display the letter if there is a match
displayLetter = (index, letter) => {
    document.getElementById("characterToGuess" + index).innerHTML = letter;
}

// Clearing the guess word on page and letters guessed letters in the array
clearWord = () => {
    document.getElementById("guessWord").innerHTML = "";
    lettersGuessedCorrect = [];
}

// Clearing the message result on page
clearMessageResult = () => {
    document.getElementById("messageResult").innerHTML = "";
}

// Resetting the life count back to 7
resetLifeCount = () => {
    lifeCount = 7;
    document.getElementById("lifeCount").innerHTML = lifeCount;   
}

// Reset all the buttons that were disabled back to enabled
resetButtons = () =>{
    let keys = document.getElementsByClassName("keyboard").length;
    for(let i = 0; i < keys; i++) {
        document.getElementsByClassName("keyboard")[i].disabled = false;
        document.getElementsByClassName("keyboard")[i].classList = ['keyboard btn btn-primary btn-lg'];   
    }
}

// Restarting the game by continueing
restartGame = () => {
    event.preventDefault();
    continuePlaying();
}

// Reset the game if wanting the game to continue with next word to guess
continuePlaying = () => {
    clearWord();
    clearMessageResult();
    resetLifeCount();
    randomDictionaryWord();
    populateWord();
    resetButtons();
}

// Display a game over message if life count reached to 0 and disable all buttons
checkIfGameOver = () => {
    if(lifeCount == 0) {
        document.getElementById("messageResult").innerHTML = loseMessage;
        disableAllButtons();
    }
}

// Check if all the letters are a match for the guess word and display a congratulation message
checkIfWordCompleted = () => {
    currentWord = "";
    // retrieves the current word that is being displayed
    for(let i = 0; i < guessWord.length; i++){
        currentWord+=document.getElementById("characterToGuess" + i).innerHTML;
    }
    // checks if the current word is a match of the word being guessed
    if(currentWord == guessWord.toUpperCase()) {
        document.getElementById("messageResult").innerHTML = winMessage;
        disableAllButtons();
    }
}

// Disables all the buttons
disableAllButtons = () => {
    let keys = document.getElementsByClassName("keyboard").length;
    for(let i = 0; i < keys; i++) {
        document.getElementsByClassName("keyboard")[i].disabled = true;
    }
}