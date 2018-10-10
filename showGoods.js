

    $(document).ready(function () {
        $("#menu ul").hide();
        $("#menu li span").click(function () {
            $("#menu ul:visible").slideUp("normal");
            if (($(this).next().is("ul")) && (!$(this).next().is(":visible"))) {
                $(this).next().slideDown("normal");
            }
        });

    });


        // При нажатии на название категории выдвигается список. Когда происходит нажатие на другую категорию,
        // предыдущая закрывается.

    var milkClick = document.getElementById('milk');
    var groceryClick = document.getElementById('grocery');
    var hotDrinksClick = document.getElementById('hotDrinks');
    var meatClick = document.getElementById('meat');
    var fishClick = document.getElementById('fish');
    var snacksClick = document.getElementById('snacks');
    var drinkClick = document.getElementById('drink');
    var sauceClick = document.getElementById('sauce');
    var frozenClick = document.getElementById('frozen');
    var sweetsClick = document.getElementById('sweets');
    var foodAnimalsClick = document.getElementById('foodAnimals');
    var toiletAnimalsClick = document.getElementById('toiletAnimals');
    var careClick = document.getElementById('care');
    var goodsHomeClick = document.getElementById('goodsHome');
    var clothesClick = document.getElementById('clothes');
    var result = document.getElementById('result');

    var basketData = [] ;
    var templateData = [];
    var string;
    var milk,
        grocery,
        hotDrinks,
        meat,
        fish,
        snacks,
        drink,
        sauce,
        frozen,
        sweets,
        foodAnimals,
        toiletAnimals,
        care,
        goodsHome,
        clothes;
    var div = document.getElementById('result');

    var baskets = localStorage.getItem('basket') ;
