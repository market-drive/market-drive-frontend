window.onload = function () {

    var section = document.querySelector('section');


    function loadGoods() {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'http://54.37.125.180:8080/api/storage', true);
        xhr.send(section);

        if (xhr.status !== 200 ) {
            alert (xhr.status + ':' + xhr.responseText);
        }
        else {
            console.log(xhr.responseText);
        }

    } loadGoods();

};









