function prosesRegister() {
    var usernameInput = document.getElementById('username').value.trim();
    var emailInput = document.getElementById('email').value.trim();
    var passwordInput = document.getElementById('password').value.trim();
    
    // Validasi jika ada kolom yang kosong
    if (usernameInput === "" || emailInput === "" || passwordInput === "") {
        alert('Semua kolom pendaftaran wajib diisi!');
        return;
    }
    
    // Menyimpan data pendaftaran ke dalam localStorage browser
    localStorage.setItem('username', usernameInput);
    localStorage.setItem('email', emailInput);
    localStorage.setItem('password', passwordInput);
    
    // Menampilkan pesan sukses
    alert('Registrasi Berhasil! Anda akan dialihkan ke halaman login.');
    
    // Mengalihkan halaman ke form login utama secara aman
    window.location.href = "/webku/login/index.html";
}
