/* =====================================================
   NOOSH-AYIN
   CHECKOUT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  const checkoutItems =
    document.getElementById("checkoutItems");

  const checkoutTotal =
    document.getElementById("checkoutTotal");

  const checkoutForm =
    document.getElementById("checkoutForm");


  /* ================= CART ================= */

  let cart = JSON.parse(
    localStorage.getItem("nooshAyinCart")
  ) || [];


  /* ================= PRICE ================= */

  function formatPrice(number) {
    return Number(number).toLocaleString("fa-IR") + " تومان";
  }


  /* ================= SHOW CART ================= */

  function renderCheckout() {

    if (!checkoutItems) return;

    checkoutItems.innerHTML = "";

    if (cart.length === 0) {

      checkoutItems.innerHTML = `
        <div class="checkout-empty">
          <div>🛍️</div>
          <p>سبد خرید شما خالی است.</p>

          <a href="index.html">
            بازگشت به فروشگاه
          </a>
        </div>
      `;

      if (checkoutTotal) {
        checkoutTotal.textContent = "۰ تومان";
      }

      if (checkoutForm) {
        checkoutForm.style.display = "none";
      }

      return;
    }


    let total = 0;


    cart.forEach(item => {

      const itemTotal =
        Number(item.price) *
        Number(item.quantity);

      total += itemTotal;


      const itemElement =
        document.createElement("div");

      itemElement.className =
        "checkout-product";


      itemElement.innerHTML = `

        <div class="checkout-product-info">

          <strong>
            ${item.name}
          </strong>

          <span>
            ${formatPrice(item.price)}
          </span>

        </div>


        <div class="checkout-product-details">

          <span>
            تعداد:
            ${Number(item.quantity).toLocaleString("fa-IR")}
          </span>

          <strong>
            ${formatPrice(itemTotal)}
          </strong>

        </div>

      `;


      checkoutItems.appendChild(
        itemElement
      );

    });


    if (checkoutTotal) {

      checkoutTotal.textContent =
        formatPrice(total);

    }

  }


  /* ================= SUBMIT ================= */

  checkoutForm?.addEventListener(
    "submit",
    event => {

      event.preventDefault();


      if (cart.length === 0) {

        alert(
          "سبد خرید شما خالی است."
        );

        return;

      }


      const customerName =
        document
          .getElementById("customerName")
          ?.value.trim();


      const customerPhone =
        document
          .getElementById("customerPhone")
          ?.value.trim();


      const customerAddress =
        document
          .getElementById("customerAddress")
          ?.value.trim();


      const orderNote =
        document
          .getElementById("orderNote")
          ?.value.trim();


      if (
        !customerName ||
        !customerPhone ||
        !customerAddress
      ) {

        alert(
          "لطفاً اطلاعات ضروری را کامل کنید."
        );

        return;

      }


      /* ================= ORDER ================= */

      const order = {

        id:
          "NA-" +
          Date.now(),

        customer: {

          name: customerName,

          phone: customerPhone,

          address: customerAddress,

          note: orderNote

        },

        items: cart,

        createdAt:
          new Date().toISOString()

      };


      /*
        فعلاً سفارش فقط در مرورگر ذخیره می‌شود.
        در مرحله بعد آن را به پایگاه داده
        متصل می‌کنیم.
      */

      localStorage.setItem(
        "nooshAyinLastOrder",
        JSON.stringify(order)
      );


      alert(
        "اطلاعات سفارش با موفقیت ثبت شد 🌿"
      );


      /*
        فعلاً سبد خرید را پاک نمی‌کنیم
        تا قبل از اتصال به سیستم واقعی
        سفارش، اطلاعات از بین نرود.
      */

    }
  );


  /* ================= START ================= */

  renderCheckout();

});
