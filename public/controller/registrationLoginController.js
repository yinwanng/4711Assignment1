window.onload = () => {
    setupWelcomeMessage();
    setupRequired();
    setupLogin();
    setupRegistration();
    retrieveErrors().then(displayErrors);
}

signMeUp = () => {
    event.preventDefault();
    $('#loginForm').hide();
    $('#registrationForm').show();
}

loginMeIn = () => {
    event.preventDefault();
    $('#registrationForm').hide();
    $('#loginForm').show();
}

retrieveErrors = () => {
    return $.ajax({
        type: 'GET',
        url: "/check",
        contentType: "application/json",
        success: function(data){
            errors = data; 
    }});
}

displayErrors = () => {
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

setupWelcomeMessage = () => {
    $('#welcomeGameMessage').text(msgWelcome);
}