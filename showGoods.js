'use strict';

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

    var basketData = [] ; //корзина
    var milk,
        grocery,
        hotDrinks;
    var div = document.getElementById('result');


        $.getJSON('products.json', function (data) {
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

            }

        var milkOut = "";
        function showMilk() {
                for (var i = 0; i < milk.length; i++) {
                    milkOut += '<div id="goods-list">';
                    milkOut += '<img src="' + milk[i].imageUrl + '" width="200" height="150">'
                        + '<span class="name-basket">"' + milk[i].name + '"</span>'  + '<br>'
                        + '<span>"' + milk[i].brand + '"</span>' + '<br>'
                        + '<span class="price-basket">"ціна -"  '+ milk[i].price +'  грн "</span>' + '<br>';
                    milkOut += '<button type="submit" class="btn-add btn btn-sm btn-outline-secondary send-goods" data-id="' + milk[i].id + '"  data-name="' + milk[i].name + '"  data-price="' + milk[i].price + '">В корзину</button>';
                    milkOut += '</div>';
                }
                $(result).html(milkOut);
            $('button.btn-add').on('click', clickBtn);
        }
        $(milkClick).on('click', showMilk);

    var groceryOut = "";
    function showGrocery() {
        for (var prop in grocery) {
            var prod = grocery[prop];
            groceryOut += '<div id="goods-list">';
            groceryOut += '<img src="' + prod.imageUrl + '" width="200" height="150">'
                + '<span class="name-basket">"' + prod.name + '"</span>'  + '<br>'
                + '<span>"' + prod.brand + '"</span>' + '<br>'
                + '<span class="price-basket">"ціна -"  '+ prod.price +'  грн "</span>' + '<br>';
            groceryOut += '<button type="submit" class="btn-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '"  data-price="' + prod.price + '">В корзину</button>';
            groceryOut += '</div>';
        }
        $(result).html(groceryOut);
        $('button.btn-add').on('click', clickBtn);
    }

    showGrocery();
    $(groceryClick).on('click', showGrocery);

    var hotDrinksOut = "";
    function showHotDrinks() {
        for (var prop in hotDrinks) {
            var prod = hotDrinks[prop];
            hotDrinksOut += '<div id="goods-list">';
            hotDrinksOut += '<img src="' + prod.imageUrl + '" width="200" height="150">'
                + '<span class="name-basket">"' + prod.name + '"</span>'  + '<br>'
                + '<span>"' + prod.brand + '"</span>' + '<br>'
                + '<span class="price-basket">"ціна -"  '+ prod.price +'  грн "</span>' + '<br>';
            hotDrinksOut += '<button class="btn-add btn btn-sm btn-outline-secondary send-goods" data-id="' + prod.id + '"  data-name="' + prod.name + '"  data-price="' + prod.price + '">В корзину</button>';
            hotDrinksOut += '</div>';
        }
        $(result).html(hotDrinksOut);
        $('button.btn-add').on('click', clickBtn);
    }
    $(hotDrinksClick).on('click', showHotDrinks);
        });


    function getById(id) {
        return _.findWhere(basketData, {id :id});
    }

        function updateData() {
            basketData = JSON.parse(localStorage.getItem('basket')) || [];
            return basketData;
        }
        //
        //сохраняем данные в local storage
        function saveData() {
            localStorage.setItem('basket', JSON.stringify(basketData));
            return basketData;
        }
        //
        //
        //
        // var RES = document.querySelector('result');
        // function addGoods() {
        //     var basketData = updateData() || {},
        //         parentBtn = this.parentNode,
        //         itemId = this.getAttribute('data-id'),
        //         itemName = document.getElementsByClassName('name-basket').innerHTML,
        //         itemPrice = document.getElementsByClassName('price-basket').innerHTML;
        //     if(basketData.hasOwnProperty(itemId)){
        //         basketData[itemId][2] += 1;
        //     } else{
        //         basketData[itemId] =[itemName, itemPrice, 1];
        //     }
        // }

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
                var $this = $(this);
                add({
                    id: +$this.data('id'),
                    name: +$this.data('name'),
                    price: +$this.data('price'),
                    count: 1
                });
                alert('Товар добавлен в корзину');
            });

        }



    // function showCatalog() {
    //     var template = $('#catalog-template').html();
    //
    //     var $goods = $('#result');
    //     $.getJSON('products.json', function (data) {
    //         let res;
    //         for (let key in data) {
    //             if (key === 'milk') {
    //                 res = data[key];
    //             }
    //         }
    //         $goods.html(template({goods: res}));
    //         //$goods.html({goods: res});
    //     });
    // }
    // function createTable(goods) {
    //     let result = document.getElementById('basket-item');
    //     let tr = document.createElement('tr');
    //     let td1 = document.createElement('td');
    //     let td2 = document.createElement('td');
    //     let td3 = document.createElement('td');
    //     let td4 = document.createElement('td');
    //     let td5 = document.createElement('td');
    //     let span = document.createElement('span');
    //     $(tr).addClass('add-basket-item');
    //
    //     let str = "";
    //     for (var i = 0; i < length; i++) {
    //         td1 += name;
    //         td2 += price;
    //         td3 += '<span class="change-count" title="уменьшить на 1" data-id="' + id + '" data-delta="-1"><i class="fa fa-angle-down"></i></span>' +
    //             '<span class="count">"' + count + '"</span>' +
    //             '<span class="change-count" title="увеличить на 1" data-id="' + id + '" data-delta="1"><i class="fa fa-angle-up"></i></span>';
    //         td4 += '<span class="sum">"' + count*price + '"</span>' + "грн.";
    //         td5 += '<span class="remove-form-basket" data-id="' + id + '"><i class="fa fa-ban"></i></span>';
    //
    //
    //
    //
    //         tr.appendChild(td1);
    //         tr.appendChild(td2);
    //         tr.appendChild(td3);
    //         tr.appendChild(td4);
    //         tr.appendChild(td5);
    //
    //         result.appendChild(tr);
    //     }
    // }
    //
    // function addToBasket() {
    //     var storage = $(this).attr('data-name');
    //     if (basket[storage] !== undefined) {
    //         basket[storage] ++;
    //     } else  {
    //         basket[storage] = 1;
    //     }
    //     console.log(basket);
    // }




    //      let arrStorage;
    //      for (key in data) {
    //          arrStorage = data[key];
    //      }
    //      arrStorage.forEach(function (item) {
    //          for (key in item) {
    //
    //              if (key === 'milk') {
    //                  let milk = item[key];
    //                  let outMilk = "";
    //
    //                  function milkShow() {
    //                      for (let i = 0; i < milk.length; i++) {
    //                          outMilk += '<div class="goods-list">';
    //                          outMilk += '<img src="' + milk[i].imageUrl + '" width="200" height="150">' + milk[i].name + '<br>' + milk[i].brand + '<br>' + "ціна - " + milk[i].price + " грн" + '<br>';
    //                          outMilk += '<button class="send-goods" data-art="' + milk[i].name + '">В корзину</button>';
    //                          outMilk += '</div>';
    //                      }
    //                      result.innerHTML = outMilk;
    //                      $('button.send-goods').on('click', addToBasket);
    //                  }
    //                  milkClick.addEventListener('click', milkShow);
    //              }
    //              else if (key === 'grocery') {
    //                  let grocery = item[key];
    //                  let outGrocery = "";
    //
    //                  function groceryShow() {
    //                      for (let j = 0; j < grocery.length; j++) {
    //                          outGrocery += '<div class="goods-list">';
    //                          outGrocery += '<img src="' + grocery[j].imageUrl + '" width="200" height="150">' + '<br>' + grocery[j].name + '<br>' + grocery[j].brand + '<br>' + "ціна - " + grocery[j].price + " грн" + '<br>';
    //                          outGrocery += '<button class="send-goods" data-art="' + grocery[j].name + '" type="submit">В корзину</button>';
    //                          outGrocery += '</div>';
    //                      }
    //                      result.innerHTML = outGrocery;
    //                      $('button.send-goods').on('click', addToBasket);
    //                  }
    //                  groceryShow();
    //                  groceryClick.addEventListener('click', groceryShow);
    //              }
    //              else if (key === 'hotDrinks') {
    //                  let hotDrinks = item[key];
    //                  let outHotDrinks = "";
    //
    //                  function hotDrinksShow() {
    //                      for (let i = 0; i < hotDrinks.length; i++) {
    //                          outHotDrinks += '<div class="goods-list">';
    //                          outHotDrinks += '<img src="' + hotDrinks[i].imageUrl + '" width="200" height="150">' + '<br>' + hotDrinks[i].name + '<br>' + hotDrinks[i].brand + '<br>' + "ціна - " + hotDrinks[i].price + " грн" + '<br>';
    //                          outHotDrinks += '<button class="send-goods" data-art="' + hotDrinks[i].name + '" type="submit">В корзину</button>';
    //                          outHotDrinks += '</div>';
    //                      }
    //                      result.innerHTML = outHotDrinks;
    //                      $('button.send-goods').on('click', addToBasket);
    //                  }
    //
    //                  hotDrinksClick.addEventListener('click', hotDrinksShow);
    //              }
    //              else if (key === 'meat') {
    //                  let meat = item[key];
    //                  let outMeat = "";
    //
    //                  function meatShow() {
    //                      for (let i = 0; i < meat.length; i++) {
    //                          outMeat += '<div class="goods-list">';
    //                          outMeat += '<img src="' + meat[i].imageUrl + '" width="200" height="150">' + '<br>' + meat[i].name + '<br>' + meat[i].brand + '<br>' + "ціна - " + meat[i].price + " грн" + '<br>';
    //                          outMeat += '<button class="send-goods" data-art="' + meat[i].name + '" type="submit">В корзину</button>';
    //                          outMeat += '</div>'
    //                      }
    //                      result.innerHTML = outMeat;
    //                      $('button.send-goods').on('click', addToBasket);
    //                  }
    //
    //                  meatClick.addEventListener('click', meatShow);
    //              }
    //              else if (key === 'fish') {
    //                  let fish = item[key];
    //                  let outFish = "";
    //
    //                  function fishShow() {
    //                      for (let i = 0; i < fish.length; i++) {
    //                          outFish += '<div class="goods-list">';
    //                          outFish += '<img src="' + fish[i].imageUrl + '" width="200" height="150">' + '<br>' + fish[i].name + '<br>' + fish[i].brand + '<br>' + "ціна - " + fish[i].price + " грн" + '<br>';
    //                          outFish += '<button class="send-goods" data-art="' + fish[i].name + '" type="submit">В корзину</button>';
    //                          outFish += '</div>';
    //                      }
    //                      result.innerHTML = outFish;
    //                      $('button.send-goods').on('click', addToBasket);
    //                  }
    //
    //                  fishClick.addEventListener('click', fishShow);
    //              }
    //              else if (key === 'snacks') {
    //                  let snacks = item[key];
    //                  let outSnacks = "";
    //
    //                  function snacksShow() {
    //                      for (let i = 0; i < snacks.length; i++) {
    //                          outSnacks += '<div class="goods-list">';
    //                          outSnacks += '<img src="' + snacks[i].imageUrl + '" width="200" height="150">' + '<br>' + snacks[i].name + '<br>' + snacks[i].brand + '<br>' + "ціна - " + snacks[i].price + " грн" + '<br>';
    //                          outSnacks += '<button class="send-goods" data-art="' + snacks[i].name + '" type="submit">В корзину</button>';
    //                          outSnacks += '</div>';
    //                      }
    //                      result.innerHTML = outSnacks;
    //                      $('button.send-goods').on('click', addToBasket);
    //                  }
    //
    //                  snacksClick.addEventListener('click', snacksShow);
    //              }
    //              else if (key === 'drink') {
    //                  let drink = item[key];
    //                  let outDrink = "";
    //
    //                  function drinkShow() {
    //                      for (let i = 0; i < drink.length; i++) {
    //                          outDrink += '<div class="goods-list">';
    //                          outDrink += '<img src="' + drink[i].imageUrl + '" width="200" height="150">' + '<br>' + drink[i].name + '<br>' + drink[i].brand + '<br>' + "ціна - " + drink[i].price + " грн" + '<br>';
    //                          outDrink += '<button class="send-goods" data-art="' + drink[i].name + '" type="submit">В корзину</button>';
    //                          outDrink += '</div>';
    //                      }
    //                      result.innerHTML = outDrink;
    //                      $('button.send-goods').on('click', addToBasket);
    //                  }
    //
    //                  drinkClick.addEventListener('click', drinkShow);
    //              }
    //              else if (key === 'sauce') {
    //                  let sauce = item[key];
    //                  let outSauce = "";
    //
    //                  function sauceShow() {
    //                      for (let i = 0; i < sauce.length; i++) {
    //                          outSauce += '<div class="goods-list">';
    //                          outSauce += '<img src="' + sauce[i].imageUrl + '" width="200" height="150">' + '<br>' + sauce[i].name + '<br>' + sauce[i].brand + '<br>' + "ціна - " + sauce[i].price + " грн" + '<br>';
    //                          outSauce += '<button class="send-goods" data-art="' + sauce[i].name + '" type="submit">В корзину</button>';
    //                          outSauce += '</div>';
    //                      }
    //                      result.innerHTML = outSauce;
    //                      $('button.send-goods').on('click', addToBasket);
    //                  }
    //
    //                  sauceClick.addEventListener('click', sauceShow);
    //              }
    //              else if (key === 'frozen') {
    //                  let frozen = item[key];
    //                  let outFrozen = "";
    //
    //                  function frozenShow() {
    //                      for (let i = 0; i < frozen.length; i++) {
    //                          outFrozen += '<div class="goods-list">';
    //                          outFrozen += '<img src="' + frozen[i].imageUrl + '" width="200" height="150">' + '<br>' + frozen[i].name + '<br>' + frozen[i].brand + '<br>' + "ціна - " + frozen[i].price + " грн" + '<br>';
    //                          outFrozen += '<button class="send-goods" data-art="' + frozen[i].name + '" type="submit">В корзину</button>';
    //                          outFrozen += '</div>';
    //                      }
    //                      result.innerHTML = outFrozen;
    //                      $('button.send-goods').on('click', addToBasket);
    //                  }
    //
    //                  frozenClick.addEventListener('click', frozenShow);
    //              }
    //              else if (key === 'sweets') {
    //                  let sweets = item[key];
    //                  let outSweets = "";
    //
    //                  function sweetsShow() {
    //                      for (let i = 0; i < sweets.length; i++) {
    //                          outSweets += '<div class="goods-list">';
    //                          outSweets += '<img src="' + sweets[i].imageUrl + '" width="200" height="150">' + '<br>' + sweets[i].name + '<br>' + sweets[i].brand + '<br>' + "ціна - " + sweets[i].price + " грн" + '<br>';
    //                          outSweets += '<button class="send-goods" data-art="' + sweets[i].name + '" type="submit">В корзину</button>';
    //                          outSweets += '</div>';
    //                      }
    //                      result.innerHTML = outSweets;
    //                      $('button.send-goods').on('click', addToBasket);
    //                  }
    //                  sweetsClick.addEventListener('click', sweetsShow);
    //              }
    //              else if (key === 'foodAnimals') {
    //                  let foodAnimals = item[key];
    //                  let outFoodAnimals = "";
    //
    //                  function foodAnimalsShow() {
    //                      for (let i = 0; i < foodAnimals.length; i++) {
    //                          outFoodAnimals += '<div class="goods-list">';
    //                          outFoodAnimals += '<img src="' + foodAnimals[i].imageUrl + '" width="200" height="150">' + '<br>' + foodAnimals[i].name + '<br>' + foodAnimals[i].brand + '<br>' + "ціна - " + foodAnimals[i].price + " грн" + '<br>';
    //                          outFoodAnimals += '<button class="send-goods" data-art="' + foodAnimals[i].name + '" type="submit">В корзину</button>';
    //                          outFoodAnimals += '</div>';
    //                      }
    //                      result.innerHTML = outFoodAnimals;
    //                      $('button.send-goods').on('click', addToBasket);
    //                  }
    //
    //                  foodAnimalsClick.addEventListener('click', foodAnimalsShow);
    //              }
    //              else if (key === 'toiletAnimals') {
    //                  let toiletAnimals = item[key];
    //                  let outToiletAnimals = "";
    //
    //                  function toiletAnimalsShow() {
    //                      for (let i = 0; i < toiletAnimals.length; i++) {
    //                          outToiletAnimals += '<div class="goods-list">';
    //                          outToiletAnimals += '<img src="' + toiletAnimals[i].imageUrl + '" width="200" height="150">' + '<br>' + toiletAnimals[i].name + '<br>' + toiletAnimals[i].brand + '<br>' + "ціна - " + toiletAnimals[i].price + " грн" + '<br>';
    //                          outToiletAnimals += '<button class="send-goods" data-art="' + toiletAnimals[i].name + '" type="submit">В корзину</button>';
    //                          outToiletAnimals += '</div>';
    //                      }
    //                      result.innerHTML = outToiletAnimals;
    //                      $('button.send-goods').on('click', addToBasket);
    //                  }
    //
    //                  toiletAnimalsClick.addEventListener('click', toiletAnimalsShow);
    //              }
    //              else if (key === 'care') {
    //                  let care = item[key];
    //                  let outCare = "";
    //
    //                  function careShow() {
    //                      for (let i = 0; i < care.length; i++) {
    //                          outCare += '<div class="goods-list">';
    //                          outCare += '<img src="' + care[i].imageUrl + '" width="200" height="150">' + '<br>' + care[i].name + '<br>' + care[i].brand + '<br>' + "ціна - " + care[i].price + " грн" + '<br>';
    //                          outCare += '<button class="send-goods" data-art="' + care[i].name + '" type="submit">В корзину</button>';
    //                          outCare += '</div>';
    //                      }
    //                      result.innerHTML = outCare;
    //                      $('button.send-goods').on('click', addToBasket);
    //                  }
    //
    //                  careClick.addEventListener('click', careShow);
    //              }
    //              else if (key === 'goodsHome') {
    //                  let goodsHome = item[key];
    //                  let outGoodsHome = "";
    //
    //                  function goodsHomeShow() {
    //                      for (let i = 0; i < goodsHome.length; i++) {
    //                          outGoodsHome += '<div class="goods-list">';
    //                          outGoodsHome += '<img src="' + goodsHome[i].imageUrl + '" width="200" height="150">' + '<br>' + goodsHome[i].name + '<br>' + goodsHome[i].brand + '<br>' + "ціна - " + goodsHome[i].price + " грн" + '<br>';
    //                          outGoodsHome += '<button class="send-goods" data-art="' + goodsHome[i].name + '" type="submit">В корзину</button>';
    //                          outGoodsHome += '</div>';
    //                      }
    //                      result.innerHTML = outGoodsHome;
    //                      $('button.send-goods').on('click', addToBasket);
    //                  }
    //
    //                  goodsHomeClick.addEventListener('click', goodsHomeShow);
    //              }
    //              else if (key === 'clothes') {
    //                  let clothes = item[key];
    //                  let outClothes = "";
    //                  function clothesShow() {
    //                      for (let i = 0; i < clothes.length; i++) {
    //                          outClothes += '<div class="goods-list">';
    //                          outClothes += '<img src="' + clothes[i].imageUrl + '" width="200" height="150">' + '<br>' + clothes[i].name + '<br>' + clothes[i].brand + '<br>' + "ціна - " + clothes[i].price + " грн" + '<br>';
    //                          outClothes += '<button class="send-goods" data-art="' + clothes[i].name + '" type="submit">В корзину</button>';
    //                          outClothes += '<button class="plus" data-art="'+ clothes[i].name +'">+</button>';
    //                          outClothes += '</div>';
    //                      }
    //                      result.innerHTML = outClothes;
    //                      $('button.send-goods').on('click', addToBasket);
    //                  }
    //              }
    //              clothesClick.addEventListener('click', clothesShow);
    //          }
    //      });
    //
    //  });
    //
    //
    // // добавление товара в корзину
    //  function addToBasket() {
    //      let storage = $(this).attr('data-art');
    //
    //
    //      if (basket[storage] !== undefined) {
    //          basket[storage] ++;
    //      } else  {
    //          basket[storage] = 1;
    //      }
    //      localStorage.setItem('basket', JSON.stringify(basket));
    //      //console.log(basket);
    //      //showBasket();
    //  }
    //  addToBasket();
    //

    // function showBasket() {
    // содержимое корзины
    //     let out = "";
    //     for (var s in basket) {
    //         out += s + basket[s] + '<br>';
    //     }
    //         rez.innerHTML = out;
    // }
    // showBasket();





