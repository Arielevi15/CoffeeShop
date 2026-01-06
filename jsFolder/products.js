const listEl = document.getElementById("products");

document.addEventListener("DOMContentLoaded", loadProducts);

async function loadProducts() {
  const categoryId = localStorage.getItem("selectedCategory");

  const res = await fetch("/extra/products.json"); // fetch products, not categories
  const data = await res.json();
  const items = data.products_menu;

  listEl.textContent = "";

  items.forEach((p) => {
    if (p.CategoryId == categoryId) {
      const card = document.createElement("div");
      card.className = "product";

      const name = document.createElement("span");
      name.className = "product-name";
      name.textContent = p.ProductName;

      const imgEl = document.createElement("img");
      imgEl.src = p.image; // 'image' path from JSON
      imgEl.alt = p.ProductName; // Accessibility alt text

      const price = document.createElement("span");
      price.className = "product-price";
      price.textContent = `${p.Price} ₪`;

      card.append(name, price, imgEl);
      card.addEventListener("click", function () {
        purchaseProduct(p);
      });
      listEl.appendChild(card);
    }
  });
}



function purchaseProduct(product) {
    const user = JSON.parse(localStorage.getItem("user"));
    const productPrice = parseFloat(product.Price);
    if (user.balance >= productPrice) {
        user.balance -= productPrice;
        if (user.orders)
        {
            const order = {
                productName: product.ProductName,
                price: productPrice,
                image: product.image,
                date: new Date().toISOString()
            };
            user.orders.unshift(order);
        }
        localStorage.setItem("user", JSON.stringify(user));
        alert(`Purchase successful: ${product.ProductName} for ${product.Price} ₪ new balance: ${user.balance}`);
    } else {
        alert("Insufficient balance to complete the purchase.");
    }
    

}