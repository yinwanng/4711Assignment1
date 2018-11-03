window.onload = () => {
    createHomeNavBar();
    createRegLogContainer();
    setupWelcomeMessage();
    setupRequired();
    setupLogin();
    setupRegistration();
    retrieveErrors().then(displayErrors);
}

let signMeUp = () => {
    event.preventDefault();
    $('#loginForm').hide();
    $('#loginHeader').hide();
    $('#registrationForm').show();
    $('#registrationHeader').show();
}

let loginMeIn = () => {
    event.preventDefault();
    $('#registrationForm').hide();
    $('#registrationHeader').hide();
    $('#loginForm').show();
    $('#loginHeader').show();
}

let retrieveErrors = () => {
    return $.ajax({
        type: 'GET',
        url: "/check",
        contentType: "application/json",
        success: function(data){
            errors = data; 
    }});
}

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

let setupWelcomeMessage = () => {
    $('#welcomeGameMessage').text(msgWelcome);
}