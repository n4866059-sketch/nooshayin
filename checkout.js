document.addEventListener("DOMContentLoaded", () => {
  const SUPABASE_URL = "https://umefwxhlockepsznjgzj.supabase.co";

  const SUPABASE_KEY =
    "sb_publishable_78-CD34vrfp4CfHKVtkazw__Yf4shx7";

  const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  );

  const cart = JSON.parse(
    localStorage.getItem("nooshAyinCart") || "[]"
  );

  const form = document.getElementById("checkoutForm");
  const itemsContainer = document.getElementById("checkoutItems");
  const totalElement = document.getElementById("checkoutTotal");

  if (!form || !itemsContainer || !totalElement) {
    console.error("عناصر صفحه تسویه‌حساب پیدا نشدند.");
    return;
  }

  // نمایش محصولات سفارش
  function renderCheckout() {
    if (cart.length === 0) {
      itemsContainer.innerHTML = `
        <div class="empty-checkout">
          سبد خرید شما خالی است.
        </div>
      `;

      totalElement.textContent = "۰ تومان";
      return;
    }

    let total = 0;

    itemsContainer.innerHTML = cart
      .map((item) => {
        const price = Number(item.price) || 0;
        const quantity = Number(item.quantity) || 1;
        const itemTotal = price * quantity;

        total += itemTotal;

        return `
          <div class="checkout-item">
            <div>
              <strong>${item.name}</strong>
              <div>تعداد: ${quantity}</div>
            </div>

            <strong>
              ${itemTotal.toLocaleString("fa-IR")} تومان
            </strong>
          </div>
        `;
      })
      .join("");

    totalElement.textContent =
      `${total.toLocaleString("fa-IR")} تومان`;
  }

  // محاسبه مبلغ کل
  function calculateTotal() {
    return cart.reduce((total, item) => {
      const price = Number(item.price) || 0;
      const quantity = Number(item.quantity) || 1;

      return total + price * quantity;
    }, 0);
  }

  renderCheckout();

  // ثبت سفارش
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (cart.length === 0) {
      alert("سبد خرید شما خالی است.");
      return;
    }

    const customerName =
      document.getElementById("customerName")?.value.trim();

    const phone =
      document.getElementById("customerPhone")?.value.trim();

    const address =
      document.getElementById("customerAddress")?.value.trim();

    const note =
      document.getElementById("customerNote")?.value.trim() || "";

    if (!customerName || !phone || !address) {
      alert("لطفاً نام، شماره تماس و آدرس را وارد کنید.");
      return;
    }

    const total = calculateTotal();

    const orderData = {
      customer_name: customerName,
      phone: phone,
      address: address,
      note: note,
      items: cart,
      total: total
    };

    const submitButton =
      form.querySelector('button[type="submit"]');

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "در حال ثبت سفارش...";
    }

    try {
      const { data, error } = await supabaseClient
        .from("orders")
        .insert([orderData])
        .select()
        .single();

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      // ذخیره آخرین سفارش در مرورگر
      localStorage.setItem(
        "nooshAyinLastOrder",
        JSON.stringify(data)
      );

      // پاک کردن سبد خرید
      localStorage.removeItem("nooshAyinCart");

      alert(
        "سفارش شما با موفقیت ثبت شد. 🌿"
      );

      window.location.href = "index.html";

    } catch (error) {
      console.error("Order error:", error);

      alert(
        "متأسفانه ثبت سفارش انجام نشد. لطفاً دوباره تلاش کنید."
      );

      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "ثبت سفارش";
      }
    }
  });
});
