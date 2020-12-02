function validateEmail() {
    var email = document.getElementById("user-email").value;
    if (!email.includes("@")) {
        document.getElementById("user-email").style.borderColor = "red";
        document.getElementById("email-error-text").innerHTML = "Please enter a valid email address";
    } else {
        document.getElementById("user-email").style.borderColor = "black";
        document.getElementById("email-error-text").innerHTML = "";
    }
}