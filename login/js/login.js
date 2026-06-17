// Menunggu dokumen HTML selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    // Menangani aksi ketika form login dikirim (submit)
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Mencegah halaman refresh otomatis

        // Mengambil nilai dari input username dan password
        const usernameInput = document.getElementById("username").value;
        const passwordInput = document.getElementById("password").value;

        // Validasi kecocokan data akun
        if (usernameInput === "heri" && passwordInput === "123") {
            // Menyimpan status login dan nama user di browser (Session Storage)
            sessionStorage.setItem("isLoggedIn", "true");
            sessionStorage.setItem("username", "heri");

            alert("Login berhasil! Selamat datang, Heri.");
            
            // Mengarahkan user ke halaman utama/landing page
            window.location.href = "index.html"; 
        } else {
            alert("Username atau password salah!");
        }
    });
});
