const text = document.querySelector(".sec-text");

const textLoad = ()=> {
    setTimeout(() => {
        text.textContent = "Developer"
    }, 0);
    setTimeout(() => {
        text.textContent = "Freelancer"
    }, 4000);
    setTimeout(() => {
        text.textContent = "Designer"
    }, 8000);
}

textLoad();
setInterval(textLoad,12000);

//document.getElementById("myForm").addEventListener("submit", validate);
let loginForm = document.getElementById("myForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // handle submit
    validate()
    if(validate()){
        window.location.href="index.html";
    }
});
function  validate() {
    // Get the value of the input field with id="username"
    var username = document.getElementById("username").value;
    // Get the div of the msg username
    var msgUsername = document.getElementById("msg_username");
    // Get the value of the input field with id="password"
    var password = document.getElementById("password").value;
    // Get the div of the msg password
    var msgPassword = document.getElementById("msg_password");
    // Check if the email is empty
    if (username == "") {
        msgUsername.textContent = "username field must be filled out"
        return false;
    }else{
        msgUsername.textContent = " "
    }
    // Check if the password is empty
    if (password == "") {
        msgPassword.textContent = "Password field must be filled out"
        return false;
    }else{
        msgPassword.textContent = " "
    }
    // Check if the password is min 8 char
    if (password.length < 8) {
        msgPassword.textContent = "Password field must be min 8 char"
        return false;
    }


    return true;
}

function  confirmValidate() {
    // Get the value of the input field with id="password"
    var password = document.getElementById("password").value;
    // Get the div of the msg password
    var msgPassword = document.getElementById("confirm_password");

    if (password == "123456789") {
        msgPassword.textContent = "Password is matched"
        return false;
    }else{
        msgPassword.textContent = "Password isn't matched"
    }

    setTimeout(function(){
        msgPassword.textContent = " "
    }, 1000);

}




