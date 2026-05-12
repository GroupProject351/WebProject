// ===============================
// تحميل السلة
// ===============================
let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
let total = 0;


// ===============================
// تحديث عدّاد السلة
// ===============================
function updateCartCount() {
    let count = 0;

    cart.forEach(item => count += item.qty);

    const badge = document.getElementById("cartCount");
    if (badge) badge.textContent = count;
}


// ===============================
// عرض السلة
// ===============================
function renderCart() {

    const container = document.getElementById("cartItems");
    const totalBox = document.getElementById("total");

    container.innerHTML = "";
    total = 0;

    cart.forEach((item, index) => {

        total += item.price * item.qty;

        container.innerHTML += `
            <div class="cart-item">

                <div class="item-info">
                    <strong>${item.name}</strong>
                    ${item.size ? `<span> - المقاس: ${item.size}</span>` : ""}
                    <br>
                    <span>${item.price} ر.س</span>
                </div>

                <div class="qty-controls">
                    <button class="qty-btn" onclick="decrease(${index})">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="increase(${index})">+</button>
                </div>

                <button class="remove-btn" onclick="removeItem(${index})">حذف</button>

            </div>
        `;
    });

    totalBox.textContent = "الإجمالي: " + total + " ر.س";

    updateCartCount();
}


// ===============================
// زيادة الكمية
// ===============================
function increase(index) {
    cart[index].qty++;
    saveAndRender();
}


// ===============================
// إنقاص الكمية
// ===============================
function decrease(index) {
    if (cart[index].qty > 1) {
        cart[index].qty--;
    } else {
        cart.splice(index, 1);
    }
    saveAndRender();
}


// ===============================
// حذف منتج
// ===============================
function removeItem(index) {
    cart.splice(index, 1);
    saveAndRender();
}


// ===============================
// مسح السلة بالكامل
// ===============================
function clearCart() {
    cart = [];
    localStorage.removeItem("shoppingCart");
    renderCart();
}


// ===============================
// حفظ + تحديث
// ===============================
function saveAndRender() {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
    renderCart();
}


// ===============================
// حفظ الطلب في localStorage
// ===============================
function saveOrder(name, phone, cart, total) {

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
        orderId: Date.now(), // رقم طلب فريد
        name: name,
        phone: phone,
        items: cart,
        total: total
    };

    orders.push(newOrder);

    localStorage.setItem("orders", JSON.stringify(orders));
}


// ===============================
// تشغيل عند فتح الصفحة
// ===============================
renderCart();
updateCartCount();


// ===============================
// Validation Functions
// ===============================
function validateName(name) {
    if (!name) return "الاسم مطلوب";
    if (name.length < 3) return "الاسم يجب أن يكون 3 أحرف على الأقل";
    return "";
}

function validateCard(card) {
    if (!card) return "رقم البطاقة مطلوب";
    if (!/^[0-9]{16}$/.test(card)) return "رقم البطاقة يجب أن يكون 16 رقمًا";
    return "";
}

function validatePhone(phone) {
    if (!phone) return "رقم الجوال مطلوب";
    if (!/^05[0-9]{8}$/.test(phone)) return "رقم الجوال يجب أن يبدأ بـ 05 ويتكون من 10 أرقام";
    return "";
}


// ===============================
// Show Error / Success
// ===============================
function showError(field, message) {
    const input = document.getElementById(field);
    const errorBox = document.getElementById(field + "Error");

    input.classList.add("input-error");
    errorBox.textContent = message;
}

function showSuccess(field) {
    const input = document.getElementById(field);
    const errorBox = document.getElementById(field + "Error");

    input.classList.remove("input-error");
    errorBox.textContent = "";
}


// ===============================
// Submit Validation
// ===============================
document.getElementById("paymentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    const nameValue = document.getElementById("name").value;
    const cardValue = document.getElementById("card").value;
    const phoneValue = document.getElementById("phone").value;

    const nameError = validateName(nameValue);
    const cardError = validateCard(cardValue);
    const phoneError = validatePhone(phoneValue);

    if (nameError) { showError("name", nameError); isValid = false; }
    else showSuccess("name");

    if (cardError) { showError("card", cardError); isValid = false; }
    else showSuccess("card");

    if (phoneError) { showError("phone", phoneError); isValid = false; }
    else showSuccess("phone");

    if (isValid) {

        // حفظ الطلب الحقيقي
        saveOrder(nameValue, phoneValue, cart, total);

        // مسح السلة بعد الدفع
        clearCart();

        alert("تم الدفع بنجاح");
    }
});
