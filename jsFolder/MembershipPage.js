let user = JSON.parse(localStorage.getItem("user"));

if (!user || typeof user.balance !== "number") {
  user = {
    name: "Ariel",
    password: "1234",
    is_member: true,
    membership: "Gold",
    member_since: "2021-05-15",
    balance: 2500,
  };
  localStorage.setItem("user", JSON.stringify(user));
}
console.log(user);

function greeting() {
  const userName = user.name;
  const greetingElement = document.getElementById("userGreeting");
  greetingElement.innerHTML = `Welcome back, ${userName}!`;
}

function showBalance() {
  const balanceElement = document.getElementById("balanceAmount");
  const balance = user.balance;
  balanceElement.innerHTML = `${balance} $`;
}

function amount() {
  const selectedAmount = document.querySelector(
    'input[name="amount"]:checked'
  ).value;
  return parseInt(selectedAmount);
}

function handlePayment() {
  const amountToPay = amount();
  alert(`Processing payment for: $${amountToPay}`);
  user.balance += amountToPay;
  localStorage.setItem("user", JSON.stringify(user));
  showBalance();
}

window.onload = function () {
  greeting();
  showBalance();
};
