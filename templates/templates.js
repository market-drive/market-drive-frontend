




var template = (function ($) {
    var templateData;
    var opts = {};

    // собираем в кучу написанные функции
    function init(options) {
        initOptions(options);
        updateData();
        // showTemplate();
        // renderBasket();
        if (opts.showTemplateOnInit) {
            showTemplate();
        }
        // if(opts.showTemplateInit){
        //     renderBasket();
        // }
        _bindHandlers();
    }

    function initOptions(options) {
        var defaultOptions = {
            showTemplateOnInit: true,    //показывать ли шаблоны при инициализации
            showTemplateInit: true
        };
        _.defaults(options || {}, defaultOptions);
        opts = _.clone(options);
    }

    //Навешивание событий
    function _bindHandlers() {
        clickChangeCountInTemplate();
        clickRemoveFromTemplate();
    }



    var btn = document.getElementById('create');
    var res = document.getElementById('templates-list');
    var add = document.getElementById('add');


    var string,
        tr,
        td,
        nameList,
        create;
    var out = "";

    //var list = document.getElementById('list');

    function createList() {
        nameList = document.createElement('span');
        nameList.classList.add('spanStyle');
        create = prompt('Введите название шаблона!');
        localStorage.setItem(create, JSON.stringify([]));
        localStorage.setItem('templates', 'true');
        window.location.href = '../content.html';
        nameList.innerHTML = create;
        res.appendChild(nameList);

    }
    $(btn).on('click', createList);

    //res.addEventListener('click', listCreate);

    function saveList() {
        var good = localStorage.getItem(key,value);
        good.forEach()

    }



// function listCreate() {
//          //tr = document.createElement('tr');
//          //td = document.createElement('td');
//          nameList = document.createElement('span');
//          nameList.classList = 'list';
//          create = prompt('Введите название шаблона!');
//
//
//     for (var i = 0; i < create.length; i++) {
//         string = create;
//     }
//     localStorage.setItem('templates', 'true');
//     //localStorage.setItem(out, JSON.stringify([]));
//     //window.localStorage.setItem(string ,JSON.stringify([]));
//     nameList.innerHTML = string;
//
//     //window.location.href = '../content.html';
//     // td.appendChild(nameList);
//     // tr.appendChild(td);
//       res.appendChild(nameList);
//     }
//     $(btn).on('click', listCreate);



    // Storage.prototype.setObject = function (key, value) {
    //      this.setItem(key, JSON.stringify(value));
    // };
    //
    // Storage.prototype.getObject = function (key) {
    //     var value = this.getItem(key);
    //     return value && JSON.parse(value);
    // };







    // var push = document.getElementById('push-to-basket');
    // var templateGoods = JSON.parse(localStorage.getItem('list'));
    // var basketGoods = localStorage.getItem('basket');
    // var basketItem = document.getElementById('basket-item');
    // function renderBasket() {
    //     var template = _.template($('#basket-template').html()),
    //         data = {
    //             goods: templateGoods,
    //         };
    //     basketGoods.push(templateGoods);
    //     $('#basket-item').html(template(data));
    //     totalItem();
    // }
    // $(push).on('click',renderBasket);
    //
    // function totalItem() {
    //     $('#total-template-sum').html(getSum());
    // }

    //получаем данные
    function updateData() {
        templateData = JSON.parse(localStorage.getItem('list')) || [];
        return templateData;
    }
    //возвращаем данные
    function getData() {
        return templateData;
    }
    //сохраняем данные в local storage
    function updateTemplate() {
        localStorage.setItem('list', JSON.stringify(templateData));
        return templateData;
    }

    //очищаем данные
    function clearData() {
        templateData = [];
        updateTemplate();
        return templateData;
    }
    //поиск объекта в templateData по id
    function byId(id) {
        return _.findWhere(templateData, {id :id});
    }

    //удаляем товар с корзины
    function remove(id) {
        updateData();
        templateData = _.reject(templateData, function (item) {
            return item.id === id;
        });
        updateTemplate();
        return templateData;
    }
    //изменение количества товара в корзине
    function  changeCount (id, delta) {
        var item;
        updateData();
        item = byId(id);
        if (item) {
            item.count = item.count + delta;
            if (item.count < 1) {
                remove(id);
            }
            updateTemplate();
        }
        // return getById(id) || {};
        return _.findWhere(templateData, {id:id}) || {};
    }
    //возварщаем количество товаров
    function getCount() {
        return _.size(templateData);
    }
    //возваращаем общее количество товаров
    function getAllCount() {
        return _.reduce(templateData, function (sum, item) {
            return sum + item.count
        },0);
    }
    //возвращаем общую сумму товаров
    function getSum() {
        return _.reduce(templateData, function (sum, item) {
            return sum + item.count * item.price;
        },0);
    }

    //вывод шаблона
    function showTemplate() {
        var template = _.template($('#templates').html()),
            data = {
                goods: templateData
            };
        $('#template-item').html(template(data));
        totalTemplateSum();
    }

    //Показ общей суммы товаров в корзине
    function totalTemplateSum() {
        $('#total-template-sum').html(getSum());
    }

    //Поик товара в шаблонах по id
    function findTemplateId(id) {
        return $( '.add-template-item' + '[' + 'data-id' + '="' + id + '"]');
    }


    //меняем количество товаров в корзине
    var change = document.getElementsByClassName('change-count');
    function clickChangeCountInTemplate() {
        $(change).on('click', change, function (e) {
            var $this = $(this),
                id = +$this.attr('data-id'),
                delta = +$this.attr('data-delta'),
                $basketElem = findTemplateId(id),
                templateItem = changeCount(id, delta);
            if (templateItem.count) {
                $basketElem.find('.count').html(templateItem.count);
                $basketElem.find('.sum').html(templateItem.count * templateItem.price);
            } else {
                $basketElem.remove();
            }
            totalTemplateSum();
        });
    }

    //удаляем товар из корзины
    function clickRemoveFromTemplate () {
        var removeBasket = document.getElementsByClassName('remove-form-template');
        $('.btn-delete').on('click', removeBasket, function (e) {
            if (!confirm('Удалить товар из шаблона?')) return false;
            var $this = $(this),
                id = +$this.attr('data-id'),
                $basketElem = findTemplateId(id);
            remove(id);
            $basketElem.remove();
            totalTemplateSum();
        });
    }
    //
    // var getBasket = document.getElementById('basket-item');
    // var push = document.getElementById('push-to-basket');
    // var get = localStorage.getItem('list');
    //
    // function addBasket() {
    //     var template = _.template($('#basket-template').html()),
    //         data = {
    //         goods: get
    //         };
    //     $('#basket-item').html(template(data));
    // }
    // $(push).on('click',addBasket);

    return  {
        init: init,
        update: updateData,
        getData: getData,
        save: updateTemplate,
        clearData: clearData,
        byId: byId,
        remove: remove,
        changeCount: changeCount,
        getCount: getCount,
        getAllCount: getAllCount,
        getSum: getSum
    }

}) (jQuery);
