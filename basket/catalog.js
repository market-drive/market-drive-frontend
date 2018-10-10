'use strict';

var catalog = (function ($) {

    function init() {
        showCatalog();
    }
    var basketData;
    var goods;
    function showCatalog() {
        var template = _.template($('#catalog-template').html());
        var $goods = $('#result');
        $.getJSON('', function (data) {

            for (var key in data) {
                if (key === 'milk') {
                    basketData = data[key];
                    for(var key in basketData){
                        goods = basketData[key];
                    }
                }
            }
            $goods.html(template({goods: goods}));
        });
    }

    return {
        init: init
    }

})(jQuery);