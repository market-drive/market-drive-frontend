function addUserName() {
    let name = localStorage.getItem('userName');
    let nameSpan = document.querySelector('.exit-block');
    if (name) {
        nameSpan.innerHTML = name;
    } else {
        return;
    }
}
addUserName();