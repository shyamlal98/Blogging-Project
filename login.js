var emailElementID = document.getElementById("email");
var passElementID = document.getElementById("password");
var email = document.myform.email.value;
var password = document.myform.password.value;
console.log("Email " + email);
console.log("Password " + password);

function validate() {
    if (validateEmail() && validatePassword()) {
        return ture;
    }
    return false;
}
var errorElement = document.getElementById("error");
errorElement.innerHTML = "";

function validateEmail() {
    var x = document.myform.email.value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        errorElement.innerHTML = ("Please enter a valid e-mail address");
        return false;
    }
    return true;
}

function validatePassword() {
    // errorElement.innerHTML = "";
    // let checkUC = /^[A-Z]+$/.test(password);
    // let checkSC = /[^a-zA-Z0-9]+$/.test(password);
    // let checkNum = /[0-9]/.test(password);
    let f = true;
    if (password.length == 0) {
        errorElement.innerHTML = "Password is Empty";
        f = false;
    } else if (!password.match(/[0-9]/g)) {
        errorElement.innerHTML = "Password does not contain Numbers";
        f = false;
    } else if (!password.match(/[a-zA-Z]/g)) {
        errorElement.innerHTML = "Password does not contain Uppercase";
        f = false;
    } else if (!password.match(/[^a-zA-Z\d]/g)) {
        errorElement.innerHTML = "Password does not contain Special Character";
        f = false;
    }
    return f;

}