document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var usernameInput = document.getElementById('username').value.trim();
    var emailInput = document.getElementById('email').value.trim();
    var passwordInput = document.getElementById('password').value.trim();
    
    localStorage.setItem('username', usernameInput);
    localStorage.setItem('email', emailInput);
    localStorage.setItem('password', passwordInput);
    
    alert('Registrasi Berhasil! Anda akan dialihkan ke halaman login.');
    window.location.href = "/webku/login/index.html";
});
