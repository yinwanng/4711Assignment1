var welcomeTitle = "Hangman Game";               // welcome message
var winMessage = "You got it right!";            // display win message
var loseMessage = "Game Over!";                  // display lose message
var lifeCount = 7;                               // number of guesses limit
var scoreCount = 0;                              // score of the game
var guessWord;                                   // word to be guessed
var lettersGuessedCorrect = [];                  // letters of the correct guesses
var currentWord;                                 // current word displayed
var username;
var scores;
// the alphabet in an array
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
                'K', 'L', 'M', 'O', 'P', 'Q', 'R', 'S', 
                'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// dictionary of words with definition                
var dictionary = [
    {
        word: "Tattoo",
        definition: "A form of body modification where a design is made by inserting ink",
    }, {
        word: "Electricity",
        definition: "Is the set of physical phenomena associated with the presence and motion of electric charge",
    }, {
        word: "Computer",
        definition: "A programmable electronic device designed to accept data, perform prescribed mathematical and logical operations at high speed, and display the results of these operations.",
    }, {
        word: "Wallet",
        definition: "A flat, folding pocketbook, especially one large enough to hold paper money, credit cards, driver's license, etc., and sometimes having a compartment for coins.",
    }, {
        word: "Car",
        definition: "An automobile.",
    }, {
        word: "Cup",
        definition: "A small, open container made of china, glass, metal, etc., usually having a handle and used chiefly as a receptable from which to drink tea, soup, etc.",
    }, {
        word: "Food",
        definition: "Any nourishing substance that is eaten, drunk, or otherwise taken into the body to sustain life, provide energy, promote growth, etc.",
    }, {
        word: "Stack",
        definition: "A pile of objects, typically one that is neatly arranged.",
    }, {
        word: "School",
        definition: "An institution where instruction is given, especially to persons under college age:",
    }, {
        word: "Internet",
        definition: "A vast computer network linking smaller computer networks worldwide (usually preceded by the). ",
    }
];

// retrieving the username
retrieveUsername = () => {
    $.ajax({
        type: 'GET',
        url: "/information",
        // url: "https://hangman4711.azurewebsites.net/information",
        contentType: "application/json",
        success: function(data) {
            username = data;
        },
    });
}

// retrieving the scores 
retrieveScores = () => {
   return $.ajax({
        type: 'GET',
        url: "/score",
        // url: "https://hangman4711.azurewebsites.net/score",
        contentType: "application/json",
        success: function(data){
            scores = data;           
    }});
}
