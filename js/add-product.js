window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// Preview image when selected

document.getElementById("productImage").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const preview = document.getElementById("previewImage");

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = "block";
        };
        reader.readAsDataURL(file);
    } else {
        preview.style.display = "none";
    }
});

// Handle form submission
document.getElementById("productForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("productName").value.trim();
    const price = document.getElementById("productPrice").value.trim();
    const description = document.getElementById("productDescription").value.trim();

    if (!name || !price) {
        alert("Please fill in all required fields.");
        return;
    }

    alert("✅ Product added successfully!");
    this.reset();
    document.getElementById("previewImage").style.display = "none";
});
