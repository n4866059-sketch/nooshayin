// ========================================
// نوش‌آیین | Shopping Cart
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    // -----------------------------
    // عناصر صفحه
    // -----------------------------
    const cartButton = document.getElementById("cartButton");
    const cartPanel = document.getElementById("cartPanel");
    const closeCart = document.getElementById("closeCart");
    const cartOverlay = document.getElementById("cartOverlay");

    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");

    // -----------------------------
    // سبد خرید
    // -----------------------------
    let cart = JSON.parse(localStorage.getItem("nooshayinCart")) || [];

    // -----------------------------
    // باز کردن سبد
    // -----------------------------
    function openCart() {
        if (cartPanel) cartPanel.classList.add("active");
        if (cartOverlay) cartOverlay.classList.add("active");
        document.body.classList.add("cart-open");
    }

    // -----------------------------
    // بستن سبد
    // -----------------------------
    function closeCartPanel() {
        if (cartPanel) cartPanel.classList.remove("active");
        if (cartOverlay) cartOverlay.classList.remove("active");
        document.body.classList.remove("cart-open");
    }

    // -----------------------------
    // فرمت قیمت
    // -----------------------------
    function formatPrice(price) {
        return Number(price).toLocaleString("fa-IR") + " تومان";
    }

    // -----------------------------
    // ذخیره سبد
    // -----------------------------
    function saveCart() {
        localStorage.setItem("nooshayinCart", JSON.stringify(cart));
    }

    // -----------------------------
    // به‌روزرسانی تعداد
    // -----------------------------
    function updateCartCount() {

        if (!cartCount) return;

        const totalItems = cart.reduce((total, item) => {
            return total + item.quantity;
        }, 0);

        cartCount.textContent = totalItems;
    }

    // -----------------------------
    // محاسبه مجموع قیمت
    // -----------------------------
    function updateCartTotal() {

        if (!cartTotal) return;

        const total = cart.reduce((sum, item) => {
            return sum + (item.price * item.quantity);
        }, 0);

        cartTotal.textContent = formatPrice(total);
    }

    // -----------------------------
    // نمایش محصولات داخل سبد
    // -----------------------------
    function renderCart() {

        if (!cartItems) return;

        cartItems.innerHTML = "";

        if (cart.length === 0) {

            cartItems.innerHTML = `
                <div class="empty-cart">
                    <div class="empty-cart-icon">🛒</div>
                    <p>سبد خرید شما خالی است.</p>
                    <span>محصول مورد علاقه‌تان را انتخاب کنید 🌿</span>
                </div>
            `;

            updateCartCount();
            updateCartTotal();
            return;
        }

        cart.forEach((item, index) => {

            const cartItem = document.createElement("div");

            cartItem.className = "cart-item";

            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${formatPrice(item.price)}</p>
                </div>

                <div class="cart-item-controls">

                    <button 
                        class="quantity-btn decrease-btn"
                        data-index="${index}">
                        −
                    </button>

                    <span>${item.quantity}</span>

                    <button 
                        class="quantity-btn increase-btn"
                        data-index="${index}">
                        +
                    </button>

                </div>

                <button 
                    class="remove-item"
                    data-index="${index}"
                    aria-label="حذف محصول">
                    ×
                </button>
            `;

            cartItems.appendChild(cartItem);
        });

        updateCartCount();
        updateCartTotal();
    }

    // -----------------------------
    // افزودن محصول به سبد
    // -----------------------------
    function addToCart(name, price) {

        const existingProduct = cart.find(item => item.name === name);

        if (existingProduct) {

            existingProduct.quantity += 1;

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
    }

    // -----------------------------
    // دکمه‌های افزودن به سبد
    // -----------------------------
    document.querySelectorAll(".add-to-cart").forEach(button => {

        button.addEventListener("click", () => {

            const name = button.dataset.name;
            const price = button.dataset.price;

            if (!name || !price) {
                console.warn("اطلاعات محصول کامل نیست.");
                return;
            }

            addToCart(name, price);
        });

    });

    // -----------------------------
    // کنترل تعداد و حذف
    // -----------------------------
    if (cartItems) {

        cartItems.addEventListener("click", (event) => {

            const button = event.target.closest("button");

            if (!button) return;

            const index = Number(button.dataset.index);

            if (Number.isNaN(index) || !cart[index]) return;

            // افزایش
            if (button.classList.contains("increase-btn")) {

                cart[index].quantity += 1;
            }

            // کاهش
            else if (button.classList.contains("decrease-btn")) {

                cart[index].quantity -= 1;

                if (cart[index].quantity <= 0) {
                    cart.splice(index, 1);
                }
            }

            // حذف
            else if (button.classList.contains("remove-item")) {

                cart.splice(index, 1);
            }

            saveCart();
            renderCart();
        });

    }

    // -----------------------------
    // باز کردن سبد
    // -----------------------------
    if (cartButton) {
        cartButton.addEventListener("click", openCart);
    }

    // -----------------------------
    // بستن سبد
    // -----------------------------
    if (closeCart) {
        closeCart.addEventListener("click", closeCartPanel);
    }

    if (cartOverlay) {
        cartOverlay.addEventListener("click", closeCartPanel);
    }

    // -----------------------------
    // بستن با دکمه Escape
    // -----------------------------
    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeCartPanel();
        }

    });

    // -----------------------------
    // اجرای اولیه
    // -----------------------------
    renderCart();

});
