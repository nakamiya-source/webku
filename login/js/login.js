document.getElementById('loginForm').addEventListener('submit', function(event) {
    // 1. Mencegah halaman refresh otomatis saat tombol diklik
    event.preventDefault(); 

    // 2. Mengambil teks yang diketik pengguna di kolom username & password
    var usernameInput = document.getElementById('username').value;
    var passwordInput = document.getElementById('password').value;
    
    // 3. Ambil elemen alert untuk menampilkan pesan kesalahan jika gagal
    // Catatan: Pastikan di index.html Anda menggunakan id="alertBox"
    var alertDiv = document.getElementById('alertBox'); 

    // 4. Logika Pengecekan Kredensial (Username: heri, Password: 123)
    if (usernameInput === "heri" && passwordInput === "123") {
        
        // Menyimpan status login di browser agar nama user bisa muncul di halaman berikutnya
        localStorage.setItem("statusLogin", "sukses");
        localStorage.setItem("namaUser", "heri");

        // Alihkan halaman ke landingpage.html (sesuaikan nama file Anda)
        window.location.href = "landingpage.html"; 

    } else {
        // Jika salah, tampilkan kotak alert bawaan atau alert HTML Anda
        if (alertDiv) {
            alertDiv.style.display = "block";
            alertDiv.className = "alert alert-danger"; // Menambahkan kelas warna merah jika pakai bootstrap
            alertDiv.innerText = "Username atau password salah!";
        } else {
            alert("Username atau password salah!");
        }
    }
});
