
//ייבוא נתוני המשתמש מהאיחסון המקומי
let user = JSON.parse(localStorage.getItem("user"));

if (!user || typeof user.balance !== "number") {
  user = {
    name: "Ariel",
    password: "1234",
    is_member: true,
    membership: "Gold",
    member_since: "2021-05-15",
    balance: 2500,
    orders: []
  };
  localStorage.setItem("user", JSON.stringify(user));
}
console.log(user);

//פעולת "ברוכים הבאים" למשתמש
function greeting() {
  const userName = user.name;
  const greetingElement = document.getElementById("userGreeting");
  greetingElement.innerHTML = `Welcome back, ${userName}!`;
}

//פונקציה המראה את היתרה שבכרטיס חבר המועדון
function showBalance() {
  const balanceElement = document.getElementById("balanceAmount");
  const balance = user.balance;
  balanceElement.innerHTML = `${balance} $`;
}

//פעולה המחזירה את הערך הנבחר מ3 האפשרויות של טעינת הכרטיס - 20/50/100
function amount() {
  const selectedAmount = document.querySelector(
    'input[name="amount"]:checked'
  ).value;
  return parseInt(selectedAmount);
}

//פונקציה המעדכנת את יתרת המשתמש בהתאם למה שהחזירה פעולת בחירת הסכום לטעינה
function handlePayment() {
  const amountToPay = amount();
  alert(`Processing payment for: $${amountToPay}`);
  user.balance += amountToPay;
  localStorage.setItem("user", JSON.stringify(user));
  //עדכון היתרה החדשה במסך
  showBalance();
}

window.onload = function () {
  greeting();
  showBalance();
};
