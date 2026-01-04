function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById('overlay');
    sidebar.classList.toggle("active");
    overlay.classList.toggle('active');
}



const video = document.getElementById('myLogoVideo');

// 1. הפעלה בלחיצה
video.addEventListener('click', () => {
    // אם הוידאו כרגע רץ, נחזיר אותו להתחלה (אופציונלי)
    if (!video.paused) {
        video.currentTime = 0;
    }
    video.play(); // מפעיל את הוידאו
});

// 2. איפוס בסוף הניגון
video.addEventListener('ended', () => {
    video.currentTime = 0; // מחזיר לפריים הראשון (התמונה הסטטית)
    // הוידאו עוצר אוטומטית כשהוא מסתיים, אז לא צריך פקודת stop
});


