document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); 

        const usernameInput = document.getElementById("username").value;
        const passwordInput = document.getElementById("password").value;

        if (usernameInput === "heri" && passwordInput === "123") {
            // Simpan data ke browser agar halaman tujuan tahu user sudah login
            sessionStorage.setItem("isLoggedIn", "true");
            sessionStorage.setItem("username", "heri");

            alert("Login berhasil! Selamat datang, Heri.");
            
            // UBAH KE HALAMAN LANDING PAGE ANDA DI SINI
            window.location.href = "landingpage.html"; 
        } else {
            alert("Username atau password salah!");
        }
    });
});
