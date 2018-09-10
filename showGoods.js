window.onload = function () {

    $(document).ready(function () {
        $("#menu ul").hide();
        $("#menu li span").click(function (){
            $("#menu ul:visible").slideUp("normal");
            if(($(this).next().is("ul")) && (!$(this).next().is(":visible"))) {
                $(this).next().slideDown("normal");
            }
        });
    });

    // При нажатии на название категории выдвигается список. Когда происходит нажатие на другую категорию,
    // предыдущая закрывается.


    var obj1 = localStorage.getItem("goods");
    var goods = JSON.parse(obj1);
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

        function showMilk() {
            var outMilk = "";
            for( var i = 0; i < goods.milk.length; i++) {
                outMilk += '<img src="' + goods.milk[i].imageUrl + '" width="200" height="150">' + '<br>' + goods.milk[i].name + '<br>' + goods.milk[i].brand + '<br>' + goods.milk[i].price;
            }

            document.getElementById('result').innerHTML = outMilk;
        }

        function showGrocery () {
            var outGrocery = "";
            for(var j = 0; j < goods.grocery.length; j++) {
                outGrocery += '<button type="submit">' + '<img src="' + goods.grocery[j].imageUrl + '" width="200" height="150">' + '<br>' + goods.grocery[j].name + '<br>' + goods.grocery[j].brand + '<br>' + goods.grocery[j].price;
            }
            document.getElementById('result').innerHTML = outGrocery;
        }

        function hotDrinkShow () {
            var outHotDrinks = "";
            for (var q = 0; q < goods.hotDrinks.length; q++) {
                outHotDrinks += '<img src="' + goods.hotDrinks[q].imageUrl +'" width="200" height="150">' + '<br>' + goods.hotDrinks[q].name + '<br>' + goods.hotDrinks[q].brand + '<br>' + goods.hotDrinks[q].price;
            }
            document.getElementById('result').innerHTML = outHotDrinks;
        }

        function meatShow () {
            var outMeat = "";
            for (var w = 0; w < goods.meat.length; w++) {
                outMeat += '<button type="submit">' + '<img src="' + goods.meat[w].imageUrl +'" width="200" height="150">' + '<br>' + goods.meat[w].name + '<br>' + goods.meat[w].brand + '<br>' + goods.meat[w].price;
            }
            document.getElementById('result').innerHTML = outMeat;
        }

        function fishShow () {
            var outFish = "";

            for (var e = 0; e < goods.fish.length; e++) {
                outFish += '<img src="' + goods.fish[e].imageUrl + '" width="200" height="150">' + '<br>' + goods.fish[e].name + '<br>' + goods.fish[e].brand + '<br>' + goods.fish[e].price;
            }
            document.getElementById('result').innerHTML = outFish;
        }

        function snacksShow () {
            var outSnacks = "";

            for (var r = 0; r < goods.snacks.length; r++) {
                outSnacks += '<img src="' + goods.snacks[r].imageUrl + '" width="200" height="150">' + '<br>' + goods.snacks[r].name + '<br>' + goods.snacks[r].brand + '<br>' + goods.snacks[r].price;
            }
            document.getElementById('result').innerHTML = outSnacks;
        }

        function drinkShow () {
            var outDrink = "";
            for (var y = 0; y < goods.drink.length; y++) {
                outDrink += '<img src="' + goods.drink[y].imageUrl + '" width="200" height="150">' + '<br>' + goods.drink[y].name + '<br>' + goods.drink[y].brand + '<br>' + goods.drink[y].price;
            }
            document.getElementById('result').innerHTML = outDrink;
        }

        function sauceShow () {
            var outSauce = "";
            for (var a = 0; a < goods.sauce.length; a++) {
                outSauce += '<img src="' + goods.sauce[a].imageUrl + '" width="200" height="150">' + '<br>' + goods.sauce[a].name + '<br>' + goods.sauce[a].brand + '<br>' + goods.sauce[a].price;
            }
            document.getElementById('result').innerHTML = outSauce;
        }

        function frozenShow () {
            var outFrozen = "";
            for (var a = 0; a < goods.frozen.length; a++) {
                outFrozen += '<img src="' + goods.frozen[a].imageUrl + '" width="200" height="150">' + '<br>' + goods.frozen[a].name + '<br>' + goods.frozen[a].brand + '<br>' + goods.frozen[a].price;
            }
            document.getElementById('result').innerHTML = outFrozen;
        }

        function sweetsShow () {
            var outSweets = "";
            for (var a = 0; a < goods.sweets.length; a++) {
                outSweets += '<img src="' + goods.sweets[a].imageUrl + '" width="200" height="150">' + '<br>' + goods.sweets[a].name + '<br>' + goods.sweets[a].brand + '<br>' + goods.sweets[a].price;
            }
            document.getElementById('result').innerHTML = outSweets;
        }

        function foodAnimalsShow () {
            var outfoodAnimals = "";
            for (var a = 0; a < goods.foodAnimals.length; a++) {
                outfoodAnimals += '<img src="' + goods.foodAnimals[a].imageUrl + '" width="200" height="150">' + '<br>' + goods.foodAnimals[a].name + '<br>' + goods.foodAnimals[a].brand + '<br>' + goods.foodAnimals[a].price;
            }
            document.getElementById('result').innerHTML = outfoodAnimals;
        }

        function toiletAnimalsShow () {
            var outtoiletAnimals = "";
            for (var a = 0; a < goods.toiletAnimals.length; a++) {
                outtoiletAnimals += '<img src="' + goods.toiletAnimals[a].imageUrl + '" width="200" height="150">' + '<br>' + goods.toiletAnimals[a].name + '<br>' + goods.toiletAnimals[a].brand + '<br>' + goods.toiletAnimals[a].price;
            }
            document.getElementById('result').innerHTML = outtoiletAnimals;
        }

        function careShow () {
            var outcare = "";
            for (var a = 0; a < goods.care.length; a++) {
                outcare += '<img src="' + goods.care[a].imageUrl + '" width="200" height="150">' + '<br>' + goods.care[a].name + '<br>' + goods.care[a].brand + '<br>' + goods.care[a].price;
            }
            document.getElementById('result').innerHTML = outcare;
        }

        function goodsHomeShow () {
            var outgoodsHome = "";
            for (var a = 0; a < goods.goodsHome.length; a++) {
                outgoodsHome += '<img src="' + goods.goodsHome[a].imageUrl + '" width="200" height="150">' + '<br>' + goods.goodsHome[a].name + '<br>' + goods.goodsHome[a].brand + '<br>' + goods.goodsHome[a].price;
            }
            document.getElementById('result').innerHTML = outgoodsHome;
        }

        function clothesShow () {
            var outclothes = "";
            for (var a = 0; a < goods.clothes.length; a++) {
                outclothes += '<img src="' + goods.clothes[a].imageUrl + '" width="200" height="150">' + '<br>' + goods.clothes[a].name + '<br>' + goods.clothes[a].brand + '<br>' + goods.clothes[a].price;
            }
            document.getElementById('result').innerHTML = outclothes;
        }

        milkClick.addEventListener('click', showMilk);
        groceryClick.addEventListener('click', showGrocery);
        hotDrinksClick.addEventListener('click', hotDrinkShow);
        meatClick.addEventListener('click', meatShow);
        fishClick.addEventListener('click', fishShow);
        snacksClick.addEventListener('click', snacksShow);
        drinkClick.addEventListener('click', drinkShow);
        sauceClick.addEventListener('click', sauceShow);
        frozenClick.addEventListener('click', frozenShow);
        sweetsClick.addEventListener('click', sweetsShow);
        foodAnimalsClick.addEventListener('click', foodAnimalsShow);
        toiletAnimalsClick.addEventListener('click', toiletAnimalsShow);
        careClick.addEventListener('click', careShow);
        goodsHomeClick.addEventListener('click', goodsHomeShow);
        clothesClick.addEventListener('click', clothesShow);




    // var requestURL = 'http://54.37.125.180:8080/api/storage';
    // var xhr = new XMLHttpRequest();
    // xhr.open('GET', requestURL, true);
    // //xhr.responseType = 'json';
    // xhr.send();
    //
    // xhr.onload = function () {
    //     var response = JSON.parse(xhr.responseText);
    //     //var storage = xhr.response;
    //     //storageShow(storage);
    //     if (xhr.status === "200") {
    //         console.log(response);
    //     } else {
    //         console.log(response);
    //     }
    //
    // };

    // function storageShow() {
    //     var ul = document.getElementById('result');
    //
    //     var milk = document.getElementById('milk');
    //     function storageShow(jsonObj) {
    //         var goods = jsonObj['storage'];
    //
    //         for (var i = 0; i < goods[1].length ; i++) {
    //             var section = document.querySelector('section');
    //             var myImage = document.createElement('img');
    //             var myArticle = document.createElement('article');
    //             var myList = document.createElement('ul');
    //             var myPar1 = document.createElement('p');
    //             var myPar2 = document.createElement('p');
    //             var myPar3 = document.createElement('p');
    //
    //             myPar1.textContent = goods[i].name;
    //             myPar2.textContent = goods[i].manufacturer;
    //             myPar3.textContent = goods[i].price;
    //             myImage.textContent = goods[i].imageUrl;
    //
    //             var list = goods[i].milk;
    //             for (var j = 0; j < list.length; j++) {
    //                 var listItem = document.createElement('li');
    //                 listItem.textContent = list[j];
    //                 myList.appendChild(listItem);
    //             }
    //
    //             myArticle.appendChild(myPar1);
    //             myArticle.appendChild(myPar2);
    //             myArticle.appendChild(myPar3);
    //             myArticle.appendChild(myList);
    //
    //             section.appendChild(myArticle);
    //         }
    //     }
    //    // storageShow(jsonObj);
    //     milk.addEventListener('click', storageShow);
    // }







   //
   // myUl.appendChild(listItem);
   //
   //
   //
   //
   //      function loadGoods() {
   //
   //          myUl.appendChild(myImage);
   //          myUl.appendChild(myName);
   //          myUl.appendChild(myBrand);
   //          myUl.appendChild(myPrice);
   //
   //          section.appendChild(myUl);
   //
   //                      for (var i = 0; i < retObj.milk.length; i++) {
   //
   //                          myImage.innerHTML += '<img src="' + retObj.milk[i].imageUrl + '" width="300" height="150">';
   //                          myName.innerHTML += retObj.milk[i].name;
   //                          myBrand.innerHTML += retObj.milk[i].brand;
   //                          myPrice.innerHTML += retObj.milk[i].price;
   //
   //
   //
   //                          // var list = retObj.milk[i].length;
   //                          // for (var j = 0; j < list; j++) {
   //                          //     listItem.innerHTML = list[j];
   //                          // }
   //
   //                      }
   //
   //
   //
   //              }
   //
   //
   //
   //
   // milkClick.addEventListener('click', storageShow);
};



