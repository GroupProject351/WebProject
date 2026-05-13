// ===============================
// تحديث عدّاد السلة
// ===============================
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    let count = 0;

    cart.forEach(item => count += item.qty);

    const badge = document.getElementById("cartCount");
    if (badge) badge.textContent = count;
}

updateCartCount();
