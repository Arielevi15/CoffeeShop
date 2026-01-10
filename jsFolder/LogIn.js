const defaultUser = {
  name: "Ariel",
  password: "1234",
  is_member: true,
  membership: "Gold",
  member_since: "2021-05-15",
  balance: 2500,
  orders: []
};

let user = JSON.parse(localStorage.getItem("user"));
if (!user) {
  user = defaultUser;
  localStorage.setItem("user", JSON.stringify(user));
}

console.log("Current user:", user);



function login()
{
    const existingErrors = document.querySelectorAll(".error-msg");
    existingErrors.forEach(error => error.remove());

    let userNameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;
    if (userNameInput === user.name && passwordInput === user.password) {
        alert("Login successful!");
        window.location.href = "/HtmlFolder/HomePage.html"; 
    }
    else {
        if ((userNameInput !== user.name) || userNameInput == null) {
            let divU = document.getElementById("UserId");
            let alertMsg = "Username incorrect.";
            let divAlert = document.createElement("div");
            divAlert.innerHTML = alertMsg;
            divAlert.style.color = "red";
            divAlert.className = "error-msg"
            divU.appendChild(divAlert);
        }
        if ((passwordInput !== user.password) || passwordInput == null) {
            let divP = document.getElementById("UserPass");
            let alertMsg = "Password incorrect.";
            let divAlert = document.createElement("div");
            divAlert.innerHTML = alertMsg;
            divAlert.style.color = "red";
            divAlert.className = "error-msg"
            divP.appendChild(divAlert);
        }
    }

}