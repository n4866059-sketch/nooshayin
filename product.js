/* =====================================================
   NOOSH-AYIN
   PRODUCT PAGE
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  const productContent =
    document.getElementById("productContent");

  if (!productContent) {
    return;
  }

  /* ================= FIND PRODUCT ================= */

  let product = null;

  if (
    window.products &&
    typeof window.products === "object"
  ) {

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

  }


  /* ================= ERROR ================= */

  if (!product) {

    productContent.innerHTML = `

      <div class="product-error">

        <div class="product-error-icon">
          🌿
        </div>

        <h1>
          محصول پیدا نشد
        </h1>

        <p>
          اطلاعات این محصول در دسترس نیست.
        </p>

        <a href="index.html">
          بازگشت به صفحه اصلی
        </a>

      </div>

    `;

    return;
  }


  /* ================= PRICE ================= */

  function formatPrice(price) {

    return Number(price).toLocaleString("fa-IR")
      + " تومان";

  }


  /* ================= STOCK ================= */

  function getStockText(stock) {

    if (stock === 0) {
      return "ناموجود";
    }

    if (stock === null) {
      return "موجودی به‌زودی";
    }

    return "موجود";

  }


  const unavailable =
    product.stock === 0;


  /* ================= DESCRIPTION ================= */

  const description =
    getDescription(product);


  /* ================= PRODUCT PAGE ================= */

  productContent.innerHTML = `

    <div class="product-detail-layout">


      <!-- =================================
           IMAGE
      ================================== -->

      <div class="product-image-section">

        <div class="product-image-frame">

          <img
            src="./${product.id}.jpg"
            alt="${product.name}"
            class="product-main-image"
          >

        </div>

      </div>


      <!-- =================================
           INFORMATION
      ================================== -->

      <div class="product-information">


        <!-- CATEGORY -->

        <div class="product-category-label">

          ${product.category || "محصولات نوش‌آیین"}

        </div>


        <!-- NAME -->

        <h1 class="product-main-title">

          ${product.name}

        </h1>


        <!-- PRICE -->

        <div class="product-price-box">

          <span>
            قیمت محصول
          </span>

          <strong>
            ${formatPrice(product.price)}
          </strong>

        </div>


        <!-- BASIC INFORMATION -->

        <section class="product-info-section">

          <h2>
            اطلاعات محصول
          </h2>


          <div class="product-info-grid">


            <div class="info-box">

              <span>
                برند
              </span>

              <strong>
                ${product.brand || "نیوشانیک"}
              </strong>

            </div>


            ${
              product.volume
              ?
              `
              <div class="info-box">

                <span>
                  حجم / وزن
                </span>

                <strong>
                  ${product.volume}
                </strong>

              </div>
              `
              :
              ""
            }


            <div class="info-box">

              <span>
                وضعیت
              </span>

              <strong class="${product.stock === 0 ? "out-stock" : ""}">

                ${getStockText(product.stock)}

              </strong>

            </div>


          </div>

        </section>


        <!-- DESCRIPTION -->

        <section class="product-info-section">

          <h2>
            درباره محصول
          </h2>

          <div class="product-description-text">

            ${description}

          </div>

        </section>


        <!-- ORDER -->

        ${
          unavailable
          ?
          `
          <div class="unavailable-box">
            این محصول در حال حاضر ناموجود است.
          </div>
          `
          :
          `
          <section class="product-order-section">

            <h2>
              تعداد سفارش
            </h2>


            <div class="quantity-row">


              <button
                type="button"
                id="quantityMinus"
                class="quantity-button"
              >
                −
              </button>


              <input
                type="number"
                id="productQuantity"
                class="quantity-input"
                value="1"
                min="1"
                max="${product.stock}"
              >


              <button
                type="button"
                id="quantityPlus"
                class="quantity-button"
              >
                +
              </button>


            </div>


            <div class="stock-hint">

              حداکثر قابل سفارش:
              ${Number(product.stock).toLocaleString("fa-IR")}
              عدد

            </div>


            <button
              type="button"
              id="addProductButton"
              class="product-add-button"
            >

              🛒
              افزودن به سبد خرید

            </button>

          </section>
          `
        }


      </div>

    </div>

  `;


  /* =========================================
     QUANTITY
  ========================================== */

  if (!unavailable) {

    const quantityInput =
      document.getElementById("productQuantity");

    const minusButton =
      document.getElementById("quantityMinus");

    const plusButton =
      document.getElementById("quantityPlus");

    const addButton =
      document.getElementById("addProductButton");


    function getQuantity() {

      let quantity =
        parseInt(quantityInput.value, 10);

      if (
        isNaN(quantity) ||
        quantity < 1
      ) {
        quantity = 1;
      }

      if (
        product.stock !== null &&
        quantity > product.stock
      ) {
        quantity = product.stock;
      }

      quantityInput.value = quantity;

      return quantity;

    }


    minusButton.addEventListener(
      "click",
      () => {

        let quantity =
          getQuantity();

        if (quantity > 1) {
          quantity--;
        }

        quantityInput.value =
          quantity;

      }
    );


    plusButton.addEventListener(
      "click",
      () => {

        let quantity =
          getQuantity();

        if (
          product.stock === null ||
          quantity < product.stock
        ) {
          quantity++;
        }

        quantityInput.value =
          quantity;

      }
    );


    quantityInput.addEventListener(
      "change",
      getQuantity
    );


    /* ================= ADD TO CART ================= */

    addButton.addEventListener(
      "click",
      () => {

        const quantity =
          getQuantity();


        if (
          typeof window.addToCart === "function"
        ) {

          /*
            فعلاً تعداد انتخاب‌شده را
            به تابع سبد خرید می‌فرستیم.
            در مرحله سبد خرید این بخش
            کامل‌تر می‌شود.
          */

          window.addToCart(
            product.name,
            product.price,
            quantity
          );

        }

      }
    );

  }


  /* ================= PAGE TITLE ================= */

  document.title =
    `${product.name} | نوش‌آیین`;



  /* ================= BACK LINK ================= */

  const backLink =
    document.getElementById("backToCategory");

  if (
    backLink &&
    product.categoryKey
  ) {

    backLink.href =
      `category.html?category=${product.categoryKey}`;

  }

});


/* =====================================================
   PRODUCT DESCRIPTIONS
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
    "محصولی از مجموعه نوش‌آیین."
  );

             }
