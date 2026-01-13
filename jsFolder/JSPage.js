
// מחכה שה-HTML של הדף ייטען במלואו לפני שמנסים לגשת לאלמנטים
window.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("myLogoVideo");
  // בדיקת בטיחות: אם הוידאו לא נמצא בדף, יוצאים כדי למנוע קריסה
  if (!video) return;

  // מנסה לנגן את הוידאו. ה-catch משתיק שגיאות אם הדפדפן חוסם ניגון אוטומטי
  video.play().catch(() => {});
  // מאזין לאירוע סיום הוידאו
  video.addEventListener("ended", () => {
    // כשהוידאו נגמר, מחזיר אותו להתחלה (שלא ייתקע על הפריים האחרון)
    video.currentTime = 0;
  });
});
