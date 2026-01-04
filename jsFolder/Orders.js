function addOrder(order) {
    let user = JSON.parse(localStorage.getItem("user"));

    if (!user.orders) user.orders = [];

    if (amount <= 0) return { ok: false, reason: "invalid amount" };
    if (balance < amount) return { ok: false, reason: "insufficient funds" };

    user.balance = balance - amount;

    user.orders.push(order);

    
    localStorage.setItem("user", JSON.stringify(user));
    return {ok: true,balance: user.balance,orders: user.orders.length}
}
