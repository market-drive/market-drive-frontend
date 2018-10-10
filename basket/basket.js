'use strict';


    var basket = (function ($) {
        var basketData;
        var opts = {};

       // собираем в кучу написанные функции
        function init(options) {
            initOptions(options);
            updateData();
            dataUpdate();
            showBasket();
            renderBasket();
            if (opts.showBasketOnInit) {
                showBasket();
            }
             if(opts.showTemplateInit) {
                renderBasket();
            }
            _bindHandlers();
        }

        function initOptions(options) {
            var defaultOptions = {
                showBasketOnInit: true,    //показывать ли корзину при инициализации
                showMenuBasketOnInit: true
            };
            _.defaults(options || {}, defaultOptions);
            opts = _.clone(options);
        }

        //Навешивание событий
        function _bindHandlers() {
            clickChangeCountInBasket();
            clickRemoveFromBasket();
            clickRemoveFromBasketData();
            clickChangeCountInBasketData();
        }

        var templateGoods;
        var pushed = document.getElementById('push-to-basket');
        //получаем данные с localStorage
            templateGoods = JSON.parse(localStorage.getItem('list'));
        for(var key in templateGoods) {
            var good = templateGoods[key];
        }
        var basketGoods = JSON.parse(localStorage.getItem('basket'));
        var basketItem = document.getElementById('basket-item');
        var $body = $('body');
        function renderBasket() {
            basketGoods.push(good);
                var template = _.template($('#basket-template').html()),
                    data = {
                        goods: basketGoods
                    };
                $('#basket-item').html(template(data));
            totalItem();
        }
        $(pushed).on('click',renderBasket);

        function totalItem() {
            $('#total-basket-sum').html(getSumData());
        }


        //получаем данные
        function dataUpdate() {
            basketGoods = JSON.parse(localStorage.getItem('list')) || [];
            return basketGoods;
        }
        //возвращаем данные
        function dataGet() {
            return basketGoods;
        }
        //сохраняем данные в local storage
        function dataSave() {
            localStorage.setItem('list', JSON.stringify(basketGoods));
            return basketGoods;
        }

        //очищаем данные
        function dataClear() {
            basketGoods = [];
            dataSave();
            return basketGoods;
        }
        //поиск объекта в basketData по id
        function getId(id) {
            return _.findWhere(basketGoods, {id :id});
        }

        //удаляем товар с корзины
        function removeData(id) {
            dataUpdate();
            basketGoods = _.reject(basketGoods, function (item) {
                return item.id === id;
            });
            dataSave();
            return basketGoods;
        }
        //изменение количества товара в корзине
        function  changeCountData (id, delta) {
            var item;
            dataUpdate();
            item = getId(id);
            if (item) {
                item.count = item.count + delta;
                if (item.count < 1) {
                    removeData(id);
                }
                dataSave();
            }
            // return getById(id) || {};
            return _.findWhere(basketGoods, {id:id}) || {};
        }
        //возварщаем количество товаров
        function getCountData() {
            return _.size(basketGoods);
        }
        //возваращаем общее количество товаров
        function getAllCountData() {
            return _.reduce(basketGoods, function (sum, item) {
                return sum + item.count
            },0);
        }
        //возвращаем общую сумму товаров
        function getSumData() {
            return _.reduce(basketGoods, function (sum, item) {
                return sum + item.count * item.price;
            },0);
        }

        //Поик товара в корзине по id
        function findBasketIdData(id) {
            return $( '.add-basket-item' + '[' + 'data-id' + '="' + id + '"]');
        }


        //меняем количество товаров в корзине
        var changeData = document.getElementsByClassName('change-count');
        function clickChangeCountInBasketData() {
            $(change).on('click', change, function (e) {
                var $this = $(this),
                    id = +$this.attr('data-id'),
                    delta = +$this.attr('data-delta'),
                    $basketElem = findBasketIdData(id),
                    basketItem = changeCountData(id, delta);
                if (basketItem.count) {
                    $basketElem.find('.count').html(basketItem.count);
                    $basketElem.find('.sum').html(basketItem.count * basketItem.price);
                } else {
                    $basketElem.removeData();
                }
                //showMenuBasket();
                totalBasketSum();
                // totalItem();
            });
        }

        //удаляем товар из корзины
        function clickRemoveFromBasketData () {
            var removeBasket = document.getElementsByClassName('remove-form-basket');
            $('.btn-delete').on('click', removeBasket, function (e) {
                if (!confirm('Удалить товар из корзины?')) return false;
                var $this = $(this),
                    id = +$this.attr('data-id'),
                    $basketElem = findBasketIdData(id);
                removeData(id);
                $basketElem.removeData();
                //showMenuBasket();
                totalBasketSum();
                //totalItem();
            });
        }






















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
                return sum + item.count * item.price;
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
               // totalItem();
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
                //totalItem();
            });
        }





        return  {
            init: init,
            update: updateData,
            getData: getData,
            dataGet:dataGet,
            save: saveData,
            dataSave:dataSave,
            clearData: clearData,
            dataClear:dataClear,
            getById: getById,
            getId:getId,
            remove: remove,
            removeData:removeData,
            changeCount: changeCount,
            changeCountData:changeCountData,
            getCount: getCount,
            getCountData:getCountData,
            getAllCount: getAllCount,
            getAllCountData:getAllCountData,
            getSum: getSum,
            getSumData:getSumData
        }

    })(jQuery);