var templates = localStorage.getItem('templates');
        $.getJSON('http://54.37.125.180:8080/marketdrive/api/products', function (data) {
            for (var key in data) {
                if (key === 'milk') {
                    milk = data[key];
                }
                else if (key === 'grocery') {
                    grocery = data[key];
                }
                else if (key === 'hotDrinks'){
                    hotDrinks = data[key];
                }
                else if (key === 'meat'){
                    meat = data[key];
                }
                else if (key === 'fish'){
                    fish = data[key];
                }
                else if (key === 'snacks'){
                    snacks = data[key];
                }
                else if (key === 'drink'){
                    drink = data[key];
                }
                else if (key === 'sauce'){
                    sauce = data[key];
                }
                else if (key === 'frozen'){
                    frozen = data[key];
                }
                else if (key === 'sweets'){
                    sweets = data[key];
                }
                else if (key === 'foodAnimals'){
                    foodAnimals = data[key];
                }
                else if (key === 'toiletAnimals'){
                    toiletAnimals = data[key];
                }
                else if (key === 'care'){
                    care = data[key];
                }
                else if (key === 'goodsHome'){
                    goodsHome = data[key];
                }
                else if (key === 'clothes'){
                    clothes = data[key];
                }
            }

        var milkOut = "";
        function showMilk() {
                for (var i = 0; i < milk.length; i++) {
                    milkOut += '<div id="goods-list">';
                    milkOut += '<img src="' + milk[i].imageUrl + '" width="200" height="150">'
                        + '<span class="name-basket">"' + milk[i].name + '"</span>'  + '<br>'
                        + '<span>"' + milk[i].brand + '"</span>' + '<br>'
                        + '<span class="price-basket">"ціна -"  '+ milk[i].price +'  грн "</span>' + '<br>';
                    if(templates){
                        milkOut += '<button class="template-add btn btn-sm btn-outline-secondary send-goods" data-id="' + milk[i].id + '"  data-name="' + milk[i].name + '"  data-price="' + milk[i].price + '">В шаблоны</button>';
                    }
                    else if(baskets){
                        milkOut += '<button class="btn-add btn btn-sm btn-outline-secondary send-goods" data-id="' + milk[i].id + '"  data-name="' + milk[i].name + '"  data-price="' + milk[i].price + '">В корзину</button>';
                    }
                    milkOut += '</div>';
                }
                $(result).html(milkOut);
            $('button.btn-add').on('click', clickBtn);
            $('button.template-add').on('click', clickBtnTemplate);
        }
        $(milkClick).on('click', showMilk);

    var groceryOut = "";
    function showGrocery() {
        for (var prop in grocery) {
            var prod = grocery[prop];
            groceryOut += '<div id="goods-list">';
            groceryOut += '<img src="' + prod.imageUrl + '" width="200" height="150">';
            groceryOut += '<span class="name-basket" data-name="' + prod.name +'">"' + prod.name + '"</span>' + '<br>';
            groceryOut += '<span>"' + prod.brand + '"</span>' + '<br>';
            groceryOut += '<span class="price-basket">"ціна -"  ' + prod.price + '  грн "</span>' + '<br>';
            if (templates) {
                groceryOut += '<button class="template-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '"  data-price="' + prod.price + '">В шаблоны</button>';
            }
            else {
                groceryOut += '<button class="btn-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-prod="' + prod.name + '"  data-price="' + prod.price + '">В корзину</button>';
            }
            groceryOut += '</div>';
        }
        $(result).html(groceryOut);
        $('button.template-add').on('click', clickBtnTemplate);
        $('button.btn-add').on('click', clickBtn);
    }
    showGrocery();
    $(groceryClick).on('click', showGrocery);

    var hotDrinksOut = "";
    function showHotDrinks() {
        for (var prop in hotDrinks) {
            var prod = hotDrinks[prop];
            hotDrinksOut += '<div id="goods-list">';
            hotDrinksOut += '<img src="' + prod.imageUrl + '" width="200" height="150">';
            hotDrinksOut += '<span class="name-basket">"' + prod.name + '"</span>'  + '<br>';
            hotDrinksOut += '<span>"' + prod.brand + '"</span>' + '<br>';
            hotDrinksOut += '<span class="price-basket">"ціна -"  '+ prod.price +'  грн "</span>' + '<br>';
            if(templates){
                hotDrinksOut += '<button type="submit" class="template-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '"  data-price="' + prod.price + '">В шаблоны</button>';
            }
            else{
                hotDrinksOut += '<button type="submit" id="send" class="btn-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '"  data-price="' + prod.price + '">В корзину</button>';
            }
            hotDrinksOut += '</div>';
        }
        $(result).html(hotDrinksOut);
        $('button.btn-add').on('click', clickBtn);
    }
    $(hotDrinksClick).on('click', showHotDrinks);



    var meatOut = "";
    function showMeat() {
        for (var prop in meat) {
            var prod = meat[prop];
            meatOut += '<div id="goods-list">';
            meatOut += '<img src="' + prod.imageUrl + '" width="200" height="150">';
            meatOut += '<span class="name-basket">"' + prod.name + '"</span>'  + '<br>';
            meatOut += '<span>"' + prod.brand + '"</span>' + '<br>';
            meatOut += '<span class="price-basket">"ціна -"  '+ prod.price +'  грн "</span>' + '<br>';
            if(templates){
                meatOut += '<button type="submit" class="template-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '"  data-price="' + prod.price + '">В шаблоны</button>';
            }
            else{
                meatOut += '<button type="submit" class="btn-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '"  data-price="' + prod.price + '">В корзину</button>';
            }
            meatOut += '</div>';
        }
        $(result).html(meatOut);
        $('button.template-add').on('click', clickBtnTemplate);
        $('button.btn-add').on('click', clickBtn);
    }
    $(meatClick).on('click', showMeat);

    var fishOut = "";
    function showFish() {
        for (var prop in fish) {
            var prod = fish[prop];
            fishOut += '<div id="goods-list">';
            fishOut += '<img src="' + prod.imageUrl + '" width="200" height="150">';
            fishOut += '<span class="name-basket">"' + prod.name + '"</span>'  + '<br>';
            fishOut += '<span>"' + prod.brand + '"</span>' + '<br>';
            fishOut += '<span class="price-basket">"ціна -"  '+ prod.price +'  грн "</span>' + '<br>';
            if(templates){
                fishOut += '<button type="submit" class="template-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '"  data-price="' + prod.price + '">В шаблоны</button>';
            }
            else{
                fishOut += '<button type="submit" class="btn-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '"  data-price="' + prod.price + '">В корзину</button>';
            }
            fishOut += '</div>';
        }
        $(result).html(fishOut);
        $('button.template-add').on('click', clickBtnTemplate);
        $('button.btn-add').on('click', clickBtn);
    }
    $(fishClick).on('click', showFish);

    var snacksOut = "";
    function showSnacks() {
        for (var prop in snacks) {
            var prod = snacks[prop];
            snacksOut += '<div id="goods-list">';
            snacksOut += '<img src="' + prod.imageUrl + '" width="200" height="150">';
            snacksOut += '<span class="name-basket">"' + prod.name + '"</span>'  + '<br>';
            snacksOut += '<span>"' + prod.brand + '"</span>' + '<br>';
            snacksOut += '<span class="price-basket">"ціна -"  '+ prod.price +'  грн "</span>' + '<br>';
            if(templates){
                snacksOut += '<button type="submit" class="template-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '"  data-price="' + prod.price + '">В шаблоны</button>';
            }
            else{
                snacksOut += '<button type="submit" class="btn-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '"  data-price="' + prod.price + '">В корзину</button>';
            }
            snacksOut += '</div>';
        }
        $(result).html(snacksOut);
        $('button.template-add').on('click', clickBtnTemplate);
        $('button.btn-add').on('click', clickBtn);
    }
    $(snacksClick).on('click', showSnacks);


    var drinkOut = "";
    function showDrink() {
        for (var prop in drink) {
            var prod = drink[prop];
            drinkOut += '<div id="goods-list">';
            drinkOut += '<img src="' + prod.imageUrl + '" width="200" height="150">';
            drinkOut += '<span class="name-basket">"' + prod.name + '"</span>'  + '<br>';
            drinkOut += '<span>"' + prod.brand + '"</span>' + '<br>';
            drinkOut += '<span class="price-basket">"ціна -"  '+ prod.price +'  грн "</span>' + '<br>';
            if(templates){
                drinkOut += '<button type="submit" class="template-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '"  data-price="' + prod.price + '">В шаблоны</button>';
            }
            else{
                drinkOut += '<button type="submit" class="btn-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '"  data-price="' + prod.price + '">В корзину</button>';
            }
            drinkOut += '</div>';
        }
        $(result).html(drinkOut);
        $('button.template-add').on('click', clickBtnTemplate);
        $('button.btn-add').on('click', clickBtn);
    }
    $(drinkClick).on('click', showDrink);

    var sauceOut = "";
    function showSauce() {
        for (var prop in sauce) {
            var prod = sauce[prop];
            sauceOut += '<div id="goods-list">';
            sauceOut += '<img src="' + prod.imageUrl + '" width="200" height="150">';
            sauceOut += '<span class="name-basket">"' + prod.name + '"</span>'  + '<br>';
            sauceOut += '<span>"' + prod.brand + '"</span>' + '<br>';
            sauceOut += '<span class="price-basket">"ціна -"  '+ prod.price +'  грн "</span>' + '<br>';
            if(templates){
                sauceOut += '<button type="submit" class="template-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '"  data-price="' + prod.price + '">В шаблоны</button>';
            }
            else{
                sauceOut += '<button type="submit" class="btn-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '"  data-price="' + prod.price + '">В корзину</button>';
            }
            sauceOut += '</div>';
        }
        $(result).html(sauceOut);
        $('button.template-add').on('click', clickBtnTemplate);
        $('button.btn-add').on('click', clickBtn);
    }
    $(sauceClick).on('click', showSauce);

    var frozenOut = "";
    function showFrozen() {
        for (var prop in frozen) {
            var prod = frozen[prop];
            frozenOut += '<div id="goods-list">';
            frozenOut += '<img src="' + prod.imageUrl + '" width="200" height="150">';
            frozenOut += '<span class="name-basket">"' + prod.name + '"</span>'  + '<br>';
            frozenOut += '<span>"' + prod.brand + '"</span>' + '<br>';
            frozenOut += '<span class="price-basket">"ціна -"  '+ prod.price +'  грн "</span>' + '<br>';
            if(templates){
                frozenOut += '<button type="submit" class="template-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '"  data-price="' + prod.price + '">В шаблоны</button>';
            }
            else{
                frozenOut += '<button type="submit" class="btn-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '"  data-price="' + prod.price + '">В корзину</button>';
            }
            frozenOut += '</div>';
        }
        $(result).html(frozenOut);
        $('button.template-add').on('click', clickBtnTemplate);
        $('button.btn-add').on('click', clickBtn);
    }
    $(frozenClick).on('click', showFrozen);

    var sweetsOut = "";
    function showSweets() {
        for (var prop in sweets) {
            var prod = sweets[prop];
            sweetsOut += '<div id="goods-list">';
            sweetsOut += '<img src="' + prod.imageUrl + '" width="200" height="150">';
            sweetsOut += '<span class="name-basket">"' + prod.name + '"</span>'  + '<br>';
            sweetsOut += '<span>"' + prod.brand + '"</span>' + '<br>';
            sweetsOut += '<span class="price-basket">"ціна -"  '+ prod.price +'  грн "</span>' + '<br>';
            if(templates){
                sweetsOut += '<button type="submit" class="template-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '"  data-price="' + prod.price + '">В шаблоны</button>';
            }
            else{
                sweetsOut += '<button type="submit" class="btn-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '"  data-price="' + prod.price + '">В корзину</button>';
            }
            sweetsOut += '</div>';
        }
        $(result).html(sweetsOut);
        $('button.template-add').on('click', clickBtnTemplate);
        $('button.btn-add').on('click', clickBtn);
    }
    $(sweetsClick).on('click', showSweets);

    var foodAnimalsOut = "";
    function showFoodAnimals() {
        for (var prop in foodAnimals) {
            var prod = foodAnimals[prop];
            foodAnimalsOut += '<div id="goods-list">';
            foodAnimalsOut += '<img src="' + prod.imageUrl + '" width="200" height="150">';
            foodAnimalsOut += '<span class="name-basket">"' + prod.name + '"</span>'  + '<br>';
            foodAnimalsOut += '<span>"' + prod.brand + '"</span>' + '<br>';
            foodAnimalsOut += '<span class="price-basket">"ціна -"  '+ prod.price +'  грн "</span>' + '<br>';
            if(templates){
                foodAnimalsOut += '<button type="submit" class="template-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '"  data-price="' + prod.price + '">В шаблоны</button>';
            }
            else{
                foodAnimalsOut += '<button type="submit" class="btn-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '"  data-price="' + prod.price + '">В корзину</button>';
            }
            foodAnimalsOut += '</div>';
        }
        $(result).html(foodAnimalsOut);
        $('button.template-add').on('click', clickBtnTemplate);
        $('button.btn-add').on('click', clickBtn);
    }
    $(foodAnimalsClick).on('click', showFoodAnimals);

    var toiletAnimalsOut = "";
    function showToiletAnimals() {
        for (var prop in toiletAnimals) {
            var prod = toiletAnimals[prop];
            toiletAnimalsOut += '<div id="goods-list">';
            toiletAnimalsOut += '<img src="' + prod.imageUrl + '" width="200" height="150">';
            toiletAnimalsOut += '<span class="name-basket">"' + prod.name + '"</span>'  + '<br>';
            toiletAnimalsOut += '<span>"' + prod.brand + '"</span>' + '<br>';
            toiletAnimalsOut += '<span class="price-basket">"ціна -"  '+ prod.price +'  грн "</span>' + '<br>';
            if(templates){
                toiletAnimalsOut += '<button type="submit" class="template-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '"  data-price="' + prod.price + '">В шаблоны</button>';
            }
            else{
                toiletAnimalsOut += '<button type="submit" class="btn-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '"  data-price="' + prod.price + '">В корзину</button>';
            }
            toiletAnimalsOut += '</div>';
        }
        $(result).html(toiletAnimalsOut);
        $('button.template-add').on('click', clickBtnTemplate);
        $('button.btn-add').on('click', clickBtn);
    }
    $(toiletAnimalsClick).on('click', showToiletAnimals);

    var careOut = "";
    function showCare() {
        for (var prop in care) {
            var prod = care[prop];
            careOut += '<div id="goods-list">';
            careOut += '<img src="' + prod.imageUrl + '" width="200" height="150">';
            careOut += '<span class="name-basket">"' + prod.name + '"</span>'  + '<br>';
            careOut += '<span>"' + prod.brand + '"</span>' + '<br>';
            careOut += '<span class="price-basket">"ціна -"  '+ prod.price +'  грн "</span>' + '<br>';
            if(templates){
                careOut += '<button type="submit" class="template-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '"  data-price="' + prod.price + '">В шаблоны</button>';
            }
            else{
                careOut += '<button type="submit" class="btn-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '"  data-price="' + prod.price + '">В корзину</button>';
            }
            careOut += '</div>';
        }
        $(result).html(careOut);
        $('button.template-add').on('click', clickBtnTemplate);
        $('button.btn-add').on('click', clickBtn);
    }
    $(careClick).on('click', showCare);

    var goodsHomeOut = "";
    function showGoodsHome() {
        for (var prop in goodsHome) {
            var prod = goodsHome[prop];
            goodsHomeOut += '<div id="goods-list">';
            goodsHomeOut += '<img src="' + prod.imageUrl + '" width="200" height="150">';
            goodsHomeOut += '<span class="name-basket">"' + prod.name + '"</span>'  + '<br>';
            goodsHomeOut += '<span>"' + prod.brand + '"</span>' + '<br>';
            goodsHomeOut += '<span class="price-basket">"ціна -"  '+ prod.price +'  грн "</span>' + '<br>';
            if(templates){
                goodsHomeOut += '<button type="submit" class="template-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '"  data-price="' + prod.price + '">В шаблоны</button>';
            }
            else{
                goodsHomeOut += '<button type="submit" class="btn-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '"  data-price="' + prod.price + '">В корзину</button>';
            }
            goodsHomeOut += '</div>';
        }
        $(result).html(goodsHomeOut);
        $('button.template-add').on('click', clickBtnTemplate);
        $('button.btn-add').on('click', clickBtn);
    }
    $(goodsHomeClick).on('click', showGoodsHome);

    var clothesOut = "";
    function showClothes () {
        for (var prop in clothes) {
            var prod = clothes[prop];
            clothesOut += '<div id="goods-list">';
            clothesOut += '<img src="' + prod.imageUrl + '" width="200" height="150">';
            clothesOut += '<span class="name-basket">"' + prod.name + '"</span>'  + '<br>';
            clothesOut += '<span>"' + prod.brand + '"</span>' + '<br>';
            clothesOut += '<span class="price-basket">"ціна -"  '+ prod.price +'  грн "</span>' + '<br>';
            if(templates){
                clothesOut += '<button type="submit" class="template-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '"  data-price="' + prod.price + '">В шаблоны</button>';
            }
            else{
                clothesOut += '<button type="submit" class="btn-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '"  data-price="' + prod.price + '">В корзину</button>';
            }
            clothesOut += '</div>';
        }
        $(result).html(clothesOut);
        $('button.template-add').on('click', clickBtnTemplate);
        $('button.btn-add').on('click', clickBtn);
    }
    $(clothesClick).on('click', showClothes);






    // $('button.btn-add').on('click',function (e) {
    //     e.preventDefault();
    //     var btn = $('button.btn-add');
    //     var data;
    //     data += btn.data('prod');
    //     console.log(data);
    // });
            //функции добавление товаров в корзину и шаблоны

            function byId(id) {
                    return _.findWhere(templateData, {id :id});
                }

                function updateTemplate() {
                    templateData = JSON.parse(localStorage.getItem('list')) || [];
                    return templateData;
                }

                //сохраняем данные в local storage
                function saveTemplate() {
                    localStorage.setItem('list', JSON.stringify(templateData));
                    return templateData;
                }

                function addTemplate(item) {
                    var oldItem;
                    updateTemplate();
                    oldItem = byId(item.id);
                    if (!oldItem) {
                        templateData.push(item);
                    } else {
                        oldItem.count = oldItem.count + item.count;
                    }
                    saveTemplate();
                    return item;
                }




function clickBtnTemplate() {
    $('#result').off('click', 'button');
    $('#result').on('click', 'button', function () {
        var $this = $(this);
        var btn = $('.template-add');
        addTemplate({
            id: +$this.data('id'),
            name: +$this.data('name'),
            price: +$this.data('price'),
            count: 1
        });
            alert('Товар добавлен в шаблоны');
    });
}

                function getById(id) {
                    return _.findWhere(basketData, {id: id});
                }

                function updateData() {
                    basketData = JSON.parse(localStorage.getItem('basket')) || [];
                    return basketData;
                }

                //сохраняем данные в local storage
                function saveData() {
                    localStorage.setItem('basket', JSON.stringify(basketData));
                    return basketData;
                }

                function add(item) {
                    var oldItem;
                    updateData();
                    oldItem = getById(item.id);
                    if (!oldItem) {
                        basketData.push(item);
                    } else {
                        oldItem.count = oldItem.count + item.count;
                    }
                    saveData();
                    return item;
                }


function clickBtn() {
    $('#result').off('click', 'button');
    $('#result').on('click', 'button', function () {
        var btn = $('#send');
        var $this = $(this);
        add({
            id: +$this.data('id'),
            name: +$this.data('prod'),
            price: +$this.data('price'),
            count: 1
        });
            alert('Товар добавлен в корзину');
    });
}

        });