var myInput = document.getElementById("psw");
var phoneNo = document.getElementById("phoneNo");
var phoneCheck = document.getElementById("phoneCheck");
var email = document.getElementById("email");
var emailCheck = document.getElementById("emailCheck");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var caseCheck = document.getElementById("case");
var specialChars = document.getElementById("specialChars");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
    document.getElementById("newUserMessage").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
    document.getElementById("newUserMessage").style.display = "none";
}
phoneNo.onfocus = function() {
    document.getElementById("newUserPhone").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
phoneNo.onblur = function() {
    document.getElementById("newEmail").style.display = "none";
}
email.onfocus = function() {
    document.getElementById("newEmail").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
email.onblur = function() {
    document.getElementById("newUserPhone").style.display = "none";
}
phoneNo.onkeyup = function() {
    // Validate lowercase letters
    var phoneExpression = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
    if (phoneNo.value.match(phoneExpression)) {
        phoneCheck.classList.remove("invalid");
        phoneCheck.classList.add("valid");
    } else {
        phoneCheck.classList.remove("valid");
        phoneCheck.classList.add("invalid");
    }
}
email.onkeyup = function() {
    // Validate lowercase letters
    var emailExpression =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(emailExpression)) {
        emailCheck.classList.remove("invalid");
        emailCheck.classList.add("valid");
    } else {
        emailCheck.classList.remove("valid");
        emailCheck.classList.add("invalid");
    }
}
// When the user starts to type something inside the password field
myInput.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if(myInput.value.length > 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }

    if(myInput.value[0]===myInput.value[0].toUpperCase()) {
        caseCheck.classList.remove("invalid");
        caseCheck.classList.add("valid");
    } else {
        caseCheck.classList.remove("valid");
        caseCheck.classList.add("invalid");
    }
    var specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(myInput.value.match(specialCharacters)) {
        specialChars.classList.remove("invalid");
        specialChars.classList.add("valid");
    } else {
        specialChars.classList.remove("valid");
        specialChars.classList.add("invalid");
    }
}
const radioButtons = document.querySelectorAll('input[name="insurance"]');
for(const radioButton of radioButtons){
    radioButton.addEventListener('change', showSelected);
}

function showSelected() {
    if (this.checked && this.value=='yes') {
            document.getElementById("optionBased").style.display = "block";
    }
    else {
        document.getElementById("optionBased").style.display = "none";
    }
}