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


// ===============================
// فتح/إغلاق البوكسات
// ===============================
document.addEventListener("DOMContentLoaded", () => {

    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        const title = box.querySelector("h2");

        title.addEventListener("click", () => {

            boxes.forEach(b => {
                if (b !== box) b.classList.remove("open");
            });

            box.classList.toggle("open");
        });
    });
});


// ===============================
// التحقق من الاسم
// ===============================
function validateName(name) {
    if (!name) return "الاسم مطلوب";
    if (name.length < 3) return "الاسم يجب أن يكون 3 أحرف على الأقل";
    return "";
}


// ===============================
// التحقق من رقم الجوال
// ===============================
function validatePhone(phone) {
    if (!phone) return "رقم الجوال مطلوب";
    if (!/^05[0-9]{8}$/.test(phone)) return "رقم الجوال يجب أن يبدأ بـ 05 ويتكون من 10 أرقام";
    return "";
}


// ===============================
// عرض رسالة خطأ
// ===============================
function showError(id, message) {
    document.getElementById(id).classList.add("input-error");
    document.getElementById(id + "Error").textContent = message;
}

function clearError(id) {
    document.getElementById(id).classList.remove("input-error");
    document.getElementById(id + "Error").textContent = "";
}


// ===============================
// جلب الطلبات الحقيقية من localStorage
// ===============================
function getOrdersByPhone(phone) {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    return orders.filter(order => order.phone === phone);
}


// ===============================
// دالة تنظيف الاسم للمقارنة الذكية
// ===============================
function normalize(str) {
    return str
        .replace(/\s+/g, "")        // إزالة كل المسافات
        .replace(/أ|إ|آ/g, "ا")     // توحيد الهمزات
        .replace(/ة/g, "ه")         // تحويل ة إلى ه
        .replace(/ى/g, "ي")         // تحويل ى إلى ي
        .trim()
        .toLowerCase();
}


// ===============================
// عند إدخال رقم الجوال → نعرض رقم الطلب
// ===============================
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


// ===============================
// إرسال طلب الاسترجاع
// ===============================
document.querySelector("form").addEventListener("submit", function (e) {
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

    // جلب الطلبات حسب رقم الجوال
    const userOrders = getOrdersByPhone(phone);

    // لو ما فيه طلبات لهذا الرقم
    if (userOrders.length === 0) {
        alert("لا يوجد سجل طلبات برقم الجوال هذا");
        return;
    }

    // التحقق الذكي من تطابق الاسم
    const matchedOrder = userOrders.find(order => normalize(order.name) === normalize(name));

    if (!matchedOrder) {
        alert("الاسم لا يطابق رقم الجوال المسجل في الطلبات");
        return;
    }

    // لو كل شيء صحيح
    alert("تم إرسال طلب الاسترجاع بنجاح");
});