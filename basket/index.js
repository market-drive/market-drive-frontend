'use strict';

var cart = (function ($) {
    var $body = $('body');
    var page = $body.data('page');
   // var btn = document.getElementById('push-to-basket');


    var optionsBasket = _.extend({
            showBasketOnInit: true,
            showTemplateInit: false
        });
    var optionsTemplate = _.extend({
        showTemplateOnInit: true,
        showTemplateInit: false
    });
    var optionsTemp = _.extend({
        showBasketOnInit:false,
       showTemplateInit:true
    });

    function init() {
        if (page === 'template') {
            template.init(optionsTemplate);
            //template.init(optionsTemp)
        }
        if (page === 'basket') {
            basket.init(optionsBasket);
            basket.init(optionsTemp);
        }
        // if($(btn).click()){
        //     basket.init(optionsTemp);
        // }

    }
    return {
        init: init
    }
})(jQuery);

jQuery(document).ready(cart.init);