window.onload = () => {
    setupLogin();
    setupRegistration();
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