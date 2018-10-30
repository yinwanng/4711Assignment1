window.onload = () => {
    setupLogin();
    setupRegistration();
}

setupLogin = () => {
    let container = document.getElementById("container");
    let form = document.createElement("form");
    let br = document.createElement("br");
    let br2 = document.createElement("br");
    let br3 = document.createElement("br");
    let br4 = document.createElement("br");

    container.appendChild(form);

    let emailLabel = document.createElement("label");
    let emailText = document.createTextNode("E-mail");
    emailLabel.appendChild(emailText);
    
    let emailInput = document.createElement("input");
    emailInput.required = true;
    emailInput.name = "loginEmail";
    

    let passwordLabel = document.createElement("label");
    let passwordText = document.createTextNode("Password");
    passwordLabel.appendChild(passwordText);
    let passwordInput = document.createElement("input");
    passwordInput.required = true;
    passwordInput.name = "loginPassword";
    
    
    form.appendChild(emailLabel);
    form.appendChild(br);
    form.appendChild(emailInput);
    form.appendChild(br2);
    form.appendChild(passwordLabel);
    form.appendChild(br3);
    form.appendChild(passwordInput);

    let loginButton = document.createElement("button");
    let loginText = document.createTextNode("Login");
    loginButton.appendChild(loginText);
    form.appendChild(br4);
    form.appendChild(loginButton);
}

setupRegistration = () => {
    let container = document.getElementById("container");
    let form = document.createElement("form");
    let br = document.createElement("br");
    let br2 = document.createElement("br");
    let br3 = document.createElement("br");
    let br4 = document.createElement("br");
    let br5 = document.createElement("br");
    let br6 = document.createElement("br");
    let br7 = document.createElement("br");
    let br8 = document.createElement("br");

    container.appendChild(form);

    let emailLabel = document.createElement("label");
    let emailText = document.createTextNode("E-mail");
    emailLabel.appendChild(emailText);
    let emailInput = document.createElement("input");
    emailInput.required = true;
    emailInput.name = "email";

    let usernameLabel = document.createElement("label");
    let usernameText = document.createTextNode("Username");
    usernameLabel.appendChild(usernameText);
    let usernameInput = document.createElement("input");
    usernameInput.required = true;
    usernameInput.name = "username";

    let passwordLabel = document.createElement("label");
    let passwordText = document.createTextNode("Password");
    passwordLabel.appendChild(passwordText);
    let passwordInput = document.createElement("input");
    passwordInput.required = true;
    passwordInput.name = "password";

    let passwordConfirmationLabel = document.createElement("label");
    let passwordConfirmationText = document.createTextNode("Confirm Password");
    passwordConfirmationLabel.appendChild(passwordConfirmationText);
    let passwordConfirmationInput = document.createElement("input");
    passwordConfirmationInput.required = true;
    passwordConfirmationInput.name = "passwordConfirmation";

    form.appendChild(usernameLabel);
    form.appendChild(br);
    form.appendChild(usernameInput);
    form.appendChild(br2);
    form.appendChild(emailLabel);
    form.appendChild(br3);
    form.appendChild(emailInput);
    form.appendChild(br4);
    form.appendChild(passwordLabel);
    form.appendChild(br5);
    form.appendChild(passwordInput);
    form.appendChild(br6);
    form.appendChild(passwordConfirmationLabel);
    form.appendChild(br7);
    form.appendChild(passwordConfirmationInput);

    let loginButton = document.createElement("button");
    let loginText = document.createTextNode("Register");
    loginButton.appendChild(loginText);
    form.appendChild(br8);
    form.appendChild(loginButton);


    
}