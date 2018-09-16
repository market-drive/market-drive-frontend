



    function loadGoods() {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', './public/api/storage.json', true);
        xhr.send();
        //xhr.responseType = 'json';
        xhr.onload = function () {
                var response = JSON.parse(xhr.responseText);
                //var storage = xhr.response;
                //storageShow(storage);
                if (xhr.status === "200") {
                    console.log(response);
                 }
                 else {
                    console.log('FFF');
                }

            };

    } loadGoods();











