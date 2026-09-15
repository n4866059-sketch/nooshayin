/* =====================================================
   NOOSH-AYIN
   Main JavaScript
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ================= CART ================= */

  const cartButton = document.getElementById("cartButton");
  const cartPanel = document.getElementById("cartPanel");
  const closeCart = document.getElementById("closeCart");
  const cartOverlay = document.getElementById("cartOverlay");

  const cartItems = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");
  const cartTotal = document.getElementById("cartTotal");

  let cart = JSON.parse(
    localStorage.getItem("nooshAyinCart")
  ) || [];


  function openCart() {
    cartPanel?.classList.add("open");
    cartOverlay?.classList.add("open");
    document.body.style.overflow = "hidden";
  }


  function closeCartPanel() {
    cartPanel?.classList.remove("open");
    cartOverlay?.classList.remove("open");
    document.body.style.overflow = "";
  }


  cartButton?.addEventListener("click", openCart);
  closeCart?.addEventListener("click", closeCartPanel);
  cartOverlay?.addEventListener("click", closeCartPanel);


  /* ================= CART RENDER ================= */

  function formatPrice(number) {

    return Number(number)
      .toLocaleString("fa-IR") + " تومان";

  }


  function renderCart() {

    if (!cartItems) return;

    cartItems.innerHTML = "";

    if (cart.length === 0) {

      cartItems.innerHTML = `
        <div class="empty-cart">
          <div style="font-size:45px;margin-bottom:10px;">🛍️</div>
          <p>سبد خرید شما خالی است.</p>
        </div>
      `;

      cartCount.textContent = "۰";
      cartTotal.textContent = "۰ تومان";

      return;
    }


    let total = 0;
    let count = 0;


    cart.forEach((item, index) => {

      total += item.price * item.quantity;
      count += item.quantity;


      const itemElement = document.createElement("div");

      itemElement.style.cssText = `
        padding:16px 0;
        border-bottom:1px solid rgba(198,161,91,.12);
      `;


      itemElement.innerHTML = `

        <div style="
          display:flex;
          justify-content:space-between;
          gap:10px;
        ">

          <div>

            <strong style="
              color:#F3E8D7;
              display:block;
              margin-bottom:5px;
            ">
              ${item.name}
            </strong>

            <span style="
              color:#C6A15B;
              font-size:13px;
            ">
              ${formatPrice(item.price)}
            </span>

          </div>


          <button
            data-remove="${index}"
            style="
              background:none;
              color:#AAA49A;
              font-size:20px;
            "
          >
            ×
          </button>

        </div>


        <div style="
          display:flex;
          align-items:center;
          gap:10px;
          margin-top:12px;
        ">

          <button
            data-minus="${index}"
            style="
              width:30px;
              height:30px;
              border-radius:8px;
              background:#0B2A22;
              color:#EADFCE;
            "
          >
            −
          </button>

          <span>${item.quantity}</span>

          <button
            data-plus="${index}"
            style="
              width:30px;
              height:30px;
              border-radius:8px;
              background:#7F1820;
              color:#fff;
            "
          >
            +
          </button>

        </div>
      `;


      cartItems.appendChild(itemElement);

    });


    cartCount.textContent =
      Number(count).toLocaleString("fa-IR");

    cartTotal.textContent =
      formatPrice(total);


    document
      .querySelectorAll("[data-remove]")
      .forEach(button => {

        button.addEventListener("click", () => {

          const index =
            Number(button.dataset.remove);

          cart.splice(index, 1);

          saveCart();
          renderCart();

        });

      });


    document
      .querySelectorAll("[data-plus]")
      .forEach(button => {

        button.addEventListener("click", () => {

          const index =
            Number(button.dataset.plus);

          cart[index].quantity++;

          saveCart();
          renderCart();

        });

      });


    document
      .querySelectorAll("[data-minus]")
      .forEach(button => {

        button.addEventListener("click", () => {

          const index =
            Number(button.dataset.minus);

          if (cart[index].quantity > 1) {

            cart[index].quantity--;

          } else {

            cart.splice(index, 1);

          }

          saveCart();
          renderCart();

        });

      });

  }


  function saveCart() {

    localStorage.setItem(
      "nooshAyinCart",
      JSON.stringify(cart)
    );

  }


  window.addToCart = function(name, price) {

    const existing =
      cart.find(item => item.name === name);


    if (existing) {

      existing.quantity++;

    } else {

      cart.push({
        name: name,
        price: Number(price),
        quantity: 1
      });

    }


    saveCart();
    renderCart();
    openCart();

  };


  /* ================= SEARCH ================= */

  const searchButton =
    document.getElementById("searchButton");

  const searchBox =
    document.getElementById("searchBox");

  const closeSearch =
    document.getElementById("closeSearch");

  const searchInput =
    document.getElementById("searchInput");


  searchButton?.addEventListener("click", () => {

    searchBox?.classList.toggle("open");

    if (searchBox?.classList.contains("open")) {

      setTimeout(() => {
        searchInput?.focus();
      }, 250);

    }

  });


  closeSearch?.addEventListener("click", () => {

    searchBox?.classList.remove("open");

  });


  /* ================= ESCAPE ================= */

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

      closeCartPanel();

      searchBox?.classList.remove("open");

    }

  });


  /* ================= INITIAL ================= */

  renderCart();

});
