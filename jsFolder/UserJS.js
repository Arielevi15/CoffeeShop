const defaultUser = {
  name: "Ariel",
  email: "coffe123@gmail.com",
  password: "12345678",
  is_member: true,
  membership: "Gold",
  member_since: "2021-05-15",
  balance: 2500,
  orders: [],
};

let user = JSON.parse(localStorage.getItem("user"));
if (!user) {
  user = defaultUser;
  localStorage.setItem("user", JSON.stringify(user));
}

const embeddedUser = document.getElementById("user");
const embeddedDate = document.getElementById("date");
//פעולת ברכת שלום למשתמש, יחד עם שילוב אלמנט הזמן
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
//פעולה המראה את נתוני המנוי : יתרה, מתי הצטרף למנוי, רמת המנוי
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

//פעולה הצובעת את כרטיס פרטי חבר המועדון לפי רמתו
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

//פעולה האחראית על המתנה היומית של המשתמש 
function DailyGift() {
  const user = JSON.parse(localStorage.getItem("user"));
  const btn = document.getElementById("DailyGift");
  const msg = document.getElementById("gift-message");
  const today = new Date().toLocaleDateString("en-GB");

  if (user.lastBonusDate === today) {
    //  מקרה 1: המשתמש כבר לקח מתנה היום 
    btn.style.display = "none"; // הסתרת הכפתור
    msg.textContent = "You have already taken your daily prize , come back tommorow! 🎁";
    msg.style.color = "#7f8c8d"; // אפור
    return; // יציאה מהפונקציה כדי למנוע קבלת מתנה נוספת
  }

  const bonus = Math.floor(Math.random() * 11 + 5); //מספר רנדומלי בין 5 ל-15
  user.balance += bonus;
  user.lastBonusDate = today; //  מקרה 2: המשתמש לוקח מתנה לראשונה היום 
  localStorage.setItem("user", JSON.stringify(user));

  //הצלחת פעולת המתנה היומית
  btn.style.display = "none";
  msg.innerHTML = `Congrat , ${bonus}$ has been added to your balance`;
  msg.style.color = "#2e7d32";

  //עדכון היתרה של המשתמש בכרטיס חבר המנוי
  const membershipSpan = document.getElementById("membershipDetails");
  if (membershipSpan) {
    membershipDetails.textContent = `Hi ${user.name}, You are a ${user.membership} member since: ${user.member_since}. You Possess: ${user.balance} Points.`;
  } else {
    alert(`New Balance: ${user.balance} ₪`);
  }
}

//הפעלת הפעולות
window.onload = () => {
  greetUser();
  showMembershipCard();
};
