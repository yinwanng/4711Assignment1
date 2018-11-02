setupLogin = () => {
    let container = document.getElementById("container");
    let form = document.createElement("form");
    form.method = "post";
    form.action = "/";
    form.id = "loginForm";
    let br = document.createElement("br");
    let br2 = document.createElement("br");
    form.classList = ["form-group row"];
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
    // passwordInput.required = true;
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

    // let passwordConfirmationLabel = document.createElement("label");
    // passwordConfirmationLabel.classList = ["col-form-label"];
    // let passwordConfirmationText = document.createTextNode("Confirm Password");
    // passwordConfirmationLabel.appendChild(passwordConfirmationText);
    // let passwordConfirmationInput = document.createElement("input");
    // passwordConfirmationInput.required = true;
    // passwordConfirmationInput.name = "passwordConfirmation";
    // passwordConfirmationInput.classList = ["form-control"];
    // form.appendChild(passwordConfirmationLabel);
    // form.appendChild(passwordConfirmationInput);

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