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

// בדיקה האם המשתמש קיים, אם לא, ייצור אחד
let user = JSON.parse(localStorage.getItem("user"));
if (!user) {
  user = defaultUser;
  localStorage.setItem("user", JSON.stringify(user));
}

console.log("Current user:", user);

//פעולת ההתחברות
function login() {
    //מנקה את הודעות השגיאה הקיימות אם יש
    const existingErrors = document.querySelectorAll(".error-msg");
    existingErrors.forEach(error => error.remove());

    let emailInput = document.getElementById("EmailInput").value; 
    let passwordInput = document.getElementById("password").value;
    console.log(emailInput , passwordInput);
    
    let isValid = true; 

    // בודק האם המייל מכיל את התו @
    if (emailInput === "" || !emailInput.includes('@')) {
        showError("UserId", "Please enter a valid email address (must contain '@').");
        isValid = false;
    }

    // בודק האם אורך הסיסמא הינה 8 תווים לפחות
    if (passwordInput === "" || passwordInput.length < 8) {
        showError("UserPass", "Password must be at least 8 characters long.");
        isValid = false;
    }

    // דגל לכך שניתן להמשיך
    if (!isValid) {
        return;
    }

    //בדיקה לקלט המשתמש האם שווה לנתוני המשתמש הקיים במערכת, אם כן , ניתוב לעמוד הבית
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

//פונקציה היוצרת את הודעות השגיאה וממקמת אותן מתחת לשדות הקלט
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