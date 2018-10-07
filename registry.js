$(document).ready(function () {
    console.clear();
    let btn = document.getElementById('btnCheckIn');
    let nameInput = document.querySelector('.nameInp');
    let emailInput = document.querySelector('.emailInp');
    nameInput.addEventListener('blur', nameValidate);
    emailInput.addEventListener('blur', emailValidate);
    btn.addEventListener('click', passValidation);

    function nameValidate () {

        let regName = /^[А-Яа-яІіЇїЄєҐґ]+$/;
        let name = document.getElementById('userName');
        let errorName = document.getElementById('error-name');

        if (name.value === "") {
            errorName.innerHTML = 'Введите имя';
            name.style.background = 'rgba(193,66,66,0.4)';
        }
        else if(!regName.test(name.value)){
            errorName.innerHTML = 'Имя может содержать только символы кириллицы без пробелов';
            name.focus();
            name.style.background = 'rgba(193,66,66,0.4)';
        }
        else {
            name.style.background = '#fff';
            errorName.innerHTML = '';
        }
    }

       //    email
    function emailValidate () {
        let email = document.getElementById('email').value;
        let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let emailInp = document.querySelector('.emailInp');
        let errorEmail = document.querySelector('.error-email');

        if(email === "") {
            errorEmail.innerHTML = 'Введите почту';
            emailInp.style.background = 'rgba(193,66,66,0.4)';

        } else if(!regEmail.test(email)) {
            errorEmail.innerHTML = 'Неправильный формат почты';
            emailInp.focus();
            emailInp.style.background = 'rgba(193,66,66,0.4)';
        } 
        else {
            emailInp.style.background = '#fff';
            errorEmail.innerHTML = '';
        }
    }

function passValidation() {

        passValidate();
            // password
    function passValidate () {
        let password = document.querySelector('.passInp');
        let errorPass = document.querySelector('.error-password');
        let pattern1 = /[A-Za-z]/;
        let pattern2 = /[0-9]/;
        let pattern3 = /.*[!@#$%^&*() =+_-]/;

            if (password.value === "") {
                errorPass.innerHTML = 'Введите пароль';
                password.focus();
            } else if(password.value.length >= 1 && password.value.length < 5) {
                errorPass.innerHTML = 'Минимальная длина пароля - 5 символов';
                return;
            } 
            else {
                errorPass.innerHTML = '';
                comparePass();
            }
    }

    // confirm password
    function comparePass () {
        let passRepeat = document.querySelector('.passRepeat');
        let password = document.querySelector('.passInp');
        let errorPass = document.querySelector('.error-confirm');
        
        if (passRepeat.value === "") {
                errorPass.innerHTML = 'Пароль подтверждения не введен';
            } else if (passRepeat.value !== password.value) {
                errorPass.innerHTML = 'Пароли не совпадают';
            } 
            else {
                errorPass.innerHTML = '';
                let data = createUserReg ();
                registryRequest(data);
                btn.innerHTML = 'Регистрация...';
                // document.getElementById('error-confirm').innerHTML = 'Отлично ;)';
            }
        }
    }

function User (name, pass, email) {
    this.name = name,
    this.password = pass,
    this.email = email
}

function createUserReg () {
    let userName = document.querySelector('.nameInp').value;
    let userPass = document.querySelector('.passInp').value;
    let userEmail = document.querySelector('.emailInp').value;
    let user = new User(userName, userPass, userEmail);
    let userJson = JSON.stringify(user);
    return userJson;
}

function registryRequest (data) {
    let errorEmail = document.querySelector('.error-email');
    let emailInput = document.querySelector('.emailInp');
    let errorConf = document.querySelector('.error-confirm');

    let request = new XMLHttpRequest();
    request.open('POST', 'http://54.37.125.180:8080/marketdrive/api/register');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    request.send(data);

    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200){
            let idUser = JSON.parse(request.responseText).id;
            let userName = document.querySelector('.nameInp').value;
            addNameToLs(userName);
            addIdToLs(idUser);
            btn.innerHTML = 'Добро пожаловать!';
            window.location.href = 'content.html';

        } else if (request.readyState === 4 && request.status === 409) {
            emailInput.focus();
            btn.innerHTML = 'Создать аккаунт'
            emailInput.style.background = 'rgba(193,66,66,0.4)';
            errorEmail.innerHTML = `Пользователь с таким e-mail уже зарегистрирован попробуйте <a href="login.html" class="aEmailError">Войти</a>`
            emailInput.removeEventListener('blur', emailValidate);
            errorConf.innerHTML = '';
            emailInput.addEventListener('change', function (){
                errorEmail.innerHTML = '';
                emailInput.addEventListener('blur', emailValidate);
            });
        } else {
            btn.innerHTML = 'Создать аккаунт';
            errorConf.innerHTML = 'Сервер недоступен. Повторите попытку позже';
        }
    }
}

function addUserNameToHeader () {
    let name = localStorage.getItem('userName');
    if (name) {
        // добавить имя
        // кнопку Выход;
    } else {
        // скрыть кнопку "История";
        // кнопку Вход;
    }

    // получить контейнер
    // контейнер.innerHTML = name;
}

function addIdToLs (id) {
    localStorage.setItem('userId', id);
}

function addNameToLs (name) {
    localStorage.setItem('userName', name);
}

})
function signOut () {
    locStorage.clear();
}

// написать функцию Sign out
 
// function checkLocalStorage () {
//    let locStorage = localStorage.gerItem('userId');
//    if (locStorage) {

//    }
// }


// Перезалил на сервер наш проект с исправлеными регистрацией и авторизацией. 
// Теперь уникальность юзера будет определяться не по username, а по email.
// При регистрации по адресу
// http://54.37.125.180:8080/marketdrive/api/register
// от вас объект
// {"name":"Petrakov","password":"Petrakov","email":"petrakov@gmail.com"}
// от нас либо
// {"success":true,"id":28}
// либо
// {"success":false,"id":0,"reason":"Пользователь с таким e-mail уже существует."}
// При авторизации по адресу
// http://54.37.125.180:8080/marketdrive/api/login
// от вас
// {"password":"89745","email":"semenov@gmail.com"}
// Ответ либо
// {"success":true,"id":22}
// либо
// {"success":false,"id":0,"reason":"Incorrect email or password"}

