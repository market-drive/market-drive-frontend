'use strict';

var cart = (function ($) {
    var $body = $('body');
    var page = $body.data('page');

    var optionsBasket =_.extend({
            showBasketOnInit: true,
            showMenuBasketOnInit: true
        });
    // var optionsCatalog = _.extend({
    //     showBasketOnInit: false,
    //     showMenuBasketOnInit: true
    // });

    function init() {
        // if (page === 'catalog') {
        //     catalog.init();
        //     cart.init(optionsCatalog)
        // }
        if (page === 'basket') {
            basket.init(optionsBasket);
        }
    }
    return {
        init: init
    }
})(jQuery);

jQuery(document).ready(cart.init);