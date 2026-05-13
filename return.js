// تحديث عدّاد السلة
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    let count = 0;

    cart.forEach(item => count += item.qty);

    const badge = document.getElementById("cartCount");
    if (badge) badge.textContent = count;
}
updateCartCount();

// فتح وإغلاق البوكسات
document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('.question');

    buttons.forEach(button => {
        button.addEventListener('click', function() {

            const answer = this.nextElementSibling;

            document.querySelectorAll('.answer').forEach(otherAnswer => {
                if (otherAnswer !== answer) {
                    otherAnswer.classList.remove('show');
                }
            });

            answer.classList.toggle('show');
        });
    });
});

// التحقق من الاسم
function validateName(name) {
    if (!name) return "الاسم مطلوب";
    if (name.length < 3) return "الاسم يجب أن يكون 3 أحرف على الأقل";
    return "";
}

// التحقق من رقم الجوال
function validatePhone(phone) {
    if (!phone) return "رقم الجوال مطلوب";
    if (!/^05[0-9]{8}$/.test(phone)) return "رقم الجوال يجب أن يبدأ بـ 05 ويتكون من 10 أرقام";
    return "";
}

// عرض رسالة خطأ
function showError(id, message) {
    document.getElementById(id).classList.add("input-error");
    document.getElementById(id + "Error").textContent = message;
}

function clearError(id) {
    document.getElementById(id).classList.remove("input-error");
    document.getElementById(id + "Error").textContent = "";
}

// جلب الطلبات من localStorage
function getOrdersByPhone(phone) {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    return orders.filter(order => order.phone === phone);
}

// تنظيف الاسم
function normalize(str) {
    return str
        .replace(/\s+/g, "")
        .replace(/أ|إ|آ/g, "ا")
        .replace(/ة/g, "ه")
        .replace(/ى/g, "ي")
        .trim()
        .toLowerCase();
}

// عند إدخال رقم الجوال
document.getElementById("phone").addEventListener("blur", function () {

    const phone = this.value.trim();
    const error = validatePhone(phone);

    if (error) {
        showError("phone", error);
        document.getElementById("orderNumber").value = "";
        return;
    }

    clearError("phone");

    const userOrders = getOrdersByPhone(phone);

    if (userOrders.length > 0) {
        const ids = userOrders.map(o => o.orderId);
        document.getElementById("orderNumber").value = ids.join(", ");
    } else {
        document.getElementById("orderNumber").value = "لا توجد طلبات مسجلة";
    }
});

// إرسال الطلب
document.getElementById("returnForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();

    const nameError = validateName(name);
    const phoneError = validatePhone(phone);

    let valid = true;

    if (nameError) { showError("name", nameError); valid = false; }
    else clearError("name");

    if (phoneError) { showError("phone", phoneError); valid = false; }
    else clearError("phone");

    if (!valid) return;

    const userOrders = getOrdersByPhone(phone);

    if (userOrders.length === 0) {
        alert("لا يوجد سجل طلبات برقم الجوال هذا");
        return;
    }

    const matchedOrder = userOrders.find(order => normalize(order.name) === normalize(name));

    if (!matchedOrder) {
        alert("الاسم لا يطابق رقم الجوال المسجل في الطلبات");
        return;
    }

    alert("تم إرسال طلب الاسترجاع بنجاح");
});