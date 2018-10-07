$(document).ready(function () {
    console.clear();
    let btnEnter = document.querySelector('.btn-block');
    btnEnter.addEventListener('click', loginRequest);
    let emailInp = document.querySelector('.enterEmail');
    let passInp = document.querySelector('.enterPass');
    emailInp.addEventListener('blur', emailValidate);
   
function emailValidate () {
    let email = document.querySelector('.enterEmail').value;
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let errorEmail = document.querySelector('.error-email');
    if(emailInp.value === "") {
        errorEmail.innerHTML = 'Введите почту';
        emailInp.style.background = 'rgba(193,66,66,0.4)';
        return false;

    } else if(!regEmail.test(email)) {
        errorEmail.innerHTML = 'Неправильный формат почты';
        emailInp.focus();
        emailInp.style.background = 'rgba(193,66,66,0.4)';
        return false;
    } 
    else {
        emailInp.style.background = '#fff';
        errorEmail.innerHTML = '';
        return true;
    }
        return;
}

function UserData (email, pass) {
    this.password = pass,
    this.email = email
    
}

function getUserData () {
    let email = document.querySelector('.enterEmail').value;
    let pass = document.querySelector('.enterPass').value;
    let userData = new UserData(email, pass);
    let userDataJson = JSON.stringify(userData);
    return userDataJson;
}

function loginRequest () {
  if (emailValidate () && passInp.value.length > 5) {
    let loginError = document.querySelector('.login-error');
    loginError.innerHTML = '';
    btnEnter.innerHTML = 'Вход...';
    
    let request = new XMLHttpRequest();
        request.open('POST', 'http://54.37.125.180:8080/marketdrive/api/login');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        // console.log(getUserData())
        request.send(getUserData());

        request.onreadystatechange = function () {
            console.log(request.status);
            if (request.readyState === 4 && request.status === 200){
                let respId = JSON.parse(request.responseText);
                addIdToLs(respId.id);
                addNameToLs (respId.name);
                console.log(request.responseText);
                btnEnter.innerHTML = 'Добро пожаловать!';
                setTimeout(function () {
                    window.location.href = 'content.html';
                },1000);
            } else if (request.readyState === 4 && request.status === 400) {
                btnEnter.innerHTML = 'Войти';
                loginError.innerHTML = 'Произошла ошибка. Пожалуйста, проверьте свой логин и пароль';
            } else if (request.readyState === 4 && request.status === 500) {
                btnEnter.innerHTML = 'Войти';
                loginError.innerHTML = 'Сервер недоступен. Повторите попытку позже';
            }
        }   
    }
}
    
function addIdToLs (id) {
    localStorage.setItem('userId', id);
}
function addNameToLs (name) {
    localStorage.setItem('userName', name);
}

})


