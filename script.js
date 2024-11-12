const emailWrapper = document.querySelector(".email-wrapper");
const passwordWrapper = document.querySelector(".password-wrapper");

const nextButton = document.querySelector(".next-btn");
const createForgotButton = document.querySelector(".create-account-btn");
const backArrow = document.querySelector(".back-arrow");

const invalidEmailDiv = document.querySelector(".invalid-input.email");
const invalidEmail = document.querySelector("#invalid-email");
const noEmail = document.querySelector("#no-email");

const invalidPasswordDiv = document.querySelector(".invalid-input.password");
const invalidPassword = document.querySelector("#wrong-password");
const noPassword = document.querySelector("#no-password");

const title = document.querySelector(".sign-in-header");
const subtitle = document.querySelector(".subtitle");
const emailDiv = document.querySelector(".email-div");
const emailSpan = document.querySelector(".email-address");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex  = /(?:\+?\d{1,3}[-.\s]?)?(?:\(?\d{1,4}\)?[-.\s]?)?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const emailField = document.querySelector("#email-field");

const passwordRegex = /^.{8,}$/;
const passwordField = document.querySelector("#password-field");

function validEmailOrPhone(input) {
    return emailRegex.test(input) || phoneRegex.test(input);
}
function validPassword(input) {
    return passwordRegex.test(input);
}

nextButton.addEventListener("click", (e) => {
    if (title.innerText == 'Sign in'){
        if (validEmailOrPhone(emailField.value)){
            emailWrapper.classList.remove("active");
            passwordWrapper.classList.add("active");
            backArrow.classList.remove("inactive");
            
            title.innerText = "Welcome";
            subtitle.style.display = "none";

            emailDiv.classList.add("on");
            emailSpan.innerText = emailField.value;
            createForgotButton.innerText = "Forgot password?";
        } 
        else if (!(emailField.value == '') && !validEmailOrPhone(emailField.value)) {
            invalidEmailDiv.classList.add("on");
            if (noEmail.classList.contains("on")){
                noEmail.classList.remove("on");
            }
            invalidEmail.classList.add("on");
            emailField.classList.add("invalid");
        } 
        else if (emailField.value == '') {
            invalidEmailDiv.classList.add("on");
            if(invalidEmail.classList.contains("on")){
               invalidEmail.classList.remove("on");
            }
            noEmail.classList.add("on");
            emailField.classList.add("invalid");
        }   
    }
    else if (title.innerText == 'Welcome') {
        if (validPassword(passwordField.value)){
            sweetPrijavljen(emailField.value, passwordField.value);
        } 
        else if (!(passwordField.value == '') && !validPassword(passwordField.value)) {
            invalidPasswordDiv.classList.add("on");
            if (noPassword.classList.contains("on")){
                noPassword.classList.remove("on");
            }
            invalidPassword.classList.add("on");
            passwordField.classList.add("invalid");
        } 
        else if (passwordField.value == '') {
            invalidPasswordDiv.classList.add("on");
            if(invalidPassword.classList.contains("on")){
               invalidPassword.classList.remove("on");
            }
            noPassword.classList.add("on");
            passwordField.classList.add("invalid");
        } 
    }
});

backArrow.addEventListener('click', () => {
    emailWrapper.classList.add("active");
    passwordWrapper.classList.remove("active");
    backArrow.classList.add("inactive");

    title.innerText = "Sign in";
    subtitle.style.display = "block";
    emailDiv.classList.remove("on");
    createForgotButton.innerText = "Create account?";
});

document.querySelector("#show-password-chckbox").addEventListener("change", (e) => {
    const passwordField = document.querySelector("#password-field");
    passwordField.type = e.target.checked ? 'text' : 'password';
});

function sweetPrijavljen(login, geslo){
    Swal.fire({
        title: "Logged in",
        text: `${login}`,
        confirmButtonText: "Continue",
        preConfirm: () => {
            location.reload();
        },
        didOpen: () => {
            const confirmButton = Swal.getConfirmButton();
            confirmButton.style.backgroundColor = "#0b56d0";
        }
      });
}