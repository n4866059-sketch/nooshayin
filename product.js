/* =====================================================
   NOOSH-AYIN
   PRODUCT PAGE
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ================= GET PRODUCT ID ================= */

  const params =
    new URLSearchParams(window.location.search);

  const productId =
    params.get("id");


  /* ================= ELEMENTS ================= */

  const productContent =
    document.getElementById("productContent");


  /* ================= CHECK PRODUCT DATA ================= */

  if (
    !productId ||
    !window.products ||
    typeof window.products !== "object"
  ) {

    showError();
    return;

  }


  /* ================= FIND PRODUCT ================= */

  let product = null;

  const categories =
    Object.values(window.products);

  for (const categoryProducts of categories) {

    if (!Array.isArray(categoryProducts)) {
      continue;
    }

    const found =
      categoryProducts.find(
        item => item.id === productId
      );

    if (found) {

      product = found;
      break;

    }

  }


  /* ================= PRODUCT NOT FOUND ================= */

  if (!product) {

    showError();
    return;

  }


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


  /* ================= PRODUCT CONTENT ================= */

  const unavailable =
    product.stock === 0;


  productContent.innerHTML = `

    <div class="product-page-image">

      <div class="product-page-image-placeholder">
        ${product.icon || "🌿"}
      </div>

    </div>


    <div class="product-page-info">

      <div class="product-page-category">
        ${product.category}
      </div>


      <h1 class="product-page-title">
        ${product.name}
      </h1>


      <div class="product-page-price">
        ${formatPrice(product.price)}
      </div>


      <div class="product-page-details">

        <div class="product-detail-item">
          <span>وضعیت</span>
          <strong>
            ${stockText(product.stock)}
          </strong>
        </div>

        ${
          product.volume
            ? `
              <div class="product-detail-item">
                <span>حجم / وزن</span>
                <strong>${product.volume}</strong>
              </div>
            `
            : ""
        }

      </div>


      <div class="product-page-description">

        <h2>
          درباره محصول
        </h2>

        <p>
          ${getDescription(product)}
        </p>

      </div>


      <div class="product-page-actions">

        <button
          class="product-add-button"
          id="addProductButton"
          ${unavailable ? "disabled" : ""}
        >
          ${
            unavailable
              ? "ناموجود"
              : "افزودن به سبد خرید 🛒"
          }
        </button>

      </div>

    </div>

  `;


  /* ================= ADD TO CART ================= */

  const addButton =
    document.getElementById("addProductButton");


  if (addButton && !unavailable) {

    addButton.addEventListener("click", () => {

      if (typeof window.addToCart === "function") {

        window.addToCart(
          product.name,
          product.price
        );

      } else {

        alert("سبد خرید هنوز آماده نشده است.");

      }

    });

  }


  /* ================= PAGE TITLE ================= */

  document.title =
    `${product.name} | نوش‌آیین`;

});


/* =====================================================
   PRODUCT DESCRIPTION
===================================================== */

function getDescription(product) {

  if (product.description) {

    return product.description;

  }


  const descriptions = {

    "mini-pistachio-oil":
      "روغن پسته کاژان در بسته‌بندی کوچک و قابل حمل، تهیه‌شده از مغز پسته با روش پرس سرد.",

    "hazelnut-oil":
      "روغن فندق کاژان تهیه‌شده از مغز فندق با روش پرس سرد و مناسب برای مصرف خوراکی و استفاده موضعی.",

    "pumpkin-oil":
      "روغن تخمه کدو کاژان تهیه‌شده از دانه‌های کدو با روش پرس سرد.",

    "flax-oil":
      "روغن تخم کتان کاژان تهیه‌شده از دانه‌های کتان با روش پرس سرد.",

    "walnut-oil":
      "روغن گردو کاژان تهیه‌شده از مغز گردو با روش پرس سرد.",

    "mini-hazelnut-oil":
      "نسخه کوچک روغن فندق کاژان، مناسب برای حمل و استفاده روزمره.",

    "mini-pumpkin-oil":
      "نسخه کوچک روغن تخمه کدو کاژان تهیه‌شده با روش پرس سرد.",

    "mini-flax-oil":
      "نسخه کوچک روغن کتان کاژان تهیه‌شده با روش پرس سرد.",

    "mini-walnut-oil":
      "نسخه کوچک روغن گردو کاژان تهیه‌شده از مغز گردو.",

    "sweet-almond-oil":
      "روغن بادام شیرین کاژان تهیه‌شده از مغز بادام شیرین با روش پرس سرد.",

    "mini-sweet-almond-oil":
      "نسخه کوچک روغن بادام شیرین کاژان در بسته‌بندی ۳۰ میلی‌لیتری.",

    "instant-coffee":
      "قهوه فوری با قابلیت آماده‌سازی سریع و مناسب برای تهیه یک نوشیدنی گرم.",

    "cappuccino-12":
      "کاپوچینو در بسته‌بندی ۱۲ عددی، ترکیبی از قهوه فوری، پودر کاکائو، کریمر و شکر.",

    "classic-hot-chocolate":
      "هات چاکلت کلاسیک با ترکیبی از پودر کاکائو، شکر و سایر ترکیبات محصول.",

    "coffee-mix-2in1":
      "کافی میکس ۲ در ۱ بدون شکر، ترکیبی از قهوه فوری و کریمر غیرلبنی.",

    "coffee-mix-exclusive":
      "کافی میکس اکسکلوسیو با ترکیبی از قهوه فوری، کریمر، شکر و طعم‌دهنده‌های خوراکی.",

    "dark-hot-chocolate":
      "هات چاکلت دارک با ترکیبی از پودر کاکائو، شکلات تلخ، شکر و کریمر غیرلبنی.",

    "granulated-instant-coffee":
      "قهوه فوری گرانوله با بافت دانه‌ای و قابلیت مصرف ساده یا همراه با شیر و شکر."

  };


  return (
    descriptions[product.id] ||
    "محصولی از مجموعه نوش‌آیین. اطلاعات تکمیلی این محصول به‌زودی اضافه خواهد شد."
  );

}


function showError() {

  const productContent =
    document.getElementById("productContent");


  if (!productContent) {
    return;
  }


  productContent.innerHTML = `

    <div class="product-error">

      <div class="product-error-icon">
        🌿
      </div>

      <h1>
        محصول پیدا نشد
      </h1>

      <p>
        اطلاعات این محصول در حال حاضر در دسترس نیست.
      </p>

      <a href="index.html">
        بازگشت به صفحه اصلی
      </a>

    </div>

  `;

    }
