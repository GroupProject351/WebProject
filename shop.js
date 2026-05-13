// 1. إعداد السلة وتحديث العداد
let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

// تحديث عداد السلة في الهيدر
function updateCartCount() {
    const cartCountElement = document.getElementById("cartCount");
    if (cartCountElement) {
        const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
        cartCountElement.innerText = totalItems;
    }
}
updateCartCount();

// 2. الدالة الأساسية للإضافة للسلة مع فحص المخزون
function addToCart(id, name, price, size) {
    
    // تحديد سقف المخزون (مثلاً 5 قطع كحد أقصى لكل منتج/مقاس)
    const MAX_STOCK = 5; 

    // منع الإضافة للملابس إذا لم يتم اختيار مقاس
    if (size === "" || size === "undefined" || size === null) {
        alert("يرجى اختيار المقاس أولاً لقطع الملابس ⚠️");
        return;
    }

    // البحث عن المنتج في السلة بناءً على المعرف والمقاس
    const item = cart.find(p => p.productId === id && p.size === size);

    if (item) {
        // فحص المخزون قبل الزيادة
        if (item.qty >= MAX_STOCK) {
            alert(`عذراً، هذا هو الحد الأقصى للطلب الواحد (${MAX_STOCK} قطع فقط) ❌`);
            return; 
        }
        item.qty++;
    } else {
        // إضافة المنتج كقطعة جديدة إذا لم يكن موجوداً بالسلة
        cart.push({
            productId: id,
            name: name,
            price: price,
            size: size, // "حجم واحد" للأساور أو المقاس المختار للملابس
            qty: 1
        });
    }

    // حفظ البيانات وتحديث الواجهة
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
    updateCartCount();
    alert(`تمت إضافة ${name} للسلة بنجاح 🛒`);
}

// 3. تفعيل زر الملابس عند اختيار مقاس
function enableAdd(select) {
    let btn = select.parentElement.querySelector(".add-to-cart-btn");
    if (btn) btn.disabled = (select.value === "");
}

// 4. نظام الفلترة (الأساور لا تظهر إلا في "حجم واحد" أو عند مسح الفلتر)
const categoryFilters = document.querySelectorAll('.filter-category');
const sizeFilters = document.querySelectorAll('.filter-size');
const products = document.querySelectorAll('.product-card');

function filterProducts() {
    const selectedCategories = Array.from(categoryFilters).filter(i => i.checked).map(i => i.value);
    const selectedSizes = Array.from(sizeFilters).filter(i => i.checked).map(i => i.value);

    products.forEach(product => {
        const cat = product.getAttribute('data-category');
        const sizesAttr = product.getAttribute('data-sizes') || "";
        const productSizes = sizesAttr.split(',');

        const catMatch = selectedCategories.length === 0 || selectedCategories.includes(cat);
        
        let sizeMatch = false;
        if (selectedSizes.length === 0) {
            sizeMatch = true; // إظهار الكل إذا لم يتم اختيار فلتر
        } else {
            // مطابقة المقاس بدقة (الأساور تظهر فقط إذا اختير "حجم واحد")
            sizeMatch = selectedSizes.some(s => productSizes.includes(s));
        }

        product.style.display = (catMatch && sizeMatch) ? "block" : "none";
    });
}

// 5. زر مسح الفلاتر وإعادة الضبط البصري
document.getElementById('clearFilters')?.addEventListener('click', () => {
    categoryFilters.forEach(f => f.checked = false);
    sizeFilters.forEach(f => {
        f.checked = false;
        if (f.nextElementSibling) {
            f.nextElementSibling.style.backgroundColor = "transparent";
            f.nextElementSibling.style.color = "#333";
        }
    });
    products.forEach(p => p.style.display = "block");
});

// ربط أحداث التغيير
categoryFilters.forEach(f => f.addEventListener('change', filterProducts));
sizeFilters.forEach(f => {
    f.addEventListener('change', function() {
        filterProducts();
        if (this.nextElementSibling) {
            this.nextElementSibling.style.backgroundColor = this.checked ? "#7a2021" : "transparent";
            this.nextElementSibling.style.color = this.checked ? "white" : "#333";
        }
    });
});