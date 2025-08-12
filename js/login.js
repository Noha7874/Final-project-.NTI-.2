// بيانات الدخول التجريبية
const USERNAME = "noha";
const PASSWORD = "1234";

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (email === "" || password === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill in all fields! "
        });
        return;
    }

    if (email === USERNAME && password === PASSWORD) {
        localStorage.setItem("isLoggedIn", "true");
        
        Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: "Welcome back!",
            timer: 1500,
            showConfirmButton: false
        }).then(() => {
            window.location.href = "home.html";
        });

    } else {
        Swal.fire({
            icon: "error",
            title: "Invalid Credentials",
            text: "Username or Password is incorrect!             help: username is noha , password is 1234"
        });
    }
});
