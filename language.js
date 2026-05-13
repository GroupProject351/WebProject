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
    }
};

function applyLanguage(lang) {

  document.documentElement.lang = lang;

  document.documentElement.dir =
    lang === "ar" ? "rtl" : "ltr";

  
  
    //navbar
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
      document.getElementById("prod_name_1").textContent = translations[lang].prod_name_1;
      document.getElementById("add_to_cart_1").textContent = translations[lang].add_to_cart;
      document.getElementById("currency_1").textContent = translations[lang].price_curr;
    }

    // ترجمة المنتج الثاني
    if (document.getElementById("prod_name_2")) {
      document.getElementById("prod_name_2").textContent = translations[lang].prod_name_2;
      document.getElementById("add_to_cart_2").textContent = translations[lang].add_to_cart;
      document.getElementById("currency_2").textContent = translations[lang].price_curr;
    }

    // ترجمة المنتج الثالث
    if (document.getElementById("prod_name_3")) {
      document.getElementById("prod_name_3").textContent = translations[lang].prod_name_3;
      document.getElementById("add_to_cart_3").textContent = translations[lang].add_to_cart;
      document.getElementById("currency_3").textContent = translations[lang].price_curr;
    }
  }

  
}

function toggleLanguage() {

  currentLang =
    currentLang === "ar" ? "en" : "ar";

  applyLanguage(currentLang);
}

applyLanguage(currentLang);