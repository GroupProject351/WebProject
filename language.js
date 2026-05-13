let currentLang = localStorage.getItem("lang") || "ar";

const translations = {

  ar: {

    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_shop: "المتجر",
    nav_faq: "الأسئلة الشائعة",
    nav_return: "طلبات الاسترجاع",

    //FAQ
    faq_title: "الأسئلة الشائعة",

    q1: "التوصيل",
    q2: "الاسترجاع",
    q3: "طرق الدفع",

    a1: `
      <p><strong>كم مدة التوصيل؟</strong><br>
      مدة التوصيل من ٣ الى ٥ أيام عمل.</p>

      <p><strong>هل يتوفر شحن دولي؟</strong><br>
      حاليًا نشحن داخل المملكة العربية السعودية فقط.</p>
    `,

    a2: `
      <p><strong>متى يمكنني طلب الاسترجاع؟</strong><br>
      يتم رفع طلب الاسترجاع خلال ٧ أيام من الاستلام.</p>

      <p><strong>ماهي المنتجات المسموح باسترجاعها؟</strong><br>
      المنتجات المسموح باسترجاعها هي المنتجات الغير مستخدمة فقط.</p>

      <p><strong>كيف يمكنني استرجاع الأموال؟</strong><br>
      يتم استرجاع الأموال بنفس طريقة الدفع.</p>
    `,

    a3: `
      <p><strong>ماهي وسائل الدفع المتاحة؟</strong><br>
      مدى، فيزا، Apple Pay.</p>

      <p><strong>هل تتوفر خدمة الدفع عند الاستلام؟</strong><br>
      حاليًا الدفع متاح إلكترونيًا فقط لضمان سرعة معالجة الطلب.</p>

      <p><strong>ماذا أفعل إذا فشلت عملية الدفع؟</strong><br>
      يرجـى التأكد من رصيد البطاقة، وفي حال استمرار المشكلة تواصل مع دعمنا الفني.</p>
    `,
    
    // من نحن
    about_title: "من نحن",
    about_p1: "رونق براند سعودي متخصص في تصاميم الأزياء النسائية. في لغتنا العربية، \"الرونق\" هو حُسن الشيء وبهاؤه، وهو تمام النضارة والجمال من هنا استلهمنا اسمنا، ومن هذه الفلسفة صممنا كل قطعة في مجموعتنا لتناسب المرأة العربية التي لا ترضى إلا بالكمال والجمال.",
    about_p2: "نؤمن في رونق أن ملابسك هي مرآة لشخصيتك وان استدامة الجمال هي المطلب، لذا نحرص أن يكون رونقكِ دائماً في أبهى صورة ولهذا اخترنا أجود الأقمشة التي تحتفظ بزهوها وبريقها مهما طال الزمن. نسعى ان نكون الوجهة الأولى للمرأة العربية عن طريق توفير تصاميم راقية وجميلة.",
    about_slogan: "رونق.. أزياء تُحاكي بريقكِ الداخلي",


    //home
    home_title: "أزياء عصرية تجمع بين الأناقة والبساطة",
    home_shop_btn: "تسوقي الآن",


    //المتجر
    shop_title: "كل المنتجات",
    shop_subtitle: "اكتشفي تشكيلتنا المختارة بعناية لتناسب ذوقك الرفيع",
    filter_title: "تصفية حسب",
    filter_category: "الفئة",
    filter_size: "المقاس",
    clear_filters: "مسح الفلاتر",
    cat_coats: "معاطف",
    cat_acc: "أكسسوارات",
    cat_sets: "طقم قطعتين",
    size_label: "المقاس",
    add_to_cart: "إضافة للسلة",
    select_size: "اختر المقاس",
    tag_new: "جديد",
    price_curr: "ر.س",
    prod_name_1: "أساور يد",
    prod_name_2: "طقم رسمي كلاسيك",
    prod_name_3: "معطف أحمر",

    //الاسترجاع
    return_title_page: "طلبات الاسترجاع",
    policy_btn: "سياسة الاسترجاع",
    policy_list: `
      <ol>
        <li>يتم قبول الاسترجاع خلال 7 أيام من تاريخ الاستلام.</li>
        <li>يجب أن تكون المنتجات غير مستخدمة وبحالها الأصلية.</li>
        <li>يتم استرجاع المبلغ بنفس طريقة الدفع.</li>
      </ol>`,
    form_title_btn: "طلب الاسترجاع",
    lbl_name: "الاسم *",
    lbl_phone: "رقم الجوال *",
    lbl_order: "رقم الطلب *",
    lbl_reason: "اختر السبب *",
    opt_default: "-- اختر السبب --",
    opt_size: "مقاس غير مناسب",
    opt_damaged: "منتج تالف",
    opt_other: "أخرى",
    submit_btn: "إرسال",
    success_msg: "تم إرسال طلبك بنجاح",
    order_number: "سيظهر تلقائيًا",

    //الدفع
    payment_title: "إتمام الدفع",
    cart_contents: "محتويات السلة",
    clear_cart: "مسح السلة",
    payment_info: "أدخل بيانات الدفع",
    pay_now: "ادفع الآن",
    payment_methods: "طرق الدفع",
    lbl_pay_name: "الاسم *",
    lbl_pay_card: "رقم البطاقة *",
    lbl_pay_phone: "رقم الجوال *",
    payment_example_name: "مثال: لمياء عبدالله اليامي",
    payment_example_card: "مثال: 1234 5678 9012 3456",
    payment_example_phone: "مثال: 05X XXX XXXX",
    },

  en: {

    nav_home: "Home",
    nav_about: "About",
    nav_shop: "Shop",
    nav_faq: "FAQ",
    nav_return: "Returns",
    

    //FAQ
    faq_title: "Frequently Asked Questions",

    q1: "Shipping",
    q2: "Returns",
    q3: "Payment Methods",

    a1: `
      <p><strong>How long does shipping take?</strong><br>
      Shipping takes 3 to 5 business days.</p>

      <p><strong>Do you offer international shipping?</strong><br>
      Currently, we only ship within Saudi Arabia.</p>
    `,

    a2: `
      <p><strong>When can I request a return?</strong><br>
      Return requests are available within 7 days of receiving the order.</p>

      <p><strong>Which products can be returned?</strong><br>
      Only unused products can be returned.</p>

      <p><strong>How will I receive my refund?</strong><br>
      Refunds are issued using the original payment method.</p>
    `,

    a3: `
      <p><strong>What payment methods are available?</strong><br>
      Mada, Visa, and Apple Pay.</p>

      <p><strong>Is cash on delivery available?</strong><br>
      Currently, payment is available online only.</p>

      <p><strong>What should I do if payment fails?</strong><br>
      Please check your card balance or contact support.</p>
    `,

    //من نحن
    about_title: "About Us",
    about_p1: "Rawnaq is a Saudi brand specialized in women's fashion designs. In our Arabic language, 'Rawnaq' means the beauty and splendor of something. From here we inspired our name, and from this philosophy, we designed every piece in our collection to suit the Arab woman who only accepts perfection and beauty.",
    about_p2: "At Rawnaq, we believe that your clothes are a mirror of your personality and that the sustainability of beauty is the demand. Therefore, we ensure that your glamour is always at its best, and for this, we chose the finest fabrics that retain their brilliance over time.",
    about_slogan: "Rawnaq.. Fashion that mimics your inner glow",


    //home
    home_title: "Modern fashion combining elegance and simplicity",
    home_shop_btn: "Shop Now",

    //المتجر
    shop_title: "All Products",
    shop_subtitle: "Discover our carefully selected collection to suit your high taste",
    filter_title: "Filter By",
    filter_category: "Category",
    filter_size: "Size",
    clear_filters: "Clear Filters",
    cat_coats: "Coats",
    cat_acc: "Accessories",
    cat_sets: "Two-piece Sets",
    size_label: "Size",
    add_to_cart: "Add to Cart",
    select_size: "Select Size",
    tag_new: "New",
    price_curr: "SAR",
    prod_name_1: "Hand Bracelets",
    prod_name_2: "Classic Formal Set",
    prod_name_3: "Red Coat",


    //الاسترجاع
    return_title_page: "Return Requests",
    policy_btn: "Return Policy",
    policy_list: `
      <ol>
        <li>Returns are accepted within 7 days of receipt.</li>
        <li>Products must be unused and in their original condition.</li>
        <li>Refunds are processed using the original payment method.</li>
      </ol>`,
    form_title_btn: "Return Request Form",
    lbl_name: "Name *",
    lbl_phone: "Phone Number *",
    lbl_order: "Order Number *",
    lbl_reason: "Select Reason *",
    opt_default: "-- Select Reason --",
    opt_size: "Size not suitable",
    opt_damaged: "Damaged product",
    opt_other: "Other",
    submit_btn: "Submit",
    success_msg: "Your request has been sent successfully",
    order_number: "It will appear automatically.",

    //الدفع
    payment_title: "Checkout",
    cart_contents: "Shopping Cart Items",
    clear_cart: "Clear Cart",
    payment_info: "Enter Payment Details",
    pay_now: "Pay Now",
    payment_methods: "Payment Methods",
    lbl_pay_name: "Name *",
    lbl_pay_card: "Card Number *",
    lbl_pay_phone: "Phone Number *",
    payment_example_name: "Example: Lamya Abdullah",
    payment_example_card: "Example: 1234 5678 9012 3456",
    payment_example_phone: "Example: 05XXXXXXXX",
    }
};

