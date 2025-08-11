// logout.js
document.getElementById("logoutBtn").addEventListener("click", function(event) {
    // نوقف السلوك الافتراضي للينك عشان الصفحة متعملش تحديث
    event.preventDefault();

    // نمسح أي بيانات تسجيل دخول من الذاكرة
    localStorage.removeItem("isLoggedIn");

    // نرجع المستخدم لصفحة تسجيل الدخول
    window.location.href = "../e-commerce-project/index.html";
});

// document.getElementById("logoutBtn").addEventListener("click", function() {
//     localStorage.removeItem("isLoggedIn");
//     window.location.href = "../e-commerce-project/index.html";
// });
