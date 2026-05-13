let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
let total = 0;

function updateCartCount() {
    let count = 0;
    cart.forEach(item => count += item.qty);
    const badge = document.getElementById("cartCount");
    if (badge) badge.textContent = count;
}

function renderCart() {
    const container = document.getElementById("cartItems");
    const totalBox = document.getElementById("total");

    container.innerHTML = "";
    total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.qty;

        container.innerHTML += `
            <div class="cart-item">
                <div>
                    <strong>${item.name}</strong>
                    ${item.size ? `<span> - المقاس: ${item.size}</span>` : ""}
                    <br>
                    <span>${item.price} ر.س</span>
                </div>

                <div class="actions">
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="decrease(${index})">-</button>
                        <span>${item.qty}</span>
                        <button class="qty-btn" onclick="increase(${index})">+</button>
                    </div>

                    <button class="remove-btn" onclick="removeItem(${index})">حذف</button>
                </div>
            </div>
        `;
    });

    totalBox.textContent = "الإجمالي: " + total + " ر.س";
    updateCartCount();
}

function increase(i) {
    cart[i].qty++;
    saveAndRender();
}

function decrease(i) {
    if (cart[i].qty > 1) cart[i].qty--;
    else cart.splice(i, 1);
    saveAndRender();
}

function removeItem(i) {
    cart.splice(i, 1);
    saveAndRender();
}

function clearCart() {
    cart = [];
    localStorage.removeItem("shoppingCart");
    renderCart();
}

function saveAndRender() {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
    renderCart();
}

function saveOrder(name, phone, cart, total) {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push({
        orderId: Date.now(),
        name,
        phone,
        items: cart,
        total
    });
    localStorage.setItem("orders", JSON.stringify(orders));
}

renderCart();
updateCartCount();

/* ================= VALIDATION ================= */

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

function showError(id, msg) {
    document.getElementById(id).classList.add("input-error");
    document.getElementById(id + "Error").textContent = msg;
}

function clearError(id) {
    document.getElementById(id).classList.remove("input-error");
    document.getElementById(id + "Error").textContent = "";
}

/* ================= REAL‑TIME VALIDATION ================= */

document.getElementById("name").addEventListener("input", function () {
    const error = validateName(this.value.trim());
    if (error) showError("name", error);
    else clearError("name");
});

document.getElementById("card").addEventListener("input", function () {
    const value = this.value.replace(/\s+/g, "");
    const error = validateCard(value);
    if (error) showError("card", error);
    else clearError("card");
});

document.getElementById("phone").addEventListener("input", function () {
    const error = validatePhone(this.value.trim());
    if (error) showError("phone", error);
    else clearError("phone");
});

/* ================= SUBMIT ================= */

document.getElementById("paymentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const card = document.getElementById("card").value.trim();
    const phone = document.getElementById("phone").value.trim();

    let valid = true;

    const nameError = validateName(name);
    const cardError = validateCard(card);
    const phoneError = validatePhone(phone);

    if (nameError) { showError("name", nameError); valid = false; }
    else clearError("name");

    if (cardError) { showError("card", cardError); valid = false; }
    else clearError("card");

    if (phoneError) { showError("phone", phoneError); valid = false; }
    else clearError("phone");

    if (!valid) return;

    saveOrder(name, phone, cart, total);
    clearCart();

    alert("تم الدفع بنجاح");
});
