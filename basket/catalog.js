'use strict';

var catalog = (function ($) {

    function init() {
        showCatalog();
    }
    var basketData;
    function showCatalog() {
        var template = _.template($('#catalog-template').html());
        var $goods = $('#result');
        $.getJSON('../products.json', function (data) {

            for (var key in data) {
                if (key === 'milk') {
                    basketData = data[key];
                }
            }
            $goods.html(template({goods: basketData}));
        });
    }

    return {
        init: init
    }

})(jQuery);