const ordersContainer = document.getElementById("orders"); 
//כניסה להיסטוריית ההזמנות מהאיחסון המקומי של המשתמש
const user = JSON.parse(localStorage.getItem("user"));

const items = user.orders;
//ריצה על כל הזמנות המשתמש
items.forEach(p => {
    const orderDiv = document.createElement("div");
    orderDiv.className = "order-item";

    const name = document.createElement("span");
    name.className = "order-name";
    name.textContent = p.productName || p.ProductName;

    const price = document.createElement("span");
    price.className = "order-price";
    price.textContent = `${p.price || p.Price} ₪`;

    const imgEl = document.createElement("img");
    imgEl.src = p.image || p.Image;
    imgEl.alt = p.productName || p.ProductName;
    imgEl.className = "order-image";

    // מכניס את כל הפרטים (שם, מחיר, תמונה) לתוך הקוביה של ההזמנה ומוסיף לדף
    orderDiv.append(name, price, imgEl);
    ordersContainer.appendChild(orderDiv);

    
})
