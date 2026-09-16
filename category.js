/* =====================================================
   NOOSH-AYIN
   CATEGORY PAGE
   47 PRODUCTS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ================= PRODUCTS ================= */

  window.products = {

    /* ================= OILS ================= */

    oils: [

      {
        id: "mini-pistachio-oil",
        name: "مینی روغن پسته کاژان",
        price: 1465000,
        stock: 1250,
        volume: "۳۰ میلی‌لیتر",
        category: "روغن‌ها",
        icon: "🫒",
        description: "روغن پسته کاژان در بسته‌بندی کوچک و قابل حمل، تهیه‌شده از مغز پسته با روش پرس سرد."
      },

      {
        id: "hazelnut-oil",
        name: "روغن فندق کاژان",
        price: 1100000,
        stock: 1019,
        volume: "۱۲۰ میلی‌لیتر",
        category: "روغن‌ها",
        icon: "🌰",
        description: "روغن فندق کاژان تهیه‌شده از مغز فندق با روش پرس سرد."
      },

      {
        id: "pumpkin-oil",
        name: "روغن تخمه کدو کاژان",
        price: 860000,
        stock: 1394,
        volume: "۱۲۰ میلی‌لیتر",
        category: "روغن‌ها",
        icon: "🎃",
        description: "روغن تخمه کدو کاژان تهیه‌شده از دانه‌های کدو با روش پرس سرد."
      },

      {
        id: "flax-oil",
        name: "روغن تخم کتان کاژان",
        price: 730000,
        stock: 1124,
        volume: "۱۲۰ میلی‌لیتر",
        category: "روغن‌ها",
        icon: "🌿",
        description: "روغن تخم کتان کاژان تهیه‌شده از دانه‌های کتان با روش پرس سرد."
      },

      {
        id: "walnut-oil",
        name: "روغن گردو کاژان",
        price: 671000,
        stock: 361,
        volume: "۱۲۰ میلی‌لیتر",
        category: "روغن‌ها",
        icon: "🌰",
        description: "روغن گردو کاژان تهیه‌شده از مغز گردو با روش پرس سرد."
      },

      {
        id: "mini-hazelnut-oil",
        name: "مینی روغن فندق کاژان",
        price: 330000,
        stock: 633,
        volume: "۳۰ میلی‌لیتر",
        category: "روغن‌ها",
        icon: "🌰",
        description: "نسخه کوچک روغن فندق کاژان، مناسب برای حمل و استفاده روزمره."
      },

      {
        id: "mini-pumpkin-oil",
        name: "مینی روغن تخمه کدو کاژان",
        price: 257000,
        stock: 431,
        volume: "۳۰ میلی‌لیتر",
        category: "روغن‌ها",
        icon: "🎃",
        description: "نسخه کوچک روغن تخمه کدو کاژان تهیه‌شده با روش پرس سرد."
      },

      {
        id: "mini-flax-oil",
        name: "مینی روغن کتان کاژان",
        price: 220000,
        stock: 21,
        volume: "۳۰ میلی‌لیتر",
        category: "روغن‌ها",
        icon: "🌿",
        description: "نسخه کوچک روغن کتان کاژان تهیه‌شده با روش پرس سرد."
      },

      {
        id: "mini-walnut-oil",
        name: "مینی روغن گردو کاژان",
        price: 202000,
        stock: 371,
        volume: "۳۰ میلی‌لیتر",
        category: "روغن‌ها",
        icon: "🌰",
        description: "نسخه کوچک روغن گردو کاژان تهیه‌شده از مغز گردو."
      },

      {
        id: "sweet-almond-oil",
        name: "روغن بادام شیرین کاژان",
        price: 980000,
        stock: 0,
        volume: "۱۲۰ میلی‌لیتر",
        category: "روغن‌ها",
        icon: "🌰",
        description: "روغن بادام شیرین کاژان تهیه‌شده از مغز بادام شیرین با روش پرس سرد."
      },

      {
        id: "mini-sweet-almond-oil",
        name: "مینی روغن بادام شیرین کاژان",
        price: 293000,
        stock: 0,
        volume: "۳۰ میلی‌لیتر",
        category: "روغن‌ها",
        icon: "🌰",
        description: "نسخه کوچک روغن بادام شیرین کاژان در بسته‌بندی ۳۰ میلی‌لیتری."
      }

    ],

    /* ================= TEA ================= */

    tea: [

      {
        id: "black-tea-20",
        name: "چای سیاه خالص (۲۰ عددی)",
        price: 162000,
        stock: 513,
        volume: "۲۰ عددی",
        category: "چای و دمنوش",
        icon: "🍵",
        description: "چای سیاه خالص در بسته‌بندی ۲۰ عددی."
      },

      {
        id: "black-tea-25",
        name: "چای سیاه خالص (۲۵ عددی)",
        price: 175000,
        stock: 667,
        volume: "۲۵ عددی",
        category: "چای و دمنوش",
        icon: "🍵",
        description: "چای سیاه خالص در بسته‌بندی ۲۵ عددی."
      },

      {
        id: "green-tea-20",
        name: "چای سبز (۲۰ عددی)",
        price: 230000,
        stock: 1978,
        volume: "۲۰ عددی",
        category: "چای و دمنوش",
        icon: "🍃",
        description: "چای سبز خالص در بسته‌بندی ۲۰ عددی."
      },

      {
        id: "special-black-tea-230",
        name: "چای سیاه ویژه",
        price: 230000,
        stock: 775,
        category: "چای و دمنوش",
        icon: "🍵",
        description: "چای سیاه ویژه با ترکیبی از چای‌های آسام."
      },

      {
        id: "premium-tea",
        name: "چای ممتاز قلمی",
        price: 450000,
        stock: 285,
        category: "چای و دمنوش",
        icon: "🍵",
        description: "چای ممتاز قلمی با برگ‌های چای ایرانی."
      },

      {
        id: "iranian-tea",
        name: "چای اصیل ایرانی",
        price: 560000,
        stock: 381,
        category: "چای و دمنوش",
        icon: "🍵",
        description: "چای اصیل ایرانی تهیه‌شده از برگ‌های چای ایرانی."
      },

      {
        id: "economic-tea",
        name: "چای اقتصادی چوبدار (۱۰۰۰ گرمی)",
        price: 675000,
        stock: 351,
        volume: "۱۰۰۰ گرم",
        category: "چای و دمنوش",
        icon: "🍵",
        description: "چای اقتصادی چوبدار با برگ‌های بزرگ‌تر و ساقه‌های طبیعی."
      },

      {
        id: "special-black-tea-1120",
        name: "چای سیاه ویژه",
        price: 1120000,
        stock: 703,
        category: "چای و دمنوش",
        icon: "🍵",
        description: "چای سیاه ویژه با ترکیبی از چای‌های آسام."
      },

      {
        id: "white-tea",
        name: "چای سفید",
        price: 1800000,
        stock: 730,
        category: "چای و دمنوش",
        icon: "🍵",
        description: "چای سفید با مواد اولیه وارداتی."
      },

      {
        id: "black-tea-160",
        name: "چای سیاه خالص (۱۶۰ عددی)",
        price: 1400000,
        stock: 539,
        volume: "۱۶۰ عددی",
        category: "چای و دمنوش",
        icon: "🍵",
        description: "چای سیاه خالص در بسته‌بندی ۱۶۰ عددی."
      },

      {
        id: "quince-infusion",
        name: "دمنوش به",
        price: 250000,
        stock: 612,
        category: "چای و دمنوش",
        icon: "🍐",
        description: "دمنوش تهیه‌شده از تکه‌های به."
      },

      {
        id: "cumin-infusion",
        name: "دمنوش زیره سبز",
        price: 240000,
        stock: 1688,
        category: "چای و دمنوش",
        icon: "🌿",
        description: "دمنوش خالص زیره سبز."
      },

      {
        id: "thyme-infusion",
        name: "دمنوش آویشن",
        price: 240000,
        stock: 1066,
        category: "چای و دمنوش",
        icon: "🌿",
        description: "دمنوش خالص آویشن."
      },

      {
        id: "mountain-pepper",
        name: "دمنوش فلفل کوهی",
        price: 240000,
        stock: 1070,
        category: "چای و دمنوش",
        icon: "🌿",
        description: "دمنوش تک‌گیاه فلفل کوهی."
      },

      {
        id: "rosemary",
        name: "دمنوش رزماری",
        price: 240000,
        stock: 1402,
        category: "چای و دمنوش",
        icon: "🌿",
        description: "دمنوش خالص رزماری با عطر و طعم گیاهی."
      },

      {
        id: "chicory",
        name: "دمنوش کاسنی",
        price: 250000,
        stock: 1657,
        category: "چای و دمنوش",
        icon: "🌿",
        description: "دمنوش خالص کاسنی."
      },

      {
        id: "cinnamon",
        name: "دارچین",
        price: 250000,
        stock: 548,
        category: "چای و دمنوش",
        icon: "🪵",
        description: "دارچین خالص قابل استفاده برای دم‌کردن یا آسیاب‌کردن."
      },

      {
        id: "peppermint",
        name: "دمنوش نعناع فلفلی",
        price: 260000,
        stock: 725,
        category: "چای و دمنوش",
        icon: "🌿",
        description: "دمنوش خالص نعناع فلفلی."
      },

      {
        id: "sage",
        name: "دمنوش مریم‌گلی",
        price: 260000,
        stock: 1008,
        category: "چای و دمنوش",
        icon: "🌿",
        description: "دمنوش خالص مریم‌گلی."
      },

      {
        id: "yarrow",
        name: "دمنوش بومادران",
        price: 260000,
        stock: 429,
        category: "چای و دمنوش",
        icon: "🌿",
        description: "دمنوش خالص بومادران."
      },

      {
        id: "hibiscus",
        name: "چای ترش",
        price: 290000,
        stock: 1705,
        category: "چای و دمنوش",
        icon: "🌺",
        description: "چای ترش تهیه‌شده از گلبرگ‌های گیاه هیبیسکوس."
      },

      {
        id: "chamomile",
        name: "دمنوش بابونه",
        price: 290000,
        stock: 188,
        category: "چای و دمنوش",
        icon: "🌼",
        description: "دمنوش خالص بابونه."
      },

      {
        id: "lemon-verbena",
        name: "دمنوش به‌لیمو",
        price: 310000,
        stock: 1677,
        category: "چای و دمنوش",
        icon: "🌿",
        description: "دمنوش خالص به‌لیمو با عطر و طعم گیاهی."
      },

      {
        id: "aloe-blossom",
        name: "دمنوش شکوفه آلوئه‌ورا",
        price: 330000,
        stock: 1026,
        category: "چای و دمنوش",
        icon: "🌸",
        description: "دمنوش تهیه‌شده از شکوفه‌های آلوئه‌ورا."
      },

      {
        id: "lavender",
        name: "دمنوش اسطوخودوس",
        price: 330000,
        stock: 1114,
        category: "چای و دمنوش",
        icon: "💜",
        description: "دمنوش خالص گل‌های اسطوخودوس."
      },

      {
        id: "borage",
        name: "دمنوش گل گاوزبان",
        price: 360000,
        stock: 882,
        category: "چای و دمنوش",
        icon: "🌸",
        description: "دمنوش تهیه‌شده از گل گاوزبان ایرانی."
      },

      {
        id: "quince-seed",
        name: "بهدانه",
        price: 480000,
        stock: 897,
        category: "چای و دمنوش",
        icon: "🌿",
        description: "بهدانه خالص بدون مواد نگهدارنده."
      }

    ],

    /* ================= COFFEE & CHOCOLATE ================= */

    coffee: [

      {
        id: "instant-coffee",
        name: "قهوه فوری",
        price: 420000,
        stock: 728,
        category: "پودر قهوه و شکلات",
        icon: "☕",
        description: "قهوه فوری با قابلیت آماده‌سازی سریع برای تهیه نوشیدنی گرم."
      },

      {
        id: "cappuccino-12",
        name: "کاپوچینو (۱۲ عددی)",
        price: 950000,
        stock: 311,
        volume: "۱۲ عددی",
        category: "پودر قهوه و شکلات",
        icon: "☕",
        description: "کاپوچینو در بسته‌بندی ۱۲ عددی، ترکیبی از قهوه فوری، پودر کاکائو، کریمر و شکر."
      },

      {
        id: "classic-hot-chocolate",
        name: "هات چاکلت کلاسیک",
        price: 1300000,
        stock: 351,
        category: "پودر قهوه و شکلات",
        icon: "🍫",
        description: "هات چاکلت کلاسیک با ترکیبی از پودر کاکائو و شکر."
      },

      {
        id: "coffee-mix-2in1",
        name: "کافی میکس ۲ در ۱ بدون شکر",
        price: 1360000,
        stock: 229,
        category: "پودر قهوه و شکلات",
        icon: "☕",
        description: "کافی میکس ۲ در ۱ بدون شکر، ترکیبی از قهوه فوری و کریمر غیرلبنی."
      },

      {
        id: "coffee-mix-exclusive",
        name: "کافی میکس اکسکلوسیو",
        price: 1420000,
        stock: 492,
        category: "پودر قهوه و شکلات",
        icon: "☕",
        description: "کافی میکس اکسکلوسیو با ترکیبی از قهوه فوری، کریمر، شکر و طعم‌دهنده‌های خوراکی."
      },

      {
        id: "dark-hot-chocolate",
        name: "هات چاکلت دارک",
        price: 1480000,
        stock: 276,
        category: "پودر قهوه و شکلات",
        icon: "🍫",
        description: "هات چاکلت دارک با ترکیبی از پودر کاکائو، شکلات تلخ، شکر و کریمر غیرلبنی."
      },

      {
        id: "granulated-instant-coffee",
        name: "قهوه فوری گرانوله",
        price: 1540000,
        stock: 504,
        category: "پودر قهوه و شکلات",
        icon: "☕",
        description: "قهوه فوری گرانوله با قابلیت مصرف ساده یا همراه با شیر و شکر."
      }

    ],

    /* ================= FEATURED ================= */

    featured: [

      {
        id: "mini-weight-pack",
        name: "مینی پکیج لاغری",
        price: 3500000,
        stock: null,
        category: "محصولات منتخب",
        icon: "🌿",
        description: "مجموعه‌ای از دمنوش‌های طبیعی. اطلاعات دقیق محتویات بسته پیش از نهایی‌سازی محصول تکمیل می‌شود."
      },

      {
        id: "complete-weight-pack",
        name: "پکیج کامل لاغری",
        price: 5000000,
        stock: null,
        category: "محصولات منتخب",
        icon: "🌿",
        description: "مجموعه‌ای از دمنوش‌های طبیعی. اطلاعات دقیق محتویات بسته پیش از نهایی‌سازی محصول تکمیل می‌شود."
      }

    ]

  };


  /* ================= CATEGORY PAGE ================= */

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


  const params =
    new URLSearchParams(window.location.search);

  const category =
    params.get("category") || "oils";


  const categoryInfo = {

    oils: {
      title: "روغن‌ها",
      description: "مجموعه روغن‌های طبیعی و گیاهی نوش‌آیین",
      icon: "🫒"
    },

    tea: {
      title: "چای و دمنوش",
      description: "چای‌های ایرانی و مجموعه‌ای از دمنوش‌های گیاهی",
      icon: "🍵"
    },

    coffee: {
      title: "پودر قهوه و شکلات",
      description: "قهوه فوری، کافی میکس و انواع هات چاکلت",
      icon: "☕🍫"
    },

    featured: {
      title: "محصولات منتخب",
      description: "محصولات منتخب نوش‌آیین",
      icon: "🌿"
    }

  };


  const info =
    categoryInfo[category] ||
    categoryInfo.oils;


  const categoryProducts =
    window.products[category] || [];


  titleElement.textContent =
    `${info.icon} ${info.title}`;

  descriptionElement.textContent =
    info.description;

  countElement.textContent =
    `${categoryProducts.length} محصول`;

  breadcrumbElement.textContent =
    info.title;

  productsCountElement.textContent =
    `${categoryProducts.length} محصول`;


  /* ================= RENDER PRODUCTS ================= */

  grid.innerHTML = "";


  categoryProducts.forEach(product => {

    const card =
      document.createElement("article");

    card.className =
      "product-card";


    const imagePath =
      `./${product.id}.jpg`;


    const price =
      Number(product.price)
        .toLocaleString("fa-IR");


    let stockText = "موجود";

    if (product.stock === 0) {
      stockText = "ناموجود";
    }

    if (product.stock === null) {
      stockText = "موجودی به‌زودی";
    }


    card.innerHTML = `

      <a
        href="product.html?id=${product.id}"
        class="product-card-link"
      >

        <div
          class="product-card-image"
          style="
            width:100%;
            height:260px;
            overflow:hidden;
            border-radius:18px;
            background:#071D18;
            display:flex;
            align-items:center;
            justify-content:center;
          "
        >

          <img
            src="${imagePath}"
            alt="${product.name}"
            style="
              display:block;
              width:100%;
              height:100%;
              object-fit:contain;
              border-radius:18px;
            "
            onerror="
              this.style.display='none';
              this.parentElement.innerHTML=
              '<div style=&quot;
                font-size:55px;
                display:flex;
                align-items:center;
                justify-content:center;
                width:100%;
                height:100%;
              &quot;>
                ${product.icon || "🌿"}
              </div>';
            "
          >

        </div>


        <div class="product-card-content">

          <div class="product-card-category">
            ${product.category}
          </div>

          <h2 class="product-card-title">
            ${product.name}
          </h2>

          <div class="product-card-bottom">

            <div class="product-card-price">
              ${price} تومان
            </div>

            <div class="product-card-stock">
              ${stockText}
            </div>

          </div>

        </div>

      </a>

    `;


    grid.appendChild(card);

  });


  /* ================= SEARCH ================= */

  const searchInput =
    document.getElementById("searchInput");


  if (searchInput) {

    searchInput.addEventListener(
      "input",
      function () {

        const value =
          this.value
            .trim()
            .toLowerCase();


        const cards =
          grid.querySelectorAll(".product-card");


        cards.forEach(card => {

          const text =
            card.textContent
              .toLowerCase();


          card.style.display =
            text.includes(value)
              ? ""
              : "none";

        });

      }
    );

  }

});
