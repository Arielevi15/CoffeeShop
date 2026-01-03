

let memberUser = JSON.parse(localStorage.getItem("user"));
console.log(memberUser);

function greeting()
{
    const userName = memberUser.name;
    const greetingElement = document.getElementById("userGreeting");
    greetingElement.innerHTML = `Welcome back, ${userName}!`;
}

function showBalance() {
    const balanceElement = document.getElementById("balanceAmount");
    const balance = memberUser.balance;
    balanceElement.innerHTML = `${balance} $`;
}


function amount()
{
    const selectedAmount = document.querySelector('input[name="amount"]:checked').value;
    return parseInt(selectedAmount);
}

function handlePayment() {
    const amountToPay = amount();
    alert(`Processing payment for: $${amountToPay}`);
    memberUser.balance += amountToPay;
    localStorage.setItem("user", JSON.stringify(memberUser));
    showBalance();



}




window.onload = function() {
    greeting();
    showBalance();
}