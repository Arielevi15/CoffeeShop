let user = { 
    name: "Ariel", 
    password: "1234" ,
    is_member: true,
    membership: "Gold",
    member_since: "2021-05-15",
    balance: 2500
};


let club_member_card = {
    balance: 2500,
    member_since: "2021-05-15"
}



localStorage.setItem("user", JSON.stringify(user));
let parsedUser = JSON.parse(localStorage.getItem("user"));


const embeddedUser = document.getElementById("user");
const embeddedDate = document.getElementById("date");

function greetUser() {

    const now = new Date();
    const hours = now.getHours();
    let greeting;
    let membershipBadge = "";


    if (hours < 12) {
        greeting = "Good Morning";
    } else if (hours < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }  
    if (parsedUser.is_member) {
    if (parsedUser.membership === "Gold") {
        membershipBadge = " 🥇";
    } else if (parsedUser.membership === "Silver") {
        membershipBadge = " 🥈";
    }
    else if (parsedUser.membership === "Bronze") {
        membershipBadge = " 🥉";
    }
    else if (parsedUser.membership === "none" || parsedUser.membership == "") {
        membershipBadge = " ";
    }
   }

    embeddedDate.innerHTML = now.toLocaleString('en-US');
    embeddedUser.innerHTML = `${greeting}, ${parsedUser.name}${membershipBadge}`;
}

function showMembershipCard() {
    const membershipDetails = document.getElementById("membershipDetails");
    if (parsedUser.is_member) {
        membershipDetails.innerHTML = `Hi ${parsedUser.name}, You are a ${parsedUser.membership} member since: ${club_member_card.member_since}. You Posses : ${club_member_card.balance} Points.`;
        backgroundColorByMembership();

    } else {
        membershipDetails.innerHTML = "Not a club member. Join now to earn rewards!";
    }
}

function backgroundColorByMembership() {
    const divColor = document.getElementById("clubMembership dash-card")
    if (parsedUser.is_member) {
        if (parsedUser.membership === "Gold") {
            divColor.style.backgroundColor = "#FFD700";
        } else if (parsedUser.membership === "Silver") {
            divColor.style.backgroundColor = "#C0C0C0";
        } else if (parsedUser.membership === "Bronze") {
            divColor.style.backgroundColor = "#CD7F32";
        }
    }
}



window.onload = () => {
    greetUser();
    showMembershipCard();
};