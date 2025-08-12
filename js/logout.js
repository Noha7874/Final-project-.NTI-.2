



// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("logoutBtn").addEventListener("click", function(event) {
//         event.preventDefault();
//         localStorage.removeItem("isLoggedIn");
//         window.location.href = "index.html";
//     });
// });



document.addEventListener("DOMContentLoaded", function() {
    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) { // نتأكد إن الزر موجود قبل ما نحط له الحدث
        logoutBtn.addEventListener("click", function(event) {
            event.preventDefault(); // نمنع التحويل الافتراضي للرابط
            localStorage.removeItem("isLoggedIn"); // نمسح حالة تسجيل الدخول
            window.location.href = "index.html"; // نرجع لصفحة تسجيل الدخول
        });
    }
});
