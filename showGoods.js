window.onload = function () {

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

    let milkClick = document.getElementById('milk');
    let groceryClick = document.getElementById('grocery');
    let hotDrinksClick = document.getElementById('hotDrinks');
    let meatClick = document.getElementById('meat');
    let fishClick = document.getElementById('fish');
    let snacksClick = document.getElementById('snacks');
    let drinkClick = document.getElementById('drink');
    let sauceClick = document.getElementById('sauce');
    let frozenClick = document.getElementById('frozen');
    let sweetsClick = document.getElementById('sweets');
    let foodAnimalsClick = document.getElementById('foodAnimals');
    let toiletAnimalsClick = document.getElementById('toiletAnimals');
    let careClick = document.getElementById('care');
    let goodsHomeClick = document.getElementById('goodsHome');
    let clothesClick = document.getElementById('clothes');
    let result = document.getElementById('result');

    let basket = {}; //корзина
    $.getJSON('http://54.37.125.180:8080/marketdrive/api/products', function (data) {
        let outAll;
        for (key in data) {
            outAll = data[key];
        }
        outAll.forEach(function (item) {
            for (key in item) {
                if (key === 'grocery') {
                    let grocery = item[key];
                    let groceryAll = "";

                    function show() {
                        for (let i = 0; i < grocery.length; i++) {
                            groceryAll += '<div class="goods-list">';
                            groceryAll += '<img src="' + grocery[i].imageUrl + '" width="200" height="150">' + grocery[i].name + '<br>' + grocery[i].brand + '<br>' + "ціна - " + grocery[i].price + " грн" + '<br>';
                            groceryAll += '<button class="send-goods" data-art="' + grocery[i].name + '">В корзину</button>';
                            groceryAll += '</div>';
                        }
                        result.innerHTML = groceryAll;
                        $('button.send-goods').on('click', addToBasket);
                    }
                    show();
                }
            }
        });

        let arrStorage;
        for (key in data) {
            arrStorage = data[key];
        }
        arrStorage.forEach(function (item) {
            for (key in item) {

                if (key === 'milk') {
                    let milk = item[key];
                    let outMilk = "";

                    function milkShow() {
                        for (let i = 0; i < milk.length; i++) {
                            outMilk += '<div class="goods-list">';
                            outMilk += '<img src="' + milk[i].imageUrl + '" width="200" height="150">' + milk[i].name + '<br>' + milk[i].brand + '<br>' + "ціна - " + milk[i].price + " грн" + '<br>';
                            outMilk += '<button class="send-goods" data-art="' + milk[i].name + '">В корзину</button>';
                            outMilk += '</div>';
                        }
                        result.innerHTML = outMilk;
                        $('button.send-goods').on('click', addToBasket);
                    }

                    milkClick.addEventListener('click', milkShow);
                }
                else if (key === 'grocery') {
                    let grocery = item[key];
                    let outGrocery = "";

                    function groceryShow() {
                        for (let j = 0; j < grocery.length; j++) {
                            outGrocery += '<div class="goods-list">';
                            outGrocery += '<img src="' + grocery[j].imageUrl + '" width="200" height="150">' + '<br>' + grocery[j].name + '<br>' + grocery[j].brand + '<br>' + "ціна - " + grocery[j].price + " грн" + '<br>';
                            outGrocery += '<button class="send-goods" data-art="' + grocery[j].name + '" type="submit">В корзину</button>';
                            outGrocery += '</div>';
                        }
                        result.innerHTML = outGrocery;
                        $('button.send-goods').on('click', addToBasket);
                    }

                    groceryClick.addEventListener('click', groceryShow);
                }
                else if (key === 'hotDrinks') {
                    let hotDrinks = item[key];
                    let outHotDrinks = "";

                    function hotDrinksShow() {
                        for (let i = 0; i < hotDrinks.length; i++) {
                            outHotDrinks += '<div class="goods-list">';
                            outHotDrinks += '<img src="' + hotDrinks[i].imageUrl + '" width="200" height="150">' + '<br>' + hotDrinks[i].name + '<br>' + hotDrinks[i].brand + '<br>' + "ціна - " + hotDrinks[i].price + " грн" + '<br>';
                            outHotDrinks += '<button class="send-goods" data-art="' + hotDrinks[i].name + '" type="submit">В корзину</button>';
                            outHotDrinks += '</div>';
                        }
                        result.innerHTML = outHotDrinks;
                        $('button.send-goods').on('click', addToBasket);
                    }

                    hotDrinksClick.addEventListener('click', hotDrinksShow);
                }
                else if (key === 'meat') {
                    let meat = item[key];
                    let outMeat = "";

                    function meatShow() {
                        for (let i = 0; i < meat.length; i++) {
                            outMeat += '<div class="goods-list">';
                            outMeat += '<img src="' + meat[i].imageUrl + '" width="200" height="150">' + '<br>' + meat[i].name + '<br>' + meat[i].brand + '<br>' + "ціна - " + meat[i].price + " грн" + '<br>';
                            outMeat += '<button class="send-goods" data-art="' + meat[i].name + '" type="submit">В корзину</button>';
                            outMeat += '</div>'
                        }
                        result.innerHTML = outMeat;
                        $('button.send-goods').on('click', addToBasket);
                    }

                    meatClick.addEventListener('click', meatShow);
                }
                else if (key === 'fish') {
                    let fish = item[key];
                    let outFish = "";

                    function fishShow() {
                        for (let i = 0; i < fish.length; i++) {
                            outFish += '<div class="goods-list">';
                            outFish += '<img src="' + fish[i].imageUrl + '" width="200" height="150">' + '<br>' + fish[i].name + '<br>' + fish[i].brand + '<br>' + "ціна - " + fish[i].price + " грн" + '<br>';
                            outFish += '<button class="send-goods" data-art="' + fish[i].name + '" type="submit">В корзину</button>';
                            outFish += '</div>';
                        }
                        result.innerHTML = outFish;
                        $('button.send-goods').on('click', addToBasket);
                    }

                    fishClick.addEventListener('click', fishShow);
                }
                else if (key === 'snacks') {
                    let snacks = item[key];
                    let outSnacks = "";

                    function snacksShow() {
                        for (let i = 0; i < snacks.length; i++) {
                            outSnacks += '<div class="goods-list">';
                            outSnacks += '<img src="' + snacks[i].imageUrl + '" width="200" height="150">' + '<br>' + snacks[i].name + '<br>' + snacks[i].brand + '<br>' + "ціна - " + snacks[i].price + " грн" + '<br>';
                            outSnacks += '<button class="send-goods" data-art="' + snacks[i].name + '" type="submit">В корзину</button>';
                            outSnacks += '</div>';
                        }
                        result.innerHTML = outSnacks;
                        $('button.send-goods').on('click', addToBasket);
                    }

                    snacksClick.addEventListener('click', snacksShow);
                }
                else if (key === 'drink') {
                    let drink = item[key];
                    let outDrink = "";

                    function drinkShow() {
                        for (let i = 0; i < drink.length; i++) {
                            outDrink += '<div class="goods-list">';
                            outDrink += '<img src="' + drink[i].imageUrl + '" width="200" height="150">' + '<br>' + drink[i].name + '<br>' + drink[i].brand + '<br>' + "ціна - " + drink[i].price + " грн" + '<br>';
                            outDrink += '<button class="send-goods" data-art="' + drink[i].name + '" type="submit">В корзину</button>';
                            outDrink += '</div>';
                        }
                        result.innerHTML = outDrink;
                        $('button.send-goods').on('click', addToBasket);
                    }

                    drinkClick.addEventListener('click', drinkShow);
                }
                else if (key === 'sauce') {
                    let sauce = item[key];
                    let outSauce = "";

                    function sauceShow() {
                        for (let i = 0; i < sauce.length; i++) {
                            outSauce += '<div class="goods-list">';
                            outSauce += '<img src="' + sauce[i].imageUrl + '" width="200" height="150">' + '<br>' + sauce[i].name + '<br>' + sauce[i].brand + '<br>' + "ціна - " + sauce[i].price + " грн" + '<br>';
                            outSauce += '<button class="send-goods" data-art="' + sauce[i].name + '" type="submit">В корзину</button>';
                            outSauce += '</div>';
                        }
                        result.innerHTML = outSauce;
                        $('button.send-goods').on('click', addToBasket);
                    }

                    sauceClick.addEventListener('click', sauceShow);
                }
                else if (key === 'frozen') {
                    let frozen = item[key];
                    let outFrozen = "";

                    function frozenShow() {
                        for (let i = 0; i < frozen.length; i++) {
                            outFrozen += '<div class="goods-list">';
                            outFrozen += '<img src="' + frozen[i].imageUrl + '" width="200" height="150">' + '<br>' + frozen[i].name + '<br>' + frozen[i].brand + '<br>' + "ціна - " + frozen[i].price + " грн" + '<br>';
                            outFrozen += '<button class="send-goods" data-art="' + frozen[i].name + '" type="submit">В корзину</button>';
                            outFrozen += '</div>';
                        }
                        result.innerHTML = outFrozen;
                        $('button.send-goods').on('click', addToBasket);
                    }

                    frozenClick.addEventListener('click', frozenShow);
                }
                else if (key === 'sweets') {
                    let sweets = item[key];
                    let outSweets = "";

                    function sweetsShow() {
                        for (let i = 0; i < sweets.length; i++) {
                            outSweets += '<div class="goods-list">';
                            outSweets += '<img src="' + sweets[i].imageUrl + '" width="200" height="150">' + '<br>' + sweets[i].name + '<br>' + sweets[i].brand + '<br>' + "ціна - " + sweets[i].price + " грн" + '<br>';
                            outSweets += '<button class="send-goods" data-art="' + sweets[i].name + '" type="submit">В корзину</button>';
                            outSweets += '</div>';
                        }
                        result.innerHTML = outSweets;
                        $('button.send-goods').on('click', addToBasket);
                    }
                    sweetsClick.addEventListener('click', sweetsShow);
                }
                else if (key === 'foodAnimals') {
                    let foodAnimals = item[key];
                    let outFoodAnimals = "";

                    function foodAnimalsShow() {
                        for (let i = 0; i < foodAnimals.length; i++) {
                            outFoodAnimals += '<div class="goods-list">';
                            outFoodAnimals += '<img src="' + foodAnimals[i].imageUrl + '" width="200" height="150">' + '<br>' + foodAnimals[i].name + '<br>' + foodAnimals[i].brand + '<br>' + "ціна - " + foodAnimals[i].price + " грн" + '<br>';
                            outFoodAnimals += '<button class="send-goods" data-art="' + foodAnimals[i].name + '" type="submit">В корзину</button>';
                            outFoodAnimals += '</div>';
                        }
                        result.innerHTML = outFoodAnimals;
                        $('button.send-goods').on('click', addToBasket);
                    }

                    foodAnimalsClick.addEventListener('click', foodAnimalsShow);
                }
                else if (key === 'toiletAnimals') {
                    let toiletAnimals = item[key];
                    let outToiletAnimals = "";

                    function toiletAnimalsShow() {
                        for (let i = 0; i < toiletAnimals.length; i++) {
                            outToiletAnimals += '<div class="goods-list">';
                            outToiletAnimals += '<img src="' + toiletAnimals[i].imageUrl + '" width="200" height="150">' + '<br>' + toiletAnimals[i].name + '<br>' + toiletAnimals[i].brand + '<br>' + "ціна - " + toiletAnimals[i].price + " грн" + '<br>';
                            outToiletAnimals += '<button class="send-goods" data-art="' + toiletAnimals[i].name + '" type="submit">В корзину</button>';
                            outToiletAnimals += '</div>';
                        }
                        result.innerHTML = outToiletAnimals;
                        $('button.send-goods').on('click', addToBasket);
                    }

                    toiletAnimalsClick.addEventListener('click', toiletAnimalsShow);
                }
                else if (key === 'care') {
                    let care = item[key];
                    let outCare = "";

                    function careShow() {
                        for (let i = 0; i < care.length; i++) {
                            outCare += '<div class="goods-list">';
                            outCare += '<img src="' + care[i].imageUrl + '" width="200" height="150">' + '<br>' + care[i].name + '<br>' + care[i].brand + '<br>' + "ціна - " + care[i].price + " грн" + '<br>';
                            outCare += '<button class="send-goods" data-art="' + care[i].name + '" type="submit">В корзину</button>';
                            outCare += '</div>';
                        }
                        result.innerHTML = outCare;
                        $('button.send-goods').on('click', addToBasket);
                    }

                    careClick.addEventListener('click', careShow);
                }
                else if (key === 'goodsHome') {
                    let goodsHome = item[key];
                    let outGoodsHome = "";

                    function goodsHomeShow() {
                        for (let i = 0; i < goodsHome.length; i++) {
                            outGoodsHome += '<div class="goods-list">';
                            outGoodsHome += '<img src="' + goodsHome[i].imageUrl + '" width="200" height="150">' + '<br>' + goodsHome[i].name + '<br>' + goodsHome[i].brand + '<br>' + "ціна - " + goodsHome[i].price + " грн" + '<br>';
                            outGoodsHome += '<button class="send-goods" data-art="' + goodsHome[i].name + '" type="submit">В корзину</button>';
                            outGoodsHome += '</div>';
                        }
                        result.innerHTML = outGoodsHome;
                        $('button.send-goods').on('click', addToBasket);
                    }

                    goodsHomeClick.addEventListener('click', goodsHomeShow);
                }
                else if (key === 'clothes') {
                    let clothes = item[key];
                    let outClothes = "";
                    function clothesShow() {
                        for (let i = 0; i < clothes.length; i++) {
                            outClothes += '<div class="goods-list">';
                            outClothes += '<img src="' + clothes[i].imageUrl + '" width="200" height="150">' + '<br>' + clothes[i].name + '<br>' + clothes[i].brand + '<br>' + "ціна - " + clothes[i].price + " грн" + '<br>';
                            outClothes += '<button class="send-goods" data-art="' + clothes[i].name + '" type="submit">В корзину</button>';
                            outClothes += '<button class="plus" data-art="'+ clothes[i].name +'">+</button>';
                            outClothes += '</div>';
                        }
                        result.innerHTML = outClothes;
                        $('button.send-goods').on('click', addToBasket);
                    }
                }
                clothesClick.addEventListener('click', clothesShow);
            }
        });
    });
   // добавление товара в корзину
    function addToBasket() {
        let storage = $(this).attr('data-art');
        if (basket[storage] !== undefined) {
            basket[storage] ++;
        } else  {
            basket[storage] = 1;
        }
        localStorage.setItem('basket', JSON.stringify(basket));
        //console.log(basket);
        //showBasket();
    }
    addToBasket();

    function checkBasket() {
        //проверка наличие корзины
        let list = localStorage.getItem('basket');
        if (list !== null) {
            basket = JSON.parse(list);
        }
    }
    checkBasket();

    // function showBasket() {
    //     // содержимое корзины
    //     let out = "";
    //     for (var s in basket) {
    //         out += s + basket[s] + '<br>';
    //     }
    //         rez.innerHTML = out;
    // }
    // showBasket();
};



