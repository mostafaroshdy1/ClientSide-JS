const formContainer = document.querySelector(".form-container");
const form = document.querySelector(".validation-form");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const button = document.querySelector(".submit-btn");
const response = document.querySelector(".response");

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    let retval = "";
    if (!/[A-Z]/.test(password)) {
        retval += "Password must contain capital letters ";
    }
    if (!/[a-z]/.test(password)) {
        retval += "Password must contains small Letters ";
    }
    if (!/([0-9])/.test(password)) {
        retval += "Password must contains atleast one number ";

    }
    if (password.length < 8) {
        retval += "Password be atleast 8 characters long";

    }
    return retval || passwordRegex.test(password);
}


form.addEventListener("submit", logInSubmit, false);

function logInSubmit(event) {
    event.preventDefault();


    try {
        if (validateEmail(email.value) !== true) {
            throw new Error("Invalid email format");
        }
        if (validatePassword(password.value) !== true) {
            throw new Error(validatePassword(password.value));
        }

        response.innerText = "Welcome!!"
    } catch (error) {
        response.innerText = error.message;
    }
}
