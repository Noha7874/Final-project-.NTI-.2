document.getElementById("logoutBtn").addEventListener("click", function() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
});



window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // Logout functionality (from your original code)
    document.getElementById("logoutBtn").addEventListener("click", function() {
        localStorage.removeItem("isLoggedIn");
        window.location.href = "login.html";
    });

    // Add to Cart functionality
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const productCard = event.target.closest(".product-card");
            if (productCard) {
                const productId = productCard.getAttribute("data-id");
                const productName = productCard.querySelector("h3").textContent;
                const productPrice = parseFloat(productCard.querySelector(".product-price").textContent.replace('$', ''));
                const productImage = productCard.querySelector("img").src;

                const product = {
                    id: productId,
                    name: productName,
                    price: productPrice,
                    image: productImage,
                    quantity: 1
                };

                // Get existing cart items from localStorage
                let cart = JSON.parse(localStorage.getItem("cart")) || [];

                // Check if the product is already in the cart
                const existingProductIndex = cart.findIndex(item => item.id === productId);

                if (existingProductIndex > -1) {
                    // If it exists, increase the quantity
                    cart[existingProductIndex].quantity += 1;
                } else {
                    // If it doesn't, add it to the cart
                    cart.push(product);
                }

                // Save the updated cart to localStorage
                localStorage.setItem("cart", JSON.stringify(cart));

                alert(`${productName} has been added to your cart!`);
            }
        });
    });
});