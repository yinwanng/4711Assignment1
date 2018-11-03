// Creating the score
let createScore = () => {
    document.getElementById("scoreLabel").innerHTML ="Score: ";
    document.getElementById("lifeLabel").innerHTML ="Life: ";
    let spanScoreCount = document.createElement("span");
    spanScoreCount.textContent = "0";
    spanScoreCount.name = "theScore";
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
let createButtons = () => {
    // alphabet buttons  
   for (let i = 0; i < alphabet.length; i++) {
    let button = document.createElement("button");
    button.classList = ['keyboard btn btn-primary btn-lg'];
    button.addEventListener("click", letterClicked);
    let text = document.createTextNode(alphabet[i]);
    button.appendChild(text);
    button.id = alphabet[i];
    document.getElementById("hangmanForm").appendChild(button);
   }
   // restart button
   let restartButton = document.createElement("button");
   restartButton.classList = ['btn btn-warning'];
   let text = document.createTextNode("Restart Game");
   restartButton.appendChild(text);
   document.getElementById("centerButtons").appendChild(restartButton);  
   restartButton.addEventListener("click", restartGame);
}

// Creating the submit button in game
let submitButton = () => {
    let submitButton = document.createElement("button");
    let submitText = document.createTextNode("Submit Score");
    submitButton.appendChild(submitText);
    submitButton.classList = ["btn btn-success"];
    document.getElementById("centerButtons").appendChild(submitButton);
}

// Creating the form for submission
let createForm = () =>{
    let container = document.getElementById("containerbox");
    let form = document.createElement("form");
    form.id="formTest";
    form.method = "post";
    let input = document.createElement("input");
    form.appendChild(input);
    input.name="pls";
    form.action = "/score";
    let button = document.createElement("button");
    form.appendChild(button);
    button.type="submit";
    container.appendChild(form);
}

// Create the nav bar in hangman page
let createHangmanNavBar = () => {
    let navHTML = '<nav class="navbar navbar-expand-lg navbar-light bg-light">' +
        '<a class="navbar-brand"></a>' +
        '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">' +
        '<span class="navbar-toggler-icon"></span>' +
        '</button>' +
        '<div class="collapse navbar-collapse" id="navbarNav">' +
        '<ul class="navbar-nav">' +
        '<li class="nav-item active">' +
        '<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>' +
        '</li>' +
        '<li class="nav-item">' +
        '<a class="nav-link" href="leaderboard.html">Leaderboard</a>' +
        '</li>' +
        '<li class="nav-item">'+
    '<a class="nav-link" href="/logout">Log Out</a>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</nav>';
    $('body').append(navHTML);
}

// Create the container of the game
let createHangmanContainer = () => {
    let containHTML = '<div class="container-fluid">' +
        '<h1 id="welcomeMessage"></h1>' +
        '<div id="messageResult"></div>' +
        '</div>' +
        '<div class="container" id="containerbox">' +
        '<form action="/score" id="hangmanForm" method="post">' +
        '<div id="scoreLabel"></div>' +
        '<div id="lifeLabel"></div>' +
        '<h5 id="definition"></h5>' +
        '<div id="guessWord"></div>' +
        '<div id="centerButtons"></div>' +
        '<input type="text" name="hiddenScoreValue" id="hiddenScore">' +
        '</form>' +
        '</div>';
    $('body').append(containHTML);
}