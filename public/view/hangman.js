// Welcome message on screen
function createWelcomeMessage(){
    document.getElementById("welcomeMessage").innerHTML = welcomeTitle;
}

function createScore(){
    document.getElementById("scoreLabel").innerHTML ="Score: ";
    document.getElementById("lifeLabel").innerHTML ="Life: ";
    let spanScoreCount = document.createElement("span");
    spanScoreCount.textContent = "0";
    spanScoreCount.id = "scoreCount";
    let sScore = document.getElementById("scoreLabel");
    sScore.appendChild(spanScoreCount);

    let spanLifeCount = document.createElement("span");
    spanLifeCount.textContent = "7";
    spanLifeCount.id = "lifeCount";
    let lScore = document.getElementById("lifeLabel");
    lScore.appendChild(spanLifeCount);

}

// Create buttons for the alphabet keys and restart game
function createButtons(){
    // alphabet buttons  
   for (var i = 0; i < alphabet.length; i++) {
    var button = document.createElement("button");
    button.classList = ['keyboard btn btn-primary btn-lg'];
    button.addEventListener("click", letterClicked);
    var text = document.createTextNode(alphabet[i]);
    button.appendChild(text);
    document.getElementById("main").appendChild(button);
   }
   // restart button
   var restartButton = document.createElement("button");
   restartButton.classList = ['btn btn-warning'];
   var text = document.createTextNode("Restart Game");
   restartButton.appendChild(text);
   document.getElementById("restartButton").appendChild(restartButton);  
   restartButton.addEventListener("click", restartGame);
}

