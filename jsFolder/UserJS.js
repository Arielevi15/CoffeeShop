const defaultUser = {
  name: "Ariel",
  password: "1234",
  is_member: true,
  membership: "Gold",
  member_since: "2021-05-15",
  balance: 2500,
};

let user = JSON.parse(localStorage.getItem("user"));
if (!user) {
  user = defaultUser;
  localStorage.setItem("user", JSON.stringify(user));
}


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
  if (user.is_member) {
    if (user.membership === "Gold") {
      membershipBadge = " 🥇";
    } else if (user.membership === "Silver") {
      membershipBadge = " 🥈";
    } else if (user.membership === "Bronze") {
      membershipBadge = " 🥉";
    } else if (user.membership === "none" || user.membership == "") {
      membershipBadge = " ";
    }
  }

  embeddedDate.innerHTML = now.toLocaleString("en-US");
  embeddedUser.innerHTML = `${greeting}, ${user.name}${membershipBadge}`;
}

function showMembershipCard() {
  const membershipDetails = document.getElementById("membershipDetails");
  if (user.is_member) {
    membershipDetails.innerHTML = `Hi ${user.name}, You are a ${user.membership} member since: ${user.member_since}. You Possess: ${user.balance} Points.`;
    backgroundColorByMembership();
  } else {
    membershipDetails.innerHTML =
      "Not a club member. Join now to earn rewards!";
  }
}

function backgroundColorByMembership() {
  const divColor = document.getElementById("clubMembership dash-card");
  if (user.is_member) {
    if (user.membership === "Gold") {
      divColor.style.backgroundColor = "#FFD700";
    } else if (user.membership === "Silver") {
      divColor.style.backgroundColor = "#C0C0C0";
    } else if (user.membership === "Bronze") {
      divColor.style.backgroundColor = "#CD7F32";
    }
  }
}

window.onload = () => {
  greetUser();
  showMembershipCard();
};
