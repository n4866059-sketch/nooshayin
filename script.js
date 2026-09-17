/* =====================================================
   NOOSH-AYIN
   MAIN JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {


  /* =====================================================
     CART ELEMENTS
  ===================================================== */

  const cartButton =
    document.getElementById("cartButton");

  const cartPanel =
    document.getElementById("cartPanel");

  const closeCart =
    document.getElementById("closeCart");

  const cartOverlay =
    document.getElementById("cartOverlay");

  const cartItems =
    document.getElementById("cartItems");

  const cartCount =
    document.getElementById("cartCount");

  const cartTotal =
    document.getElementById("cartTotal");


  /* =====================================================
     LOAD CART
  ===================================================== */

  let cart =
    JSON.parse(
      localStorage.getItem("nooshAyinCart")
    ) || [];


  /* =====================================================
     OPEN CART
  ===================================================== */

  function openCart() {

    cartPanel?.classList.add("open");

    cartOverlay?.classList.add("open");

    document.body.style.overflow = "hidden";

  }


  /* =====================================================
     CLOSE CART
  ===================================================== */

  function closeCartPanel() {

    cartPanel?.classList.remove("open");

    cartOverlay?.classList.remove("open");

    document.body.style.overflow = "";

  }


  cartButton?.addEventListener(
    "click",
    openCart
  );


  closeCart?.addEventListener(
    "click",
    closeCartPanel
  );


  cartOverlay?.addEventListener(
    "click",
    closeCartPanel
  );


  /* =====================================================
     FORMAT PRICE
  ===================================================== */

  function formatPrice(number) {

    return Number(number)
      .toLocaleString("fa-IR")
      + " تومان";

  }


  /* =====================================================
     RENDER CART
  ===================================================== */

  function renderCart() {

    if (!cartItems) {
      return;
    }


    cartItems.innerHTML = "";


    /* ================= EMPTY CART ================= */

    if (cart.length === 0) {

      cartItems.innerHTML = `

        <div class="empty-cart">

          <div
            style="
              font-size:42px;
              margin-bottom:12px;
            "
          >
            🛍️
          </div>

          <p>
            سبد خرید شما خالی است.
          </p>

        </div>

      `;


      if (cartCount) {
        cartCount.textContent = "۰";
      }


      if (cartTotal) {
        cartTotal.textContent =
          "۰ تومان";
      }


      return;

    }


    /* ================= TOTALS ================= */

    let total = 0;

    let count = 0;


    /* ================= PRODUCTS ================= */

    cart.forEach((item, index) => {


      total +=
        Number(item.price) *
        Number(item.quantity);


      count +=
        Number(item.quantity);


      const itemElement =
        document.createElement("div");


      itemElement.className =
        "cart-product-item";


      itemElement.innerHTML = `

        <div class="cart-product-top">


          <div class="cart-product-info">

            <strong>
              ${item.name}
            </strong>

            <span>
              ${formatPrice(item.price)}
              <small>
                / عدد
              </small>
            </span>

          </div>


          <button
            type="button"
            class="cart-remove-button"
            data-remove="${index}"
            aria-label="حذف محصول"
          >
            ×
          </button>


        </div>


        <div class="cart-product-bottom">


          <span class="cart-quantity-label">
            تعداد
          </span>


          <div class="cart-quantity-control">


            <button
              type="button"
              data-minus="${index}"
              class="cart-quantity-button"
            >
              −
            </button>


            <span class="cart-quantity-number">
              ${Number(item.quantity).toLocaleString("fa-IR")}
            </span>


            <button
              type="button"
              data-plus="${index}"
              class="cart-quantity-button plus"
            >
              +
            </button>


          </div>


          <strong class="cart-item-total">

            ${formatPrice(
              Number(item.price) *
              Number(item.quantity)
            )}

          </strong>


        </div>

      `;


      cartItems.appendChild(
        itemElement
      );

    });


    /* =================================================
       CART TOTAL / COUNT
    ================================================= */

    if (cartCount) {

      cartCount.textContent =
        Number(count)
          .toLocaleString("fa-IR");

    }


    if (cartTotal) {

      cartTotal.textContent =
        formatPrice(total);

    }


    /* =================================================
       REMOVE
    ================================================= */

    document
      .querySelectorAll("[data-remove]")
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            const index =
              Number(
                button.dataset.remove
              );


            cart.splice(index, 1);


            saveCart();

            renderCart();

          }
        );

      });


    /* =================================================
       PLUS
    ================================================= */

    document
      .querySelectorAll("[data-plus]")
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            const index =
              Number(
                button.dataset.plus
              );


            if (!cart[index]) {
              return;
            }


            cart[index].quantity++;


            saveCart();

            renderCart();

          }
        );

      });


    /* =================================================
       MINUS
    ================================================= */

    document
      .querySelectorAll("[data-minus]")
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            const index =
              Number(
                button.dataset.minus
              );


            if (!cart[index]) {
              return;
            }


            if (
              cart[index].quantity > 1
            ) {

              cart[index].quantity--;

            } else {

              cart.splice(index, 1);

            }


            saveCart();

            renderCart();

          }
        );

      });

  }


  /* =====================================================
     SAVE CART
  ===================================================== */

  function saveCart() {

    localStorage.setItem(
      "nooshAyinCart",
      JSON.stringify(cart)
    );

  }


  /* =====================================================
     ADD TO CART
     
     name     = نام محصول
     price    = قیمت هر عدد
     quantity = تعداد انتخاب‌شده
  ===================================================== */

  window.addToCart =
    function(
      name,
      price,
      quantity = 1
    ) {


      let selectedQuantity =
        Number(quantity);


      /* جلوگیری از مقدار نامعتبر */

      if (
        !Number.isFinite(
          selectedQuantity
        ) ||
        selectedQuantity < 1
      ) {

        selectedQuantity = 1;

      }


      selectedQuantity =
        Math.floor(
          selectedQuantity
        );


      /* ================= FIND PRODUCT ================= */

      const existing =
        cart.find(
          item =>
            item.name === name
        );


      /* ================= EXISTING ================= */

      if (existing) {

        existing.quantity +=
          selectedQuantity;

      }


      /* ================= NEW ================= */

      else {

        cart.push({

          name: name,

          price: Number(price),

          quantity:
            selectedQuantity

        });

      }


      /* ================= SAVE ================= */

      saveCart();

      renderCart();

      openCart();

    };


  /* =====================================================
     SEARCH
  ===================================================== */

  const searchButton =
    document.getElementById(
      "searchButton"
    );


  const searchBox =
    document.getElementById(
      "searchBox"
    );


  const closeSearch =
    document.getElementById(
      "closeSearch"
    );


  const searchInput =
    document.getElementById(
      "searchInput"
    );


  searchButton?.addEventListener(
    "click",
    () => {

      searchBox?.classList.toggle(
        "open"
      );


      if (
        searchBox?.classList.contains(
          "open"
        )
      ) {

        setTimeout(
          () => {

            searchInput?.focus();

          },
          250
        );

      }

    }
  );


  closeSearch?.addEventListener(
    "click",
    () => {

      searchBox?.classList.remove(
        "open"
      );

    }
  );


  /* =====================================================
     ESCAPE
  ===================================================== */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape"
      ) {

        closeCartPanel();

        searchBox?.classList.remove(
          "open"
        );

      }

    }
  );


  /* =====================================================
     INITIAL CART
  ===================================================== */

  renderCart();

});
