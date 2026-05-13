function enableAdd(select) {
    const btn = select.nextElementSibling;
    btn.disabled = select.value === "";
}

function addToCart(id, name, price, size) {
    if (!size) {
        alert("الرجاء اختيار المقاس");
        return;
    }

    let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

    const existing = cart.find(item => item.id === id && item.size === size);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id, name, price, size, qty: 1 });
    }

    localStorage.setItem("shoppingCart", JSON.stringify(cart));
    updateCartCount();
}
