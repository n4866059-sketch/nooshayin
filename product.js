// ==========================================
// NOOSH-AYIN - PRODUCT PAGE
// ==========================================

const productContent = document.getElementById("productContent");
const productBack = document.getElementById("productBack");

// ------------------------------------------
// پیدا کردن شناسه محصول از URL
// مثال:
// product.html?id=hazelnut-oil
// ------------------------------------------

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// ------------------------------------------
// بررسی وجود اطلاعات محصولات
// ------------------------------------------

if (typeof products === "undefined") {

  productContent.innerHTML = `
    <div class="product-not-found">
      <h1>خطایی رخ داده است</h1>
      <p>
        اطلاعات محصولات بارگذاری نشد.
        لطفاً دوباره صفحه را باز کنید.
      </p>

      <a
        href="index.html"
        class="back-category-btn"
      >
        بازگشت به صفحه اصلی
      </a>
    </div>
  `;

} else {

  // ----------------------------------------
  // پیدا کردن محصول
  // ----------------------------------------

  const product = products.find(
    item => item.id === productId
  );

  // ----------------------------------------
  // اگر محصول پیدا نشد
  // ----------------------------------------

  if (!product) {

    productContent.innerHTML = `
      <div class="product-not-found">

        <h1>محصول پیدا نشد</h1>

        <p>
          متأسفانه محصول موردنظر وجود ندارد
          یا لینک آن صحیح نیست.
        </p>

        <a
          href="index.html"
          class="back-category-btn"
        >
          بازگشت به صفحه اصلی
        </a>

      </div>
    `;

  } else {

    // --------------------------------------
    // وضعیت موجودی
    // --------------------------------------

    const stock = Number(product.stock || 0);

    let stockText = "";
    let stockClass = "";
    let disabled = "";

    if (stock > 0) {

      stockText = `موجود (${stock.toLocaleString("fa-IR")} عدد)`;
      stockClass = "stock-available";

    } else {

      stockText = "ناموجود";
      stockClass = "stock-unavailable";
      disabled = "disabled";

    }

    // --------------------------------------
    // قیمت
    // --------------------------------------

    const formattedPrice =
      Number(product.price).toLocaleString("fa-IR");

    // --------------------------------------
    // مشخصات محصول
    // --------------------------------------

    let specsHTML = "";

    if (product.brand) {

      specsHTML += `
        <div class="spec-row">
          <span class="spec-label">برند</span>
          <span class="spec-value">
            ${product.brand}
          </span>
        </div>
      `;

    }

    if (product.volume) {

      specsHTML += `
        <div class="spec-row">
          <span class="spec-label">حجم / تعداد</span>
          <span class="spec-value">
            ${product.volume}
          </span>
        </div>
      `;

    }

    specsHTML += `
      <div class="spec-row">
        <span class="spec-label">وضعیت</span>
        <span class="spec-value ${stockClass}">
          ${stockText}
        </span>
      </div>
    `;

    // --------------------------------------
    // صفحه محصول
    // --------------------------------------

    productContent.innerHTML = `

      <section class="product-card">

        <!-- تصویر -->
        <div class="product-image-box">

          <div class="product-image-placeholder">

            <span class="icon">
              ${product.icon || "🌿"}
            </span>

            <p>
              تصویر محصول به‌زودی اضافه می‌شود
            </p>

          </div>

        </div>


        <!-- اطلاعات -->
        <div class="product-info">

          <div class="product-category">
            ${product.categoryName || "محصولات نوش‌آیین"}
          </div>

          <h1 class="product-title">
            ${product.name}
          </h1>

          <div class="product-price">
            ${formattedPrice} تومان
          </div>

          <div class="product-description">
            ${product.description || "توضیحات محصول به‌زودی تکمیل می‌شود."}
          </div>

          <div class="product-specs">

            ${specsHTML}

          </div>

          <div class="product-actions">

            <button
              class="add-cart-btn"
              id="addProductToCart"
              type="button"
              ${disabled}
            >
              ${stock > 0 ? "🛒 افزودن به سبد خرید" : "ناموجود"}
            </button>

            <a
              href="category.html?category=${product.category}"
              class="back-category-btn"
            >
              ← بازگشت به محصولات
            </a>

          </div>

        </div>

      </section>

    `;

    // --------------------------------------
    // عنوان صفحه
    // --------------------------------------

    document.title =
      `${product.name} | نوش‌آیین`;

    // --------------------------------------
    // لینک بازگشت
    // --------------------------------------

    productBack.href =
      `category.html?category=${product.category}`;

    productBack.textContent =
      "← بازگشت به محصولات";


    // --------------------------------------
    // افزودن به سبد خرید
    // --------------------------------------

    const addButton =
      document.getElementById("addProductToCart");

    if (addButton && stock > 0) {

      addButton.addEventListener("click", () => {

        if (typeof addToCart === "function") {

          addToCart(
            product.name,
            product.price
          );

          addButton.textContent =
            "✓ به سبد خرید اضافه شد";

          setTimeout(() => {

            addButton.textContent =
              "🛒 افزودن به سبد خرید";

          }, 1500);

        } else {

          alert(
            "سیستم سبد خرید هنوز بارگذاری نشده است."
          );

        }

      });

    }

  }

}
