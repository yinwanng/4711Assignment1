// Execute functions when registration login page is loaded
window.onload = () => {
    createHomeNavBar();
    createRegLogContainer();
    setupWelcomeMessage();
    setupRequired();
    setupLogin();
    setupRegistration();
    retrieveErrors().then(displayErrors);
}

// Hide login form and message if on sign up 
let signMeUp = () => {
    event.preventDefault();
    $('#loginForm').hide();
    $('#loginHeader').hide();
    $('#registrationForm').show();
    $('#registrationHeader').show();
}

// Hide registration form and message if on login 
let loginMeIn = () => {
    event.preventDefault();
    $('#registrationForm').hide();
    $('#registrationHeader').hide();
    $('#loginForm').show();
    $('#loginHeader').show();
}

// Retrieve validation errors
let retrieveErrors = () => {
    return $.ajax({
        type: 'POST',
        url: "/check",
        contentType: "application/json",
        success: function(data){
            errors = data; 
    }});
}

// Display what validation errors has occured on page
let displayErrors = () => {
    if(errors) {
        $('#infoRequired').show();
        document.getElementById("infoRequired").innerHTML = errors[0].msg;
        if(errors[0].msg == msgEnterValidEmailRegistration
        || errors[0].msg == msgUsernameOrEmailTaken) {
            $('#loginForm').hide();
            $('#registrationForm').show();
        }
    }
}

// Display welcome message
let setupWelcomeMessage = () => {
    $('#welcomeGameMessage').text(msgWelcome);
}