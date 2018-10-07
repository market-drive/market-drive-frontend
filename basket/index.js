'use strict';

var cart = (function ($) {
    var $body = $('body');
    var page = $body.data('page');

    var optionsBasket =_.extend({
            showBasketOnInit: true,
            showMenuBasketOnInit: true
        });
    var optionsTemplate = _.extend({
        showTemplateOnInit: false,
        showMenuTemplateOnInit: true
    });

    function init() {
        if (page === 'template') {
            template.init(optionsTemplate);
        }
        if (page === 'basket') {
            basket.init(optionsBasket);
        }
    }
    return {
        init: init
    }
})(jQuery);

jQuery(document).ready(cart.init);