// Welcome message on screen
function createWelcomeMessage(){
    document.getElementById("welcomeMessage").innerHTML = welcomeTitle;
}

function createScore(){
    $("#hiddenScore").val("0");
    document.getElementById("scoreLabel").innerHTML ="Score: ";
    document.getElementById("lifeLabel").innerHTML ="Life: ";
    let spanScoreCount = document.createElement("span");
    spanScoreCount.textContent = "0";
    // spanScoreCount.value ="0";
    // spanScoreCount.style.outline = "none";
    spanScoreCount.name = "theScore";

    spanScoreCount.id = "scoreCount";
    let sScore = document.getElementById("scoreLabel");
    sScore.appendChild(spanScoreCount);

    //--
    // let outputScoreCount = document.createElement("output");
    // outputScoreCount.textContent = "0";
    // outputScoreCount.id = "scoreCount";
    // let oScore = document.getElementById("scoreLabel");
    // oScore.appendChild(outputScoreCount);
    //--


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
    document.getElementById("hangmanForm").appendChild(button);
   }
   // restart button
   var restartButton = document.createElement("button");
   restartButton.classList = ['btn btn-warning'];
   var text = document.createTextNode("Restart Game");
   restartButton.appendChild(text);
   document.getElementById("centerButtons").appendChild(restartButton);  
   restartButton.addEventListener("click", restartGame);
}

function submitButton() {
    // let container = document.getElementById("containerbox");
    // let form = document.createElement("form");
    let submitButton = document.createElement("button");
    let submitText = document.createTextNode("Submit Score");
    submitButton.appendChild(submitText);
    submitButton.classList = ["btn btn-success"];
    // submitButton.type ="submit";
    // // form.id = "hangmanForm";
    // // form.action = "/score";
    // // form.method = "post";

    // form.appendChild(submitButton);
    // container.appendChild(form);

    
    document.getElementById("centerButtons").appendChild(submitButton);
}


function createForm(){
    let container = document.getElementById("containerbox");
    let form = document.createElement("form");
    form.id="formTest";
    form.method = "post";

    let input = document.createElement("input");
    // input.innerHTML ="0";
    // input.disabled = true;
    form.appendChild(input);
    input.name="pls";
    form.action = "/score";
    let button = document.createElement("button");
    form.appendChild(button);
    button.type="submit";




    container.appendChild(form);

}