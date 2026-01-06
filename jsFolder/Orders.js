const ordersContainer = document.getElementById("orders"); 
const user = JSON.parse(localStorage.getItem("user"));

const items = user.orders;
items.forEach(p => {
    const orderDiv = document.createElement("div");
    orderDiv.className = "order-item";

    const name = document.createElement("span");
    name.className = "order-name";
    name.textContent = p.productName;

    const price = document.createElement("span");
    price.className = "order-price";
    price.textContent = `${p.price} ₪`;

    const imgEl = document.createElement("img");
    imgEl.src = p.image;
    imgEl.alt = p.productName;
    imgEl.className = "order-image";

    orderDiv.append(name, price, imgEl);
    ordersContainer.appendChild(orderDiv);

    
})
