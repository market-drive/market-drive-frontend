 string = [] ;
var template = (function ($) {

var btn = document.getElementById('create');
var res = document.getElementById('template');



var nameList = document.createElement('span');
function listCreate() {
    var tr = document.createElement('tr');
    var td = document.createElement('td');

    td.classList.add("template");
    var create = prompt('Введите название шаблона!');
    window.location.href = '../content.html';

    for (var i = 0; i < create.length; i++) {
            string = create;
    }
    localStorage.setItem('templates', 'true');
    nameList.innerHTML = string;
    td.appendChild(nameList);
    tr.appendChild(td);
    res.appendChild(tr);
    }
    $(btn).on('click', listCreate);



    var templateData;
    var opts = {};

    // собираем в кучу написанные функции
    function init(options) {
        initOptions(options);
        updateData();
        showTemplate();
        if (opts.showTemplateOnInit) {
            showTemplate();
        }
        _bindHandlers();
    }

    function initOptions(options) {
        var defaultOptions = {
            showTemplateOnInit: true,    //показывать ли корзину при инициализации
            showMenuTemplateOnInit: true //показывать и коичество товаров в меню
        };
        _.defaults(options || {}, defaultOptions);
        opts = _.clone(options);
    }

    //Навешивание событий
    function _bindHandlers() {
        clickChangeCountInTemplate();
        clickRemoveFromTemplate();
    }

    //получаем данные
    function updateData() {
        templateData = JSON.parse(localStorage.getItem(string)) || [];
        return templateData;
    }
    //возвращаем данные
    function getData() {
        return templateData;
    }
    //сохраняем данные в local storage
    function saveData() {
        localStorage.setItem(string, JSON.stringify(templateData));
        return templateData;
    }

    //очищаем данные
    function clearData() {
        templateData = [];
        saveData();
        return templateData;
    }
    //поиск объекта в basketData по id
    function getById(id) {
        return _.findWhere(templateData, {id :id});
    }

    //удаляем товар с корзины
    function remove(id) {
        updateData();
        templateData = _.reject(templateData, function (item) {
            return item.id === id;
        });
        saveData();
        return templateData;
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
            return sum + item.count * item.price.toFixed(2);
        },0);
    }

    //вывод корзины
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
        $('#total-basket-sum').html(getSum());
    }

    //Поик товара в корзине по id
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
                basketItem = changeCount(id, delta);
            if (basketItem.count) {
                $basketElem.find('.count').html(basketItem.count);
                $basketElem.find('.sum').html(basketItem.count * basketItem.price.toFixed(2));
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

    return  {
        init: init,
        update: updateData,
        getData: getData,
        save: saveData,
        clearData: clearData,
        getById: getById,
        remove: remove,
        changeCount: changeCount,
        getCount: getCount,
        getAllCount: getAllCount,
        getSum: getSum
    }

}) (jQuery);
