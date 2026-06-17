document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Mencegah refresh halaman bawaan form

            const usernameInput = document.getElementById("username").value;
            const passwordInput = document.getElementById("password").value;

            if (usernameInput === "heri" && passwordInput === "123") {
                // Simpan sesi login ke dalam browser
                sessionStorage.setItem("isLoggedIn", "true");
                sessionStorage.setItem("username", "heri");

                alert("Login berhasil! Selamat datang, Heri.");
                
                // Keluar dari folder login menuju index.html utama (Landing Page)
                window.location.href = "../index.html"; 
            } else {
                alert("Username atau password salah!");
            }
        });
    }
});
