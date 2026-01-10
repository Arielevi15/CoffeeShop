async function loadOrders() {
  const res = await fetch("/extra/foreignOrders.json");
  const products = await res.json();
  const user = JSON.parse(localStorage.getItem("user"));

  for (let p of products) {
    user.orders.push(p);
  }

  localStorage.setItem("user", JSON.stringify(user));
}



async function loadCategories(){

    const res = await fetch("/extra/");



}