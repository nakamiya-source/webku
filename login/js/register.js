document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var usernameInput = document.getElementById('username').value;
    var emailInput = document.getElementById('email').value;
    var passwordInput = document.getElementById('password').value;
    var messageBox = document.getElementById('message');
    
    // Menyimpan data pendaftaran ke dalam memori browser (localStorage)
    localStorage.setItem('username', usernameInput);
    localStorage.setItem('email', emailInput);
    localStorage.setItem('password', passwordInput);
    
    if(messageBox) {
        messageBox.style.color = 'green';
        messageBox.innerText = 'Pendaftaran berhasil! Silakan menuju halaman login.';
    }
    
    alert('Registrasi Berhasil!');
    window.location.href = 'index.html'; // Otomatis dialihkan ke halaman login
});
