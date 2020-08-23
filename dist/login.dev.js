"use strict";

var errorElement = document.getElementById("error");
errorElement.innerHTML = "";

function validate() {
  if (validateEmail() && validatePassword()) {
    errorElement.style.color = "green";
    errorElement.style.backgroundColor = "white";
    errorElement.innerHTML += "Your details are correct Welcome to Blogger.com";
  } else {
    errorElement.style.color = "#fff";
    errorElement.style.backgroundColor = "red";
  }
}

function validateEmail() {
  var x = document.getElementById("email").value;
  console.log("Email " + x);
  var atposition = x.indexOf("@");
  var dotposition = x.lastIndexOf(".");

  if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
    errorElement.innerHTML += " Please enter a valid e-mail address";
    return false;
  }

  return true;
}

function validatePassword() {
  password = document.getElementById("password").value;
  console.log("Password " + password);
  var f = true;

  if (password.length == 0) {
    errorElement.innerHTML += " Password is Empty";
    f = false;
  } else if (!password.match(/[0-9]/g)) {
    errorElement.innerHTML += " Password does not contain Numbers";
    f = false;
  } else if (!password.match(/[A-Z]/g)) {
    errorElement.innerHTML += " Password does not contain Uppercase";
    f = false;
  } else if (!password.match(/[^a-zA-Z\d]/g)) {
    errorElement.innerHTML += " Password does not contain Special Character";
    f = false;
  }

  return f;
}