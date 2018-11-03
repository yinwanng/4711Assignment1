setupLogin = () => {
    let container = document.getElementById("container");
    let form = document.createElement("form");
    form.method = "post";
    form.action = "/";
    form.id = "loginForm";
    let br = document.createElement("br");
    let br2 = document.createElement("br");
    form.classList = ["form-group row"];
    
    let loginHeader = document.createElement("h4");
    let loginMsgText = document.createTextNode(msgLogin);
    loginHeader.id = "loginHeader";
    loginHeader.appendChild(loginMsgText);
    container.appendChild(loginHeader);

    let registrationHeader = document.createElement("h4");
    let registrationMsgText = document.createTextNode(msgRegistration);
    registrationHeader.id = "registrationHeader";
    registrationHeader.style.display = "none";
    registrationHeader.appendChild(registrationMsgText);
    container.appendChild(registrationHeader);

    container.appendChild(form);
    
    let emailLabel = document.createElement("label");
    let emailText = document.createTextNode("E-mail");
    emailLabel.appendChild(emailText);
    emailLabel.classList = ["col-form-label"];
    let emailInput = document.createElement("input");
    emailInput.required = true;
    emailInput.name = "loginEmail";
    emailInput.classList = ["form-control"];
    emailInput.placeholder = "Enter e-mail";
    
    let passwordLabel = document.createElement("label");
    let passwordText = document.createTextNode("Password");
    passwordLabel.appendChild(passwordText);
    passwordLabel.classList = ["col-form-label"];
    let passwordInput = document.createElement("input");
    passwordInput.required = true;
    passwordInput.name = "loginPassword";
    passwordInput.classList = ["form-control"];
    passwordInput.placeholder = "Enter password";
    
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);

    let loginButton = document.createElement("button");
    let loginText = document.createTextNode("Login");

    loginButton.classList = ["btn btn-primary"];
    loginButton.id = "loginButton";
    loginButton.appendChild(loginText);
    form.appendChild(br);
    form.appendChild(br2);
    form.appendChild(loginButton);

    let signUpButton = document.createElement("button");
    signUpButton.classList = ["btn btn-secondary"];
    let signUpText = document.createTextNode("Don't have an account? Click here to sign up!");
    signUpButton.appendChild(signUpText);
    signUpButton.addEventListener("click", signMeUp);
    form.appendChild(signUpButton);
    
}

setupRegistration = () => {
    let container = document.getElementById("container");
    let form = document.createElement("form");
    form.method = "post";
    form.action = "/";
    form.classList = ["form-group row"];
    form.id = "registrationForm";
    form.style.display = "none";
    
    let br = document.createElement("br");
    let br2 = document.createElement("br");

    container.appendChild(form);

    let emailLabel = document.createElement("label");
    emailLabel.classList = ["col-form-label"];
    let emailText = document.createTextNode("E-mail");
    emailLabel.appendChild(emailText);
    let emailInput = document.createElement("input");
    emailInput.required = true;
    emailInput.name = "email";
    emailInput.classList = ["form-control"];
    emailInput.placeholder = "Enter e-mail";

    let usernameLabel = document.createElement("label");
    usernameLabel.classList = ["col-form-label"];
    let usernameText = document.createTextNode("Username");
    usernameLabel.appendChild(usernameText);
    let usernameInput = document.createElement("input");
    usernameInput.required = true;
    usernameInput.name = "username";
    usernameInput.classList = ["form-control"];
    usernameInput.placeholder = "Enter username";

    let passwordLabel = document.createElement("label");
    passwordLabel.classList = ["col-form-label"];
    let passwordText = document.createTextNode("Password");
    passwordLabel.appendChild(passwordText);
    let passwordInput = document.createElement("input");
    passwordInput.required = true;
    passwordInput.name = "password";
    passwordInput.classList = ["form-control"];
    passwordInput.placeholder = "Enter password";

    form.appendChild(usernameLabel);
    form.appendChild(usernameInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);

    let registerButton = document.createElement("button");
    let registerText = document.createTextNode("Register");
    registerButton.classList = ["btn btn-primary"];
    registerButton.id = "registerButton";
    registerButton.appendChild(registerText);
    form.appendChild(br);
    form.appendChild(br2);
    form.appendChild(registerButton);



    let loginMeButton = document.createElement("button");
    loginMeButton.classList = ["btn btn-secondary"];
    let loginMeText = document.createTextNode("Have an account already? Click here!");
    loginMeButton.appendChild(loginMeText);
    loginMeButton.addEventListener("click", loginMeIn);
    form.appendChild(loginMeButton);
}

setupRequired = () => {
    let container = document.getElementById("container");
    let requiredMessageDiv = document.createElement("div");
    requiredMessageDiv.classList = ["alert alert-info"];
    requiredMessageDiv.id = "infoRequired";
    requiredMessageDiv.style.display = "none";
    container.appendChild(requiredMessageDiv);
}

createHomeNavBar = () => {
    let navHTML = '<nav class="navbar navbar-expand-lg navbar-light bg-light">' +
        '<a class="navbar-brand"></a>' +
        '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">' +
        '<span class="navbar-toggler-icon"></span>' +
        '</button>'+
    '<div class="collapse navbar-collapse" id="navbarNav">' +
    '<ul class="navbar-nav">' +
    '<li class="nav-item active">' +
    '<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</nav>' +
    '</br>';
    $('body').append(navHTML);
}

createRegLogContainer = () => {
    let containHTML = '<h1 id="welcomeGameMessage"></h1>' +
        '<br>' +
        '<div id="container" class="container">' +
        '</div>';
    $('body').append(containHTML);
}