/* =====================================================
   NOOSH-AYIN
   CATEGORY PAGE
===================================================== */

document.addEventListener("DOMContentLoaded", () => {


  /* ================= PRODUCT DATA ================= */

  /*
    فعلاً محصولات واقعی را اینجا وارد نمی‌کنیم.
    ساختار آماده است و اطلاعات ۴۷ محصول
    در مرحله بعد وارد همین بخش می‌شوند.
  */

  window.products = {

    oils: [

      {
        id: "mini-pistachio-oil",
        name: "مینی روغن پسته کاژان",
        price: 1465000,
        stock: 1250,
        category: "روغن‌ها",
        icon: "🫒"
      },

      {
        id: "hazelnut-oil",
        name: "روغن فندق کاژان",
        price: 1100000,
        stock: 1019,
        category: "روغن‌ها",
        icon: "🌰"
      },

      {
        id: "pumpkin-oil",
        name: "روغن تخمه کدو کاژان",
        price: 860000,
        stock: 1394,
        category: "روغن‌ها",
        icon: "🎃"
      },

      {
        id: "flax-oil",
        name: "روغن تخم کتان کاژان",
        price: 730000,
        stock: 1124,
        category: "روغن‌ها",
        icon: "🌿"
      },

      {
        id: "walnut-oil",
        name: "روغن گردو کاژان",
        price: 671000,
        stock: 361,
        category: "روغن‌ها",
        icon: "🌰"
      },

      {
        id: "mini-hazelnut-oil",
        name: "مینی روغن فندق کاژان",
        price: 330000,
        stock: 633,
        category: "روغن‌ها",
        icon: "🌰"
      },

      {
        id: "mini-pumpkin-oil",
        name: "مینی روغن تخمه کدو کاژان",
        price: 257000,
        stock: 431,
        category: "روغن‌ها",
        icon: "🎃"
      },

      {
        id: "mini-flax-oil",
        name: "مینی روغن کتان کاژان",
        price: 220000,
        stock: 21,
        category: "روغن‌ها",
        icon: "🌿"
      },

      {
        id: "mini-walnut-oil",
        name: "مینی روغن گردو کاژان",
        price: 202000,
        stock: 371,
        category: "روغن‌ها",
        icon: "🌰"
      },

      {
        id: "sweet-almond-oil",
        name: "روغن بادام شیرین کاژان",
        price: 980000,
        stock: 0,
        category: "روغن‌ها",
        icon: "🌿"
      },

      {
        id: "mini-sweet-almond-oil",
        name: "مینی روغن بادام شیرین کاژان",
        price: 293000,
        stock: 0,
        category: "روغن‌ها",
        icon: "🌿"
      }

    ],


    tea: [

      {
        id: "black-tea-20",
        name: "چای سیاه خالص (۲۰ عددی)",
        price: 162000,
        stock: 513,
        category: "چای و دمنوش",
        icon: "🍵"
      },

      {
        id: "black-tea-25",
        name: "چای سیاه خالص (۲۵ عددی)",
        price: 175000,
        stock: 667,
        category: "چای و دمنوش",
        icon: "🍵"
      },

      {
        id: "green-tea-20",
        name: "چای سبز (۲۰ عددی)",
        price: 230000,
        stock: 1978,
        category: "چای و دمنوش",
        icon: "🍃"
      },

      {
        id: "special-black-tea-230",
        name: "چای سیاه ویژه",
        price: 230000,
        stock: 775,
        category: "چای و دمنوش",
        icon: "🍵"
      },

      {
        id: "premium-tea",
        name: "چای ممتاز قلمی",
        price: 450000,
        stock: 285,
        category: "چای و دمنوش",
        icon: "🍵"
      },

      {
        id: "iranian-tea",
        name: "چای اصیل ایرانی",
        price: 560000,
        stock: 381,
        category: "چای و دمنوش",
        icon: "🍃"
      },

      {
        id: "economic-tea",
        name: "چای اقتصادی چوبدار (۱۰۰۰ گرمی)",
        price: 675000,
        stock: 351,
        category: "چای و دمنوش",
        icon: "🍵"
      },

      {
        id: "special-black-tea-1120",
        name: "چای سیاه ویژه",
        price: 1120000,
        stock: 703,
        category: "چای و دمنوش",
        icon: "🍵"
      },

      {
        id: "white-tea",
        name: "چای سفید",
        price: 1800000,
        stock: 730,
        category: "چای و دمنوش",
        icon: "🍃"
      },

      {
        id: "black-tea-160",
        name: "چای سیاه خالص (۱۶۰ عددی)",
        price: 1400000,
        stock: 539,
        category: "چای و دمنوش",
        icon: "🍵"
      },

      {
        id: "quince-infusion",
        name: "دمنوش به",
        price: 250000,
        stock: 612,
        category: "چای و دمنوش",
        icon: "🌿"
      },

      {
        id: "cumin-infusion",
        name: "دمنوش زیره سبز",
        price: 240000,
        stock: 1688,
        category: "چای و دمنوش",
        icon: "🌿"
      },

      {
        id: "thyme-infusion",
        name: "دمنوش آویشن",
        price: 240000,
        stock: 1066,
        category: "چای و دمنوش",
        icon: "🌿"
      },

      {
        id: "mountain-pepper",
        name: "دمنوش فلفل کوهی",
        price: 240000,
        stock: 1070,
        category: "چای و دمنوش",
        icon: "🌿"
      },

      {
        id: "rosemary",
        name: "دمنوش رزماری",
        price: 240000,
        stock: 1402,
        category: "چای و دمنوش",
        icon: "🌿"
      },

      {
        id: "chicory",
        name: "دمنوش کاسنی",
        price: 250000,
        stock: 1657,
        category: "چای و دمنوش",
        icon: "🌿"
      },

      {
        id: "cinnamon",
        name: "دارچین",
        price: 250000,
        stock: 548,
        category: "چای و دمنوش",
        icon: "🌿"
      },

      {
        id: "peppermint",
        name: "دمنوش نعناع فلفلی",
        price: 260000,
        stock: 725,
        category: "چای و دمنوش",
        icon: "🌿"
      },

      {
        id: "sage",
        name: "دمنوش مریم‌گلی",
        price: 260000,
        stock: 1008,
        category: "چای و دمنوش",
        icon: "🌿"
      },

      {
        id: "yarrow",
        name: "دمنوش بومادران",
        price: 260000,
        stock: 429,
        category: "چای و دمنوش",
        icon: "🌿"
      },

      {
        id: "hibiscus",
        name: "چای ترش",
        price: 290000,
        stock: 1705,
        category: "چای و دمنوش",
        icon: "🌺"
      },

      {
        id: "chamomile",
        name: "دمنوش بابونه",
        price: 290000,
        stock: 188,
        category: "چای و دمنوش",
        icon: "🌼"
      },

      {
        id: "lemon-verbena",
        name: "دمنوش به‌لیمو",
        price: 310000,
        stock: 1677,
        category: "چای و دمنوش",
        icon: "🌿"
      },

      {
        id: "aloe-blossom",
        name: "دمنوش شکوفه آلوئه‌ورا",
        price: 330000,
        stock: 1026,
        category: "چای و دمنوش",
        icon: "🌼"
      },

      {
        id: "lavender",
        name: "دمنوش اسطوخودوس",
        price: 330000,
        stock: 1114,
        category: "چای و دمنوش",
        icon: "💜"
      },

      {
        id: "borage",
        name: "دمنوش گل گاوزبان",
        price: 360000,
        stock: 882,
        category: "چای و دمنوش",
        icon: "🌿"
      },

      {
        id: "quince-seed",
        name: "بهدانه",
        price: 480000,
        stock: 897,
        category: "چای و دمنوش",
        icon: "🌿"
      }

    ],


    coffee: [

      {
        id: "instant-coffee",
        name: "قهوه فوری",
        price: 420000,
        stock: 728,
        category: "پودر قهوه و شکلات",
        icon: "☕"
      },

      {
        id: "cappuccino-12",
        name: "کاپوچینو (۱۲ عددی)",
        price: 950000,
        stock: 311,
        category: "پودر قهوه و شکلات",
        icon: "☕"
      },

      {
        id: "classic-hot-chocolate",
        name: "هات چاکلت کلاسیک",
        price: 1300000,
        stock: 351,
        category: "پودر قهوه و شکلات",
        icon: "🍫"
      },

      {
        id: "coffee-mix-2in1",
        name: "کافی میکس ۲ در ۱ بدون شکر",
        price: 1360000,
        stock: 229,
        category: "پودر قهوه و شکلات",
        icon: "☕"
      },

      {
        id: "coffee-mix-exclusive",
        name: "کافی میکس اکسکلوسیو",
        price: 1420000,
        stock: 492,
        category: "پودر قهوه و شکلات",
        icon: "☕"
      },

      {
        id: "dark-hot-chocolate",
        name: "هات چاکلت دارک",
        price: 1480000,
        stock: 276,
        category: "پودر قهوه و شکلات",
        icon: "🍫"
      },

      {
        id: "granulated-instant-coffee",
        name: "قهوه فوری گرانوله",
        price: 1540000,
        stock: 504,
        category: "پودر قهوه و شکلات",
        icon: "☕"
      }

    ],


    featured: [

      {
        id: "mini-weight-pack",
        name: "مینی پکیج لاغری",
        price: 3500000,
        stock: null,
        category: "محصولات منتخب",
        icon: "🌿"
      },

      {
        id: "complete-weight-pack",
        name: "پکیج کامل لاغری",
        price: 5000000,
        stock: null,
        category: "محصولات منتخب",
        icon: "🌿"
      }

    ]

  };


  /* ================= CATEGORY INFO ================= */

  const categoryInfo = {

    oils: {
      title: "روغن‌های طبیعی",
      highlight: "روغن‌ها",
      description:
        "مجموعه‌ای از روغن‌های طبیعی در اندازه‌ها و انواع مختلف.",
      count: "۱۱ محصول"
    },

    tea: {
      title: "چای و دمنوش",
      highlight: "چای و دمنوش",
      description:
        "چای‌های متنوع و دمنوش‌های گیاهی و طبیعی نوش‌آیین.",
      count: "۲۷ محصول"
    },

    coffee: {
      title: "پودر قهوه و شکلات",
      highlight: "قهوه و شکلات",
      description:
        "مجموعه‌ای از قهوه فوری، کافی‌میکس و نوشیدنی‌های شکلاتی.",
      count: "۷ محصول"
    },

    featured: {
      title: "محصولات منتخب",
      highlight: "منتخب",
      description:
        "انتخاب ویژه نوش‌آیین از میان محصولات مجموعه.",
      count: "۲ محصول"
    }

  };


  /* ================= GET CATEGORY ================= */

  const params =
    new URLSearchParams(window.location.search);

  const category =
    params.get("category") || "oils";


  const info =
    categoryInfo[category] || categoryInfo.oils;


  const categoryProducts =
    products[category] || [];


  /* ================= ELEMENTS ================= */

  const titleElement =
    document.getElementById("categoryTitle");

  const descriptionElement =
    document.getElementById("categoryDescription");

  const countElement =
    document.getElementById("categoryCount");

  const breadcrumbElement =
    document.getElementById("breadcrumbCategory");

  const productsCountElement =
    document.getElementById("productsCount");

  const grid =
    document.getElementById("productsGrid");
     /* ================= CATEGORY PAGE CHECK ================= */

  if (
    !titleElement ||
    !descriptionElement ||
    !countElement ||
    !breadcrumbElement ||
    !productsCountElement ||
    !grid
  ) {
    return;
  }


  /* ================= HEADER DATA ================= */

  titleElement.innerHTML =
    `${info.title.split(" ").slice(0, -1).join(" ")}
    <span>${info.title.split(" ").slice(-1)}</span>`;


  descriptionElement.textContent =
    info.description;


  countElement.textContent =
    info.count;


  breadcrumbElement.textContent =
    info.title;


  productsCountElement.textContent =
    `${categoryProducts.length.toLocaleString("fa-IR")} محصول`;


  /* ================= PRICE ================= */

  function formatPrice(price) {

    return Number(price)
      .toLocaleString("fa-IR") +
      " تومان";

  }


  /* ================= STOCK ================= */

  function stockText(stock) {

    if (stock === 0) {
      return "ناموجود";
    }

    if (stock === null) {
      return "موجودی به‌زودی";
    }

    return "موجود";

  }


  /* ================= RENDER PRODUCTS ================= */

  function renderProducts() {

    grid.innerHTML = "";


    if (categoryProducts.length === 0) {

      grid.innerHTML = `

        <div class="category-empty">

          <div class="category-empty-icon">
            🌿
          </div>

          <h2>
            محصولی پیدا نشد
          </h2>

          <p>
            در این دسته هنوز محصولی ثبت نشده است.
          </p>

        </div>

      `;

      return;

    }


    categoryProducts.forEach(product => {

      const card =
        document.createElement("article");

      card.className =
        "product-card";


      const unavailable =
        product.stock === 0;


      card.innerHTML = `
      <div class="product-image">

  <img
    src="./images/${product.id}.jpg"
    alt="${product.name}"
    class="product-real-image"
    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
  >

  <div
    class="product-image-placeholder"
    style="display:none;"
  >
    ${product.icon}
  </div>

</div>



        <div class="product-info">

          <div class="product-category">
            ${product.category}
          </div>

          <h3 class="product-name">
            ${product.name}
          </h3>


          <div class="product-meta">

            <strong class="product-price">
              ${formatPrice(product.price)}
            </strong>

            <span class="product-stock">
              ${stockText(product.stock)}
            </span>

          </div>


          <a
            href="product.html?id=${product.id}"
            class="product-link"
          >
            مشاهده محصول
          </a>

        </div>

      `;


      if (unavailable) {

        card.style.opacity = ".72";

      }


      grid.appendChild(card);

    });

  }


  renderProducts();

});
