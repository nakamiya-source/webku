document.getElementById('loginForm').addEventListener('submit', function(event) {
    // 1. Mencegah halaman login refresh otomatis
    event.preventDefault(); 

    // 2. Mengambil teks username & password dari form
    var usernameInput = document.getElementById('username').value;
    var passwordInput = document.getElementById('password').value;
    
    var alertDiv = document.getElementById('alertBox'); 

    // 3. Pengecekan data login
    if (usernameInput === "heri" && passwordInput === "123") {
        
        // Menyimpan data login di memori browser agar bisa dibaca di halaman luar
        localStorage.setItem("statusLogin", "sukses");
        localStorage.setItem("namaUser", "heri");

        // Keluar dari folder 'login' (menggunakan ../) lalu masuk ke index.html utama
        window.location.href = "../index.html"; 

    } else {
        // Jika salah, tampilkan alert merah di halaman login
        if (alertDiv) {
            alertDiv.style.display = "block";
            alertDiv.innerText = "Username atau password salah!";
        } else {
            alert("Username atau password salah!");
        }
    }
});
