'use strict';


    var basket = (function ($) {
        var basketData;
        var opts = {};

       // собираем в кучу написанные функции
        function init(options) {
            initOptions(options);
            updateData();
            showBasket();
            if (opts.showBasketOnInit) {
                showBasket();
            }
            _bindHandlers();
        }

        function initOptions(options) {
            var defaultOptions = {
                showBasketOnInit: true,    //показывать ли корзину при инициализации
                showMenuBasketOnInit: true //показывать и коичество товаров в меню
            };
            _.defaults(options || {}, defaultOptions);
            opts = _.clone(options);
        }

        //Навешивание событий
        function _bindHandlers() {
            // clickAddBtn();
            clickChangeCountInBasket();
            clickRemoveFromBasket();
        }

        // var milkClick = document.getElementById('milk');
        // var result = document.getElementById('result');
        //
        //
        // var milk;
        // //var div = document.getElementById('result');
        //
        // $.getJSON('products.json', function (data) {
        //
        //
        //
        //     // BTN.setAttribute("id", "send-goods");
        //     // '<button class="btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '" data-price="' + prod.price + '">В корзину</button>';
        //     // '<button>' + BTN + '</button>';
        //     for (var key in data) {
        //         if (key === 'milk') {
        //             milk = data[key];
        //         }
        //         else if (key === 'grocery') {
        //         }
        //     }
        // });
        // var milkOut = "";
        // function showMilk() {
        //
        //     for (var prop in milk) {
        //         var prod = milk[prop];
        //         milkOut += '<div id="goods-list">';
        //         milkOut += '<img src="' + prod.imageUrl + '" width="200" height="150">'
        //             + '<span class="name-basket">"' + prod.name + '"</span>'  + '<br>'
        //             + '<span>"' + prod.brand + '"</span>' + '<br>'
        //             + '<span class="price-basket">"ціна -"  '+ prod.price +'  грн "</span>' + '<br>';
        //         milkOut += '<button type="submit" class="btn-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '" data-price="' + prod.price + '">В корзину</button>';
        //         milkOut += '</div>';
        //     }
        //     result.innerHTML = milkOut;
        //     $('button').on('click', clickAddBtn);
        //
        // }
        // $(milkClick).on('click', showMilk);
        // //milkClick.addEventListener('click', showMilk);





        //получаем данные
        function updateData() {
            basketData = JSON.parse(localStorage.getItem('basket')) || [];
            return basketData;
        }
        //возвращаем данные
        function getData() {
            return basketData;
        }
        //сохраняем данные в local storage
        function saveData() {
            localStorage.setItem('basket', JSON.stringify(basketData));
            return basketData;
        }



        //очищаем данные
        function clearData() {
            basketData = [];
            saveData();
            return basketData;
        }
        //поиск объекта в basketData по id
        function getById(id) {
            return _.findWhere(basketData, {id :id});
        }
        //добаляем товар в корзину
        // function add(item) {
        //     var oldItem;
        //     updateData();
        //     oldItem = getById(item.id);
        //     if (!oldItem) {
        //         basketData.push(item);
        //     } else {
        //         oldItem.count = oldItem.count + item.count;
        //     }
        //     saveData();
        //     return item;
        // }
        //удаляем товар с корзины
        function remove(id) {
            updateData();
            basketData = _.reject(basketData, function (item) {
                return item.id === id;
            });
            saveData();
            return basketData;
        }
        //изменение количества товара в корзине
        function  changeCount (id, delta) {
            var item;
            updateData();
            item = getById(id);
            if (item) {
                item.count = item.count + delta;
                if (item.count < 1) {
                    remove(id);
                }
                saveData();
            }
            // return getById(id) || {};
            return _.findWhere(basketData, {id:id}) || {};
        }
        //возварщаем количество товаров
        function getCount() {
            return _.size(basketData);
        }
        //возваращаем общее количество товаров
        function getAllCount() {
            return _.reduce(basketData, function (sum, item) {
                return sum + item.count
            },0);
        }
        //возвращаем общую сумму товаров
        function getSum() {
            return _.reduce(basketData, function (sum, item) {
                return sum + item.count * item.price
            },0);
        }

        //вывод корзины
        function showBasket() {
            var template = _.template($('#basket-template').html()),
                data = {
                    goods: basketData
                };
            $('#basket-item').html(template(data));
            totalBasketSum();
        }

        //вывод количества товаров в подпункт
        function showMenuBasket() {
            var countAll = getAllCount();
            $('#total-basket-count').html(countAll !== 0 ? countAll : '');
        }


        //Показ общей суммы товаров в корзине
        function totalBasketSum() {
            $('#total-basket-sum').html(getSum());
        }

        //Поик товара в корзине по id
        function findBasketId(id) {
            return $( '.add-basket-item' + '[' + 'data-id' + '="' + id + '"]');
        }

        //Добавление в корзину
       //  let elBasketItem = document.getElementById('basket-item');
       //  let dataId = $(this).attr('data-id');
       //  let dataName = $(this).attr('data-name');
       //  let dataPrice = $(this).attr('data-price');
       //  var Btn = document.getElementsByClassName('good');
       //  var div = document.getElementById('result');
       // // var click = document.querySelector('button');
       //  var span1 = document.getElementsByClassName('name-basket');
       //  var button = document.querySelector('btn-add');
       //  var click = document.getElementsByClassName('send-goods');
       //
       //  function clickAddBtn() {
       //      var section = document.getElementsByClassName('good');
       //      var div = document.getElementById('result');
       //
       //      $(milkOut).on('click', function (e) {
       //          var $this = $(this);
       //          add({
       //              id: +span1,
       //              name: +$this.attr('data-name'),
       //              price: +$this.attr('data-price'),
       //              count: 1
       //          });
       //          showMenuBasket();
       //          alert('Товар добавлен в корзину');
       //      });
       //  }
        //меняем количество товаров в корзине
        var change = document.getElementsByClassName('change-count');
        function clickChangeCountInBasket() {
            $(change).on('click', change, function (e) {
                var $this = $(this),
                    id = +$this.attr('data-id'),
                    delta = +$this.attr('data-delta'),
                    $basketElem = findBasketId(id),
                    basketItem = changeCount(id, delta);
                if (basketItem.count) {
                    $basketElem.find('.count').html(basketItem.count);
                    $basketElem.find('.sum').html(basketItem.count * basketItem.price);
                } else {
                    $basketElem.remove();
                }
                showMenuBasket();
                totalBasketSum();
            });
        }

        //удаляем товар из корзины
        function clickRemoveFromBasket () {
            var removeBasket = document.getElementsByClassName('remove-form-basket');
            $('.btn-delete').on('click', removeBasket, function (e) {
                if (!confirm('Удалить товар из корзины?')) return false;
                var $this = $(this),
                    id = +$this.attr('data-id'),
                    $basketElem = findBasketId(id);
                remove(id);
                $basketElem.remove();
                showMenuBasket();
                totalBasketSum();
            });
        }





        return  {
            init: init,
            update: updateData,
            getData: getData,
            save: saveData,
            clearData: clearData,
            getById: getById,
            //add: add,
            remove: remove,
            changeCount: changeCount,
            getCount: getCount,
            getAllCount: getAllCount,
            getSum: getSum
        }

    }) (jQuery);










//     let goods = data;  // все товары
//     checkBasket();
//     showBasket();
//
//     // showCart();
//
//     function showBasket() {
//         let out = "";
//         let out2 = "";
//         let out3 = "";
//
//         for (prop in basket) {
//             let prod = basket[prop];
//             out += prod.name;
//         }
//         $('td.goods-result').html(out);
//         $('td.price').html(out3);
//         $('td input.number').html(out2);
//         res1.value = out2;
//         res2.value = out2;
//         res3.value = out2;
//     }
//
//
//
//     // function showCart() {
//     //     let out = "";
//     //     for (key in basket) {
//     //         out += basket[key];
//     //     }
//     //     res2.value = out;
//     // }
//     function plusGoods() {
//         let storage = $(this).attr();
//         basket[storage] ++;
//         showBasket();
//     }
// });
// function checkBasket() {
//     //проверка наличие корзины
//     let list = localStorage.getItem('basket');
//     if (list !== null) {
//         basket = JSON.parse(list);
//     }
// }

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