function prosesLogin() {
    var usernameInput = document.getElementById('username').value.trim();
    var passwordInput = document.getElementById('password').value.trim();
    var alertBox = document.getElementById('alertBox');
    
    // Mengambil data pendaftaran dari localStorage
    var storedUser = localStorage.getItem('username');
    var storedPass = localStorage.getItem('password');
    
    // Validasi dasar jika input kosong
    if (usernameInput === "" || passwordInput === "") {
        alertBox.style.display = 'block';
        alertBox.innerText = 'Username dan Password tidak boleh kosong!';
        return;
    }
    
    // Proses pencocokan data login
    if (storedUser && usernameInput === storedUser && passwordInput === storedPass) {
        alert('Login Berhasil!');
        window.location.href = "/webku/index.html"; // Mengarahkan kembali ke landing page utama
    } else {
        alertBox.style.display = 'block';
        alertBox.innerText = 'Username atau Password salah!';
    }
}
