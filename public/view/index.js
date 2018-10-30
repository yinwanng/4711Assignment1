window.onload = () => {
    setupLogin();
}

setupLogin = () => {
    let container = document.getElementById("container");
    let form = document.createElement("form");
    let br = document.createElement("br");
    let br2 = document.createElement("br");
    let br3 = document.createElement("br");

    container.appendChild(form);

    let emailLabel = document.createElement("label");
    let emailText = document.createTextNode("E-mail");
    emailLabel.appendChild(emailText);
    
    let emailInput = document.createElement("input");
    // emailLabel.appendChild(emailInput);
    

    let passwordLabel = document.createElement("label");
    let passwordText = document.createTextNode("Password");
    passwordLabel.appendChild(passwordText);
    let passwordInput = document.createElement("input");
    // passwordLabel.appendChild(passwordInput);
    
    form.appendChild(emailLabel);
    form.appendChild(br);
    form.appendChild(emailInput);
    form.appendChild(br2);
    form.appendChild(passwordLabel);
    form.appendChild(br3);
    form.appendChild(passwordInput);
    
    
    
}