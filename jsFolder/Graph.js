
document.addEventListener('DOMContentLoaded', () => {

    //Getting the card of the graph
    const graphCanvas = document.getElementById("habitsChart").getContext("2d");

    //Array of colors
    const colors = [
    'rgba(230, 126, 34, 0.7)',  // כתום (המקורי שלך)
    'rgba(46, 204, 113, 0.7)',  // ירוק
    'rgba(52, 152, 219, 0.7)',  // כחול
    'rgba(155, 89, 182, 0.7)',  // סגול
    'rgba(241, 196, 15, 0.7)',  // צהוב
    'rgba(231, 76, 60, 0.7)',   // אדום
    'rgba(52, 73, 94, 0.7)'     // כחול כהה/אפור
];

//Array of border colors
const borderColors = [
    '#e67e22', '#27ae60', '#2980b9', '#8e44ad', '#f1c40f', '#c0392b', '#2c3e50'
];

//Function of names
    labels = getProductNames();


    //Counting the product numbers
    productCounts = countProductFunc(labels);

    const stackedBar = new Chart(graphCanvas, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Monthly Orders',
                data: productCounts, // הנתונים שלך
                backgroundColor: colors, // צבע כתום תואם למיתוג
                borderColor: borderColors,
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

    //Getting the user's orders
   const user = JSON.parse(localStorage.getItem("user"));
   const items = user.orders;
   const productsArr = [];

   //We loop for each order and gets the product name
   items.forEach(item => {
    
    //Checking for duplications
    if(!productsArr.includes(item.productName)){
            productsArr.push(item.productName);
    }

   });


   console.log(productsArr);

   return productsArr;
}


//The function counts each product's amount
function countProductFunc(products) {


   const user = JSON.parse(localStorage.getItem("user"));
   const items = user.orders;
   let productAmount = {};

   //We are making a dictionary of the product type as a key and an amount of its value
   items.forEach(item => {

    const name = item.productName;

    //If the field already exists, count 1 more
    if(productAmount[name]){

        productAmount[name] += 1;
    }
    else{ //Adding a new field and setting the value as 1
        productAmount[name] = 1;
    }


   });

        return products.map(product => productAmount[product] || 0);


}