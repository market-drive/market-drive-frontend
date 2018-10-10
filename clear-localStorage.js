var btn = document.querySelector('exit-link');
function clear() {
    localStorage.clear();
}
$(btn).on('click', clear);