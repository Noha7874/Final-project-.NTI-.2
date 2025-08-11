// auth.js - التحقق من تسجيل الدخول

document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    // لو مفيش تسجيل دخول، رجّع المستخدم لصفحة اللوجن
    if (isLoggedIn !== "true") {
        window.location.href = "login.html";
    }
});
