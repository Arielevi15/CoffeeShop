const ordersDropZone = document.getElementById("drop-zone-orders");
const ordersInput = document.getElementById("file-input-orders");

const productsDropZone = document.getElementById("drop-zone-products");
const productsInput = document.getElementById("file-input-products");

function loadOrdersFromFile(file) {
  if (!file) return;

  file.text().then((text) => {
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      alert("Invalid JSON file.");
      return;
    }

    if (!Array.isArray(data)) {
      alert("JSON must be an array of orders.");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user")) || { orders: [] };
    if (!Array.isArray(user.orders)) user.orders = [];

    for (const p of data) {
      user.orders.push(p);
    }

    localStorage.setItem("user", JSON.stringify(user));
    alert("Orders loaded.");
  });
}

function loadProductsFromFile(file) {
  if (!file) return;

  file.text().then((text) => {
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      alert("Invalid JSON file.");
      return;
    }

    const products = Array.isArray(data) ? data : data.products_menu;
    if (!Array.isArray(products)) {
      alert("JSON must be an array of products.");
      return;
    }

    localStorage.setItem("products", JSON.stringify(products));
    alert("Products loaded (old list replaced).");
  });
}

ordersDropZone.addEventListener("click", () => ordersInput.click());
ordersInput.addEventListener("change", (e) => loadOrdersFromFile(e.target.files[0]));
ordersDropZone.addEventListener("dragover", (e) => e.preventDefault());
ordersDropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  loadOrdersFromFile(e.dataTransfer.files[0]);
});

productsDropZone.addEventListener("click", () => productsInput.click());
productsInput.addEventListener("change", (e) => loadProductsFromFile(e.target.files[0]));
productsDropZone.addEventListener("dragover", (e) => e.preventDefault());
productsDropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  loadProductsFromFile(e.dataTransfer.files[0]);
});
