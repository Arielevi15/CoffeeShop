//תפיסת האלמנט שעליו נעבוד
const listEl = document.getElementById("products");

document.addEventListener("DOMContentLoaded", loadProducts);

async function loadProducts() {
  const categoryId = localStorage.getItem("selectedCategory");

  let items = JSON.parse(localStorage.getItem("products"));
  // האם טענת קובץ חדש? אם לא, טען מהקובץ החיצוני
  if (!Array.isArray(items)) {
    const res = await fetch("/extra/products.json");
    const data = await res.json();
    items = data.products_menu;
  }

  listEl.textContent = "";

  items.forEach((p) => {
    if (p.CategoryId == categoryId) {
      const card = document.createElement("div");
      card.className = "product";

      const name = document.createElement("span");
      name.className = "product-name";
      name.textContent = p.ProductName;

      const imgEl = document.createElement("img");
      const defaultImage = "/images/MissingImage.png";
      imgEl.src = p.image ? p.image : defaultImage;
      imgEl.alt = p.ProductName;
      imgEl.onerror = () => {
        imgEl.src = defaultImage;
      };

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



//פונקציית הרכישה וטיפול ביתרה לאחר הרכישה
function purchaseProduct(product) {
  //שליפת המשתמש הנוכחי לבדיקת היתרה
  const user = JSON.parse(localStorage.getItem("user"));
  const productPrice = parseFloat(product.Price);

  // בדיקה אם יש למשתמש מספיק כסף בחשבון
  if (user.balance >= productPrice) {
    user.balance -= productPrice; //הורדת מחיר המוצר מהיתרה
    if (user.orders) {
      // יצירת אובייקט הזמנה חדש עם תאריך נוכחי
      const order = {
        productName: product.ProductName,
        price: productPrice,
        image: product.image,
        date: new Date().toISOString(),
      };
      user.orders.unshift(order);
    }
    //שמירת הנתונים באיחסון המקומי
    localStorage.setItem("user", JSON.stringify(user));
    alert(
      `Purchase successful: ${product.ProductName} for ${product.Price} ₪ new balance: ${user.balance}`
    );
  } else {
    //התראה שאין מספיק כסף
    alert("Insufficient balance to complete the purchase.");
  }
}
