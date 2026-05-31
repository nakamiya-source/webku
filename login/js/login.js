document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var usernameInput = document.getElementById('username').value.trim();
    var passwordInput = document.getElementById('password').value.trim();
    var alertBox = document.getElementById('alertBox');
    
    var storedUser = localStorage.getItem('username');
    var storedPass = localStorage.getItem('password');
    
    if (storedUser && usernameInput === storedUser && passwordInput === storedPass) {
        alert('Login Berhasil!');
        window.location.href = "/webku/index.html";
    } else {
        alertBox.style.display = 'block';
        alertBox.innerText = 'Username atau Password salah!';
    }
});
