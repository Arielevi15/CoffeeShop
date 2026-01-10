
document.addEventListener('DOMContentLoaded', () => {

    const graphCanvas = document.getElementById("habitsChart").getContext("2d");

    labels = getProductNames();
    productCounts = countProductFunc(labels);

    const stackedBar = new Chart(graphCanvas, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Monthly Orders',
                data: productCounts, // הנתונים שלך
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
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1,
                        precision: 0
                    }
                }
            }
        }
    });
})



function getProductNames(){

   const user = JSON.parse(localStorage.getItem("user"));
   const items = user.orders;
   const productsArr = [];

   items.forEach(item => {
    
    if(!productsArr.includes(item.productName)){
            productsArr.push(item.productName);
    }

   });


   console.log(productsArr);

   return productsArr;
}



function countProductFunc(products) {

   const user = JSON.parse(localStorage.getItem("user"));
   const items = user.orders;
   let productAmount = {};

   items.forEach(item => {

    const name = item.productName;

    if(productAmount[name]){

        productAmount[name] += 1;
    }
    else{
        productAmount[name] = 1;
    }


   });

        return products.map(product => productAmount[product] || 0);


}