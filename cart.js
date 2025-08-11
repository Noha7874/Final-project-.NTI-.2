window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});




let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItemsContainer = document.getElementById("cartItems");
const totalPriceEl = document.getElementById("totalPrice");

function renderCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p style='text-align:center; font-size:18px;'>Your cart is empty 🛒</p>";
        totalPriceEl.textContent = "$0.00";
        return;
    }

    cart.forEach((item, index) => {
        const itemEl = document.createElement("div");
        itemEl.classList.add("cart-item");

        itemEl.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
            </div>
            <button class="remove-btn" data-index="${index}">Remove</button>
        `;

        cartItemsContainer.appendChild(itemEl);
        total += parseFloat(item.price);
    });

    totalPriceEl.textContent = `$${total.toFixed(2)}`;

    document.querySelectorAll(".remove-btn").forEach(button => {
        button.addEventListener("click", function () {
            const index = this.getAttribute("data-index");
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
        });
    });
}

document.getElementById("checkoutBtn").addEventListener("click", function () {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Proceeding to checkout...");
});

renderCart();
