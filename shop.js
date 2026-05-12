// ===============================
// تحميل السلة من LocalStorage
// ===============================
let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];


// ===============================
// تحديث عدّاد السلة بجانب الأيقونة
// ===============================
function updateCartCount() {
    let count = 0;

    cart.forEach(item => {
        count += item.qty;
    });

    const badge = document.getElementById("cartCount");
    if (badge) {
        badge.textContent = count;
    }
}


// ===============================
// إضافة منتج للسلة
// ===============================
function addToCart(id, name, price, size = null) {

    const item = cart.find(p =>
        p.productId === id &&
        p.size === size
    );

    if (item) {
        item.qty++;
    } else {
        cart.push({
            productId: id,
            name: name,
            price: price,
            size: size,
            qty: 1
        });
    }

    localStorage.setItem("shoppingCart", JSON.stringify(cart));

    updateCartCount(); // تحديث العدد

    alert("تمت إضافة المنتج للسلة 🛒");
}


// ===============================
// تفعيل زر الإضافة عند اختيار المقاس
// ===============================
function enableAdd(select) {
    let btn = select.parentElement.querySelector(".add-to-cart-btn");

    btn.disabled = select.value === "";
}


// ===============================
// تشغيل عند فتح الصفحة
// ===============================
updateCartCount();
