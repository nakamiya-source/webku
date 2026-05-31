(function ($) {
    "use strict";

    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
    /*==================================================================
    [ Validate & Login Logic ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function(e){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check = false;
            }
        }

        // KODE BARU: Jika validasi form sukses, jalankan pengecekan akun
        if (check === true) {
            e.preventDefault(); // Menahan halaman agar tidak refresh otomatis
            
            var usernameInput = $('#username').val().trim();
            var passwordInput = $('#password').val().trim();
            var alertBox = document.getElementById('alertBox');
            
            var storedUser = localStorage.getItem('username');
            var storedPass = localStorage.getItem('password');
            
            if (storedUser && usernameInput === storedUser && passwordInput === storedPass) {
                alert('Login Berhasil!');
                window.location.href = "/webku/index.html"; // Mengarahkan ke landing page utama
            } else {
                alertBox.style.display = 'block';
                alertBox.innerText = 'Username atau Password salah!';
            }
            return false;
        }

        return check;
    });

    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }
    
})(jQuery);