function applyLanguage(lang) {

  document.documentElement.lang = lang;

  document.documentElement.dir =
    lang === "ar" ? "rtl" : "ltr";

  
  
    //navbar
  if (document.getElementById("nav_home")) {  
   document.getElementById("nav_home").textContent =
    translations[lang].nav_home;

   document.getElementById("nav_about").textContent =
    translations[lang].nav_about;

   document.getElementById("nav_shop").textContent =
    translations[lang].nav_shop;

   document.getElementById("nav_faq").textContent =
    translations[lang].nav_faq;

   document.getElementById("nav_return").textContent =
    translations[lang].nav_return;
  }

 
  
    // Footer Return 
  if (document.getElementById("footer_return")) {
    document.getElementById("footer_return").textContent = 
    translations[lang].nav_return;
  }

  
  
  //FAQ
  if (document.getElementById("FAQ_title")) {
  document.getElementById("FAQ_title").textContent =
    translations[lang].faq_title;

  document.getElementById("btn_q1").textContent =
    translations[lang].q1;

  document.getElementById("btn_q2").textContent =
    translations[lang].q2;

  document.getElementById("btn_q3").textContent =
    translations[lang].q3;

  document.getElementById("txt_a1").innerHTML =
    translations[lang].a1;

  document.getElementById("txt_a2").innerHTML =
    translations[lang].a2;

  document.getElementById("txt_a3").innerHTML =
    translations[lang].a3;
  }
  
  
  //About
  if (document.getElementById("about_main_title")) {
  document.getElementById("about_main_title").textContent =
    translations[lang].about_title;

  document.getElementById("about_description1").textContent = 
    translations[lang].about_p1;

  document.getElementById("about_description2").textContent = 
    translations[lang].about_p2;

  document.getElementById("about_slogan_text").textContent = 
    translations[lang].about_slogan;
  }
  localStorage.setItem("lang", lang);

  //home
  if (document.getElementById("home_title")) {
    document.getElementById("home_title").textContent = 
     translations[lang].home_title;
  }

  // ترجمة زر تسوقي الآن
  if (document.getElementById("home_shop_btn")) {
    document.getElementById("home_shop_btn").textContent = 
     translations[lang].home_shop_btn;
  }

  //المتجر
  if (document.getElementById("shop_title")) {
    document.getElementById("shop_title").textContent =
     translations[lang].shop_title;
    document.getElementById("shop_subtitle").textContent =
     translations[lang].shop_subtitle;
    document.getElementById("filter_title").textContent =
     translations[lang].filter_title;
    document.getElementById("filter_category").textContent =
     translations[lang].filter_category;
    document.getElementById("filter_size").textContent =
     translations[lang].filter_size;
    document.getElementById("clearFilters").textContent =
     translations[lang].clear_filters;

    if(document.getElementById("tag_new")) {
      document.getElementById("tag_new").textContent =
       translations[lang].tag_new;
    }

    document.querySelectorAll("#select_size_text").forEach(el => {
      el.textContent = translations[lang].select_size;
    });

     // ترجمة أسماء الفئات (Categories)
    if(document.getElementById("cat_coats")) {
      document.getElementById("cat_coats").textContent =
       translations[lang].cat_coats;
    }
    if(document.getElementById("cat_acc")) {
      document.getElementById("cat_acc").textContent =
       translations[lang].cat_acc;
    }
    if(document.getElementById("cat_sets")) {
      document.getElementById("cat_sets").textContent =
       translations[lang].cat_sets;
    }

    // ترجمة المنتج الأول
    if (document.getElementById("prod_name_1")) {
      document.getElementById("prod_name_1").textContent =
       translations[lang].prod_name_1;
      document.getElementById("add_to_cart_1").textContent =
       translations[lang].add_to_cart;
      document.getElementById("currency_1").textContent =
       translations[lang].price_curr;
    }

    // ترجمة المنتج الثاني
    if (document.getElementById("prod_name_2")) {
      document.getElementById("prod_name_2").textContent =
       translations[lang].prod_name_2;
      document.getElementById("add_to_cart_2").textContent =
       translations[lang].add_to_cart;
      document.getElementById("currency_2").textContent =
       translations[lang].price_curr;
    }

    // ترجمة المنتج الثالث
    if (document.getElementById("prod_name_3")) {
      document.getElementById("prod_name_3").textContent =
       translations[lang].prod_name_3;
      document.getElementById("add_to_cart_3").textContent =
       translations[lang].add_to_cart;
      document.getElementById("currency_3").textContent =
       translations[lang].price_curr;
    }
  }

  // ترجمة صفحة الاسترجاع
  if (document.getElementById("return_title")) {
    document.getElementById("return_title").textContent =
     translations[lang].return_title_page;
    document.getElementById("policy_btn").textContent =
     translations[lang].policy_btn;
    document.getElementById("policy_content").innerHTML =
     translations[lang].policy_list;
    document.getElementById("form_title_btn").textContent =
     translations[lang].form_title_btn;
    document.getElementById("orderNumber").placeholder =
     translations[lang].order_number; 
    
    // ترجمة مسميات الحقول (Labels)
    if(document.getElementById("lbl_name")) document.getElementById("lbl_name").textContent =
     translations[lang].lbl_name;
    if(document.getElementById("lbl_phone")) document.getElementById("lbl_phone").textContent =
     translations[lang].lbl_phone;
    if(document.getElementById("lbl_order")) document.getElementById("lbl_order").textContent =
     translations[lang].lbl_order;
    if(document.getElementById("lbl_reason")) document.getElementById("lbl_reason").textContent =
     translations[lang].lbl_reason;

    // ترجمة خيارات القائمة المنسدلة
    if(document.getElementById("opt_default")) document.getElementById("opt_default").textContent =
     translations[lang].opt_default;
    if(document.getElementById("opt_size")) document.getElementById("opt_size").textContent =
     translations[lang].opt_size;
    if(document.getElementById("opt_damaged")) document.getElementById("opt_damaged").textContent =
     translations[lang].opt_damaged;
    if(document.getElementById("opt_other")) document.getElementById("opt_other").textContent =
     translations[lang].opt_other;

    // ترجمة الزر ورسالة النجاح
    document.getElementById("submit_btn").textContent =
     translations[lang].submit_btn;
    document.getElementById("successMsg").textContent =
     translations[lang].success_msg;
  }

   // ترجمة صفحة الدفع
  if (document.getElementById("payment_title")) {
    document.getElementById("payment_title").textContent =
     translations[lang].payment_title;
    document.getElementById("cart_contents_title").textContent =
     translations[lang].cart_contents;
    document.getElementById("clear_cart_btn").textContent =
     translations[lang].clear_cart;
    document.getElementById("payment_info_title").textContent =
     translations[lang].payment_info;
    document.getElementById("pay_now_btn").textContent =
     translations[lang].pay_now;
    document.getElementById("payment_methods_title").textContent =
     translations[lang].payment_methods;
     
     if (document.getElementById("example_1")) {
    document.getElementById("example_1").textContent =
     translations[lang].payment_example_name;
    }
    if (document.getElementById("example_2")) {
    document.getElementById("example_2").textContent =
     translations[lang].payment_example_card;
    }
    if (document.getElementById("example_3")) {
    document.getElementById("example_3").textContent =
     translations[lang].payment_example_phone;
    }

    // ترجمة مسميات الحقول
    document.getElementById("lbl_pay_name").textContent =
     translations[lang].lbl_name; 
    document.getElementById("lbl_pay_card").textContent =
     translations[lang].lbl_pay_card;
    document.getElementById("lbl_pay_phone").textContent =
     translations[lang].lbl_phone; 
  }  

}

function toggleLanguage() {

  currentLang =
    currentLang === "ar" ? "en" : "ar";

  applyLanguage(currentLang);
}

applyLanguage(currentLang);