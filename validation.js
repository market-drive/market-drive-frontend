window.onload = function () {


    var btn = document.getElementById('btnCheckIn');
    function formValidation() {

        var regName = /^[A-Za-z]+$/;
        var name = document.getElementById('userName').value;

        if(name === "") {
            document.getElementById('error-name').innerHTML = 'Введите имя';
            document.myForm.user.focus();
        }
        else if(regName.test(name) !== true){
            document.getElementById('error-name').innerHTML = 'Неправильно ввели имя';
            document.myForm.user.focus();
        }
        else {
            document.getElementById('error-name').innerHTML = 'Отлично ;)';
        }


    //    email


    var email = document.getElementById('email').value;
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email === "") {
        document.getElementById('error-email').innerHTML = 'Введите почту';
        document.myForm.userEmail.focus();
    } else if(!regEmail.test(email)) {
        document.getElementById('error-email').innerHTML = 'Неправильно ввели почту';
        document.myForm.userEmail.focus();
    }
    else{
        document.getElementById('error-email').innerHTML = 'Отлично ;)';
    }

    // password

    var password = document.getElementById('password').value;
    var pattern1 = /[A-Za-z]/;
    var pattern2 = /[0-9]/;
    var pattern3 = /.*[!@#$%^&*() =+_-]/;
    if (password === "") {
        document.getElementById('error-password').innerHTML = 'Введите пароль';
        document.myForm.userPassword.focus();
    }
    else if(password.length < 5) {
        document.getElementById('error-password').innerHTML = 'Не меньше 5 символов';
    }
    else if (pattern1.test(password) !== true) {
        document.getElementById('error-password').innerHTML = 'Должен содержать латинские символы как вверхнем, так и нижнем регистре';
    }
    else if (pattern2.test(password) !== true) {
        document.getElementById('error-password').innerHTML = 'Должен содержать по крайней мере одну цифру';
    }
    else if (pattern3.test(password) !== true) {
        document.getElementById('error-password').innerHTML = 'Должен содержать по крайней мере один символ';
    }
    else {
        document.getElementById('error-password').innerHTML = 'Отлично ;)';
    }


    // confirm password

    var conf = document.getElementById('repeatPassword').value;
    if (conf === "") {
        document.getElementById('error-confirm').innerHTML = 'Пароль подтверждения не введен';
    } 
    else if (conf !== password) {
        document.getElementById('error-confirm').innerHTML = 'Пароль не совпадает';
    }
    else {
        document.getElementById('error-confirm').innerHTML = 'Отлично ;)';
    }

    }
    btn.addEventListener('click', formValidation);





};