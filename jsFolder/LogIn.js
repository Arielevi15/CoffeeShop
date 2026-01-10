const defaultUser = {
  name: "Ariel",
  password: "12345678", 
  email: "coffe123@gmail.com",
  is_member: true,
  membership: "Gold",
  member_since: "2021-05-15",
  balance: 2500,
  orders: []
};

// Importing the user or creation one if not exists
let user = JSON.parse(localStorage.getItem("user"));
if (!user) {
  user = defaultUser;
  localStorage.setItem("user", JSON.stringify(user));
}

console.log("Current user:", user);

function login() {
    //Clear previous error messages
    const existingErrors = document.querySelectorAll(".error-msg");
    existingErrors.forEach(error => error.remove());

    let emailInput = document.getElementById("EmailInput").value; 
    let passwordInput = document.getElementById("password").value;
    console.log(emailInput , passwordInput);
    
    let isValid = true; 

    // Email Check: Not empty and contains @
    if (emailInput === "" || !emailInput.includes('@')) {
        showError("UserId", "Please enter a valid email address (must contain '@').");
        isValid = false;
    }

    // Password Check: Not empty and at least 8 characters
    if (passwordInput === "" || passwordInput.length < 8) {
        showError("UserPass", "Password must be at least 8 characters long.");
        isValid = false;
    }

    // If format is invalid, stop here
    if (!isValid) {
        return;
    }

    
    if (emailInput === user.email && passwordInput === user.password) {
        alert("Login successful!");
        window.location.href = "/HtmlFolder/HomePage.html"; 
    } else {
        if (emailInput !== user.name) {
            showError("UserId", "Username incorrect.");
        }
        if (passwordInput !== user.password) {
            showError("UserPass", "Password incorrect.");
        }
    }
}

//function to display errors
function showError(containerId, message) {
    let container = document.getElementById(containerId);
    let divAlert = document.createElement("div");
    divAlert.innerHTML = message;
    divAlert.style.color = "red";
    divAlert.className = "error-msg";
    divAlert.style.fontSize = "0.8rem";
    divAlert.style.marginTop = "5px";
    container.appendChild(divAlert);
}