/* =====================================================
   NOOSH-AYIN
   CHECKOUT + SUPABASE
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ================= SUPABASE ================= */

  const SUPABASE_URL =
    "https://umefwxhlockepsznjgzj.supabase.co";

  const SUPABASE_KEY =
    "sb_publishable_78-CD34vrfp4CfHKVtkazw__Yf4shx7";

  const supabaseClient =
    window.supabase.createClient(
      SUPABASE_URL,
      SUPABASE_KEY
    );


  /* ================= ELEMENTS ================= */

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

      const price =
        Number(item.price) || 0;

      const quantity =
        Number(item.quantity) || 1;

      const itemTotal =
        price * quantity;

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
            ${formatPrice(price)}
          </span>

        </div>

        <div class="checkout-product-details">

          <span>
            تعداد:
            ${quantity.toLocaleString("fa-IR")}
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

  const shippingCost = 150000;
  const finalTotal = total + shippingCost;

  checkoutTotal.textContent =
    formatPrice(finalTotal);

     }

  }


  /* ================= TOTAL ================= */

  function calculateTotal() {

    return cart.reduce(
      (total, item) => {

        const price =
          Number(item.price) || 0;

        const quantity =
          Number(item.quantity) || 1;

        return total + (price * quantity);

      },
      0
    );

  }


  /* ================= SUBMIT ================= */

  checkoutForm?.addEventListener(
    "submit",
    async (event) => {

      event.preventDefault();


      if (cart.length === 0) {

        alert(
          "سبد خرید شما خالی است."
        );

        return;

      }


      /* ===== CUSTOMER INFO ===== */

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
          ?.value.trim() || "";


      /* ===== VALIDATION ===== */

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


      /* ===== TOTAL ===== */

      const total =
        calculateTotal();

const shippingCost = 150000;
const finalTotal = total + shippingCost;  


      /* ===== ORDER DATA ===== */

      const orderData = {

        customer_name:
          customerName,

        phone:
          customerPhone,

        address:
          customerAddress,

        note:
          orderNote,

        items:
          cart,

        total:
          finalTotal

      };


      /* ===== BUTTON ===== */

      const submitButton =
        checkoutForm.querySelector(
          'button[type="submit"]'
        );


      if (submitButton) {

        submitButton.disabled = true;

        submitButton.textContent =
          "در حال ثبت سفارش...";

      }


      /* ===== SEND TO SUPABASE ===== */

      try {

        const { error } =
          await supabaseClient
            .from("orders")
            .insert([orderData]);


        if (error) {

          console.error(
            "Supabase error:",
            error
          );

          throw error;

        }


        /* ===== LOCAL BACKUP ===== */

        const localOrder = {

          id:
            "NA-" + Date.now(),

          customer: {

            name:
              customerName,

            phone:
              customerPhone,

            address:
              customerAddress,

            note:
              orderNote

          },

          items:
            cart,

          total:
            total,

          createdAt:
            new Date().toISOString()

        };


        localStorage.setItem(
          "nooshAyinLastOrder",
          JSON.stringify(localOrder)
        );


        /* ===== CLEAR CART ===== */

        localStorage.removeItem(
          "nooshAyinCart"
        );


        /* ===== SUCCESS ===== */

        alert(
          "سفارش شما با موفقیت ثبت شد 🌿"
        );


        window.location.href =
          "index.html";

      }


      catch (error) {

        console.error(
          "Order submission error:",
          error
        );


        alert(
          "متأسفانه ثبت سفارش انجام نشد. لطفاً دوباره تلاش کنید."
        );


        if (submitButton) {

          submitButton.disabled = false;

          submitButton.textContent =
            "ثبت سفارش";

        }

      }

    }
  );


  /* ================= START ================= */

  renderCheckout();

});
