document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var usernameInput = document.getElementById('username').value;
    var passwordInput = document.getElementById('password').value;
    var alertBox = document.getElementById('alertBox');
    
    // Mengambil data pengguna yang tersimpan di localStorage dari pendaftaran
    var storedUser = localStorage.getItem('username');
    var storedPass = localStorage.getItem('password');
    
    if (usernameInput === storedUser && passwordInput === storedPass) {
        alert('Login Berhasil!');
        window.location.href = '../index.html'; // Kembali ke landing page utama
    } else {
        alertBox.style.display = 'block';
        alertBox.innerText = 'Username atau Password salah!';
    }
});
