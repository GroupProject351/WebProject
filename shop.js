// ===============================
// 1. تحميل السلة من LocalStorage
// ===============================
let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

// ===============================
// 2. تحديث شكل الزر (بصرياً فقط)
// ===============================
function enableAdd(select) {
    // نجد الزر الذي يتبع قائمة المقاسات مباشرة
    let btn = select.nextElementSibling;
    
    if (select.value !== "") {
        btn.style.opacity = "1";
        btn.style.cursor = "pointer";
    } else {
        btn.style.opacity = "0.3";
        btn.style.cursor = "default";
    }
    // ملاحظة: لم نضع btn.disabled = true لكي نتمكن من إظهار رسالة التنبيه عند الضغط
}

// ===============================
// 3. إضافة منتج للسلة مع التحقق من المقاس
// ===============================
function addToCart(id, name, price, size = null) {
    
    // التحقق: إذا كان المنتج يتطلب مقاساً (ليس أساور رقم 1) والمقاس الممرر فارغ
    if (id !== 1 && (size === "" || size === null || size === "null" || size === undefined)) { 
        alert("يرجى اختيار المقاس أولاً ⚠️");
        return; // التوقف وعدم الإضافة للسلة
    }

    const item = cart.find(p => p.productId === id && p.size === size);

    if (item) {
        item.qty++;
    } else {
        cart.push({
            productId: id,
            name: name,
            price: price,
            size: size || "حجم واحد",
            qty: 1
        });
    }

    localStorage.setItem("shoppingCart", JSON.stringify(cart));
    alert(`تمت إضافة (${name}) للسلة بنجاح 🛒`);
}

// ===============================
// 4. نظام الفلترة (Filtering System)
// ===============================
const categoryFilters = document.querySelectorAll('.filter-category');
const sizeFilters = document.querySelectorAll('.filter-size');
const products = document.querySelectorAll('.product-card');

function filterProducts() {
    const selectedCategories = Array.from(categoryFilters).filter(input => input.checked).map(input => input.value);
    const selectedSizes = Array.from(sizeFilters).filter(input => input.checked).map(input => input.value);

    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        const productSizes = product.getAttribute('data-sizes').split(',');

        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(productCategory);
        const sizeMatch = selectedSizes.length === 0 || selectedSizes.some(s => productSizes.includes(s));

        product.style.display = (categoryMatch && sizeMatch) ? "block" : "none";
    });
}

categoryFilters.forEach(filter => filter.addEventListener('change', filterProducts));
sizeFilters.forEach(filter => filter.addEventListener('change', filterProducts));

// تلوين مربعات المقاسات في الفلتر
sizeFilters.forEach(input => {
    input.addEventListener('change', function() {
        if (this.checked) {
            this.nextElementSibling.style.backgroundColor = "#7a2021";
            this.nextElementSibling.style.color = "white";
        } else {
            this.nextElementSibling.style.backgroundColor = "transparent";
            this.nextElementSibling.style.color = "#333";
        }
    });
});

// مسح الفلاتر
document.getElementById('clearFilters').addEventListener('click', function() {
    categoryFilters.forEach(filter => filter.checked = false);
    sizeFilters.forEach(filter => {
        filter.checked = false;
        filter.nextElementSibling.style.backgroundColor = "transparent";
        filter.nextElementSibling.style.color = "#333";
    });
    products.forEach(product => product.style.display = "block");
});