/* =====================================================
   NOOSH-AYIN
   ADMIN DASHBOARD
===================================================== */

document.addEventListener("DOMContentLoaded", async () => {

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

  const ordersContainer =
    document.getElementById("adminOrdersContainer");

  const totalOrders =
    document.getElementById("totalOrders");

  const newOrders =
    document.getElementById("newOrders");

  const totalSales =
    document.getElementById("totalSales");

  const refreshButton =
    document.getElementById("refreshOrdersButton");

  const logoutButton =
    document.getElementById("adminLogoutButton");

  const message =
    document.getElementById("adminMessage");


  /* ================= AUTH ================= */

  async function checkAdmin() {

    const {
      data: { session }
    } = await supabaseClient.auth.getSession();


    if (!session) {

      window.location.href =
        "admin.html";

      return false;
    }


    return true;
  }


  /* ================= FORMAT PRICE ================= */

  function formatPrice(number) {

    return Number(number || 0)
      .toLocaleString("fa-IR") +
      " تومان";

  }


  /* ================= FORMAT DATE ================= */

  function formatDate(date) {

    if (!date) return "—";

    return new Date(date)
      .toLocaleString("fa-IR", {
        dateStyle: "medium",
        timeStyle: "short"
      });

  }


  /* ================= LOAD ORDERS ================= */

  async function loadOrders() {

    ordersContainer.innerHTML = `
      <div class="admin-loading">
        در حال دریافت سفارش‌ها...
      </div>
    `;


    const {
      data: orders,
      error
    } = await supabaseClient
      .from("orders")
      .select("*")
      .order("created_at", {
        ascending: false
      });


    if (error) {

      console.error(
        "Orders error:",
        error
      );

      ordersContainer.innerHTML = `
        <div class="admin-loading">
          دریافت سفارش‌ها با خطا مواجه شد.
        </div>
      `;

      message.textContent =
        "خطا در دریافت سفارش‌ها.";

      return;

    }


    message.textContent = "";


    /* ================= STATS ================= */

    const ordersList =
      orders || [];


    totalOrders.textContent =
      ordersList.length
        .toLocaleString("fa-IR");


    /*
      فعلاً وضعیت سفارش در جدول نداریم،
      بنابراین سفارش جدید را برای نمایش اولیه
      برابر تعداد کل سفارش‌ها در نظر نمی‌گیریم.
    */

    newOrders.textContent =
      ordersList.length
        .toLocaleString("fa-IR");


    const sales =
      ordersList.reduce(
        (sum, order) =>
          sum + Number(order.total || 0),
        0
      );


    totalSales.textContent =
      formatPrice(sales);


    /* ================= EMPTY ================= */

    if (ordersList.length === 0) {

      ordersContainer.innerHTML = `
        <div class="admin-loading">
          هنوز سفارشی ثبت نشده است.
        </div>
      `;

      return;
    }


    /* ================= RENDER ================= */

    ordersContainer.innerHTML = "";


    ordersList.forEach(order => {

      const card =
        document.createElement("article");

      card.className =
        "admin-order-card";


      let itemsHTML = "";


      const items =
        Array.isArray(order.items)
          ? order.items
          : [];


      items.forEach(item => {

        const quantity =
          Number(item.quantity || 1);

        const price =
          Number(item.price || 0);


        itemsHTML += `
          <div class="admin-order-item">

            <span>
              ${item.name || "محصول"}
              ×
              ${quantity.toLocaleString("fa-IR")}
            </span>

            <strong>
              ${formatPrice(price * quantity)}
            </strong>

          </div>
        `;

      });


      card.innerHTML = `

        <div class="admin-order-header">

          <div>

            <span class="admin-order-label">
              سفارش
            </span>

            <strong class="admin-order-id">
              #${order.id}
            </strong>

          </div>

          <span class="admin-order-date">
            ${formatDate(order.created_at)}
          </span>

        </div>


        <div class="admin-order-customer">

          <div>
            <span>مشتری</span>
            <strong>
              ${order.customer_name || "—"}
            </strong>
          </div>

          <div>
            <span>شماره تماس</span>
            <strong>
              ${order.phone || "—"}
            </strong>
          </div>

          <div>
            <span>آدرس</span>
            <strong>
              ${order.address || "—"}
            </strong>
          </div>

        </div>


        <div class="admin-order-products">

          <h3>
            محصولات
          </h3>

          ${itemsHTML || `
            <div class="admin-order-item">
              اطلاعات محصول موجود نیست.
            </div>
          `}

        </div>


        ${
          order.note
            ? `
              <div class="admin-order-note">
                <span>یادداشت مشتری</span>
                <p>${order.note}</p>
              </div>
            `
            : ""
        }


        <div class="admin-order-total">

          <span>
            مبلغ سفارش
          </span>

          <strong>
            ${formatPrice(order.total)}
          </strong>

        </div>

      `;


      ordersContainer.appendChild(card);

    });

  }


  /* ================= LOGOUT ================= */

  logoutButton?.addEventListener(
    "click",
    async () => {

      await supabaseClient.auth.signOut();

      window.location.href =
        "admin.html";

    }
  );


  /* ================= REFRESH ================= */

  refreshButton?.addEventListener(
    "click",
    loadOrders
  );


  /* ================= START ================= */

  const isAdmin =
    await checkAdmin();


  if (!isAdmin) return;


  await loadOrders();

});
