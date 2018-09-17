let basket = {};

let res1 = document.getElementById('number1');
let res2 = document.getElementById('number2');
let res3 = document.getElementById('number3');

$.getJSON('http://54.37.125.180:8080/marketdrive/api/products', function (data) {
   var goods = data;

   // все товары
   checkBasket();
    showBasket();
    //showCart();

    function showBasket() {
        let out = "";
        let out2 = "";
        let out3 = "";

        for (key in basket){
            out += key;
            out2 += basket[key];
            out3 += basket[key]*basket[key].price;
            }
             $('td.goods-result').html(out);
             $('td.price').html(out3);
             $('td input.number').html(out2);
             res1.value = out2;
             res2.value = out2;
             res3.value = out2;
    }
    // function showCart() {
    //     let out = "";
    //     for (key in basket) {
    //         out += basket[key];
    //     }
    //     res2.value = out;
    // }
    function plusGoods() {
        let storage = $(this).attr();
        basket[storage] ++;
        showBasket();
    }
});
function checkBasket() {
    //проверка наличие корзины
    let list = localStorage.getItem('basket');
    if (list !== null) {
        basket = JSON.parse(list);
    }
}

// $.post('http://54.37.125.180:8080/marketdrive/api/purchases' , function (data) {
//     let purchaces;
//
//
//     for (key in data) {
//         purchaces = data[key];
//         //console.log(purchaces);
//     }
//     purchaces.forEach(function (item) {
//         for (key in item) {
//             if (key === 'purchace') {
//                 let purchace = item[key];
//                 console.log(purchace);
//             }
//         }
//     })
// });