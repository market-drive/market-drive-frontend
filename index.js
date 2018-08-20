// var section = document.querySelector('section');

window.onload = function () {
    var getElement = document.getElementById('milk');

    getElement.addEventListener('click', function () {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'goods.js', true);

        xhr.onload = function () {
            var section = document.querySelector('section');
                section.textContent = this.response;
        };

        xhr.send();
    },false);
};