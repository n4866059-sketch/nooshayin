/* =====================================================
   NOOSH-AYIN
   ADMIN LOGIN
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

  const form =
    document.getElementById("adminLoginForm");

  const emailInput =
    document.getElementById("adminEmail");

  const passwordInput =
    document.getElementById("adminPassword");

  const button =
    document.getElementById("adminLoginButton");

  const message =
    document.getElementById("adminLoginMessage");


  /* ================= LOGIN ================= */

  form?.addEventListener("submit", async (event) => {

    event.preventDefault();

    const email =
      emailInput.value.trim();

    const password =
      passwordInput.value;


    if (!email || !password) {

      message.textContent =
        "لطفاً ایمیل و رمز عبور را وارد کنید.";

      return;
    }


    button.disabled = true;

    button.textContent =
      "در حال ورود...";

    message.textContent = "";


    try {

      const { data, error } =
        await supabaseClient.auth.signInWithPassword({
          email: email,
          password: password
        });


      if (error) {

        console.error(
          "Login error:",
          error
        );

        throw error;
      }


      if (!data?.user) {

        throw new Error(
          "کاربر دریافت نشد."
        );
      }


      /* ================= SUCCESS ================= */

      window.location.href =
        "admin-dashboard.html";

    }

    catch (error) {

      console.error(
        "Admin login error:",
        error
      );

      message.textContent =
        "ایمیل یا رمز عبور صحیح نیست.";

      button.disabled = false;

      button.textContent =
        "ورود به پنل";
    }

  });

});
