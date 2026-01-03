
document.addEventListener('DOMContentLoaded', () => {

    const graphCanvas = document.getElementById("habitsChart").getContext("2d");
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const stackedBar = new Chart(graphCanvas, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Monthly Orders',
                data: [65, 59, 80, 81, 56, 55, 40], // הנתונים שלך
                backgroundColor: 'rgba(230, 126, 34, 0.7)', // צבע כתום תואם למיתוג
                borderColor: '#e67e22',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // מאפשר שליטה בגובה דרך ה-CSS
            scales: {
                x: { stacked: true },
                y: {
                    stacked: true,
                    beginAtZero: true
                }
            }
        }
    });
})


