// window.onload = function () {
//     var request = XMLHttpRequest();
//
//     request.open('GET', 'goods.json', true);
//     request.responseType = 'json';
//     request.send();
//     request.onload = function () {
//         var goodsList = request.response;
//         showGoods(goodsList);
//     };
//     document.getElementById('milk');
//     milk.onclick = function showGoods(jsonObj) {
//         var goods = jsonObj['grocery'];
//
//         for (var i = 0; i < goods.length ; i++) {
//             var myImage = document.createElement('img');
//             var myArticle = document.createElement('article');
//             var myList = document.createElement('ul');
//             var myPar1 = document.createElement('p');
//             var myPar2 = document.createElement('p');
//             var myPar3 = document.createElement('p');
//
//             myPar1.textContent = goods[i].name;
//             myPar2.textContent = goods[i].brand;
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
//     }; showGoods(jsonObj);
// };


window.onload = function () {

    var goods = {

        milk: {
            id1: {
                name: "Сир твердий Звенигородский 50%",
                brand: "ТМ «Своя лінія» - 200 г",
                price: " ",
                imageUrl: "http://www.atbmarket.com/attachments/product_stm/a/c/c/3/3/acc33e4591fd70d2d3d39daf0d5b8324_295_235_f.jpg"

            },
            id2: {
                name: "Сир твердий «Російський» 45%",
                brand: "ТМ «Своя лінія» - 200 г",
                price: " ",
                imageUrl: "http://www.atbmarket.com/attachments/product_stm/f/5/f/3/c/f5f3c55446ed6b338dfb6a92c8ec02da_295_235_f.jpg"

            },
            id3: {
                name: "Сир Голландский,45%",
                brand: "ТМ «Своя лінія» - 200 г",
                price: " ",
                imageUrl: "http://www.atbmarket.com/attachments/product_stm/c/9/9/b/0/c99b07253190af6460ebba27c294044d_295_235_f.jpg"

            },
            id4: {
                name: "Продукт молоковмісний сирний «Руський класичний»",
                brand: "ТМ «Розумний вибір» - 180 г",
                price: " ",
                imageUrl: "http://www.atbmarket.com/attachments/product_stm/8/c/2/a/0/8c2a096015038b56be1d02db05f3b810_295_235_f.jpg"

            },
            id5: {
                name: "Молоко згущене незбиране з цукром",
                brand: "ТМ «Своя лінія» - 370 г",
                price: " ",
                imageUrl: "http://www.atbmarket.com/attachments/product_stm/d/e/4/6/1/de461484eed5f52d860c53c718651019_295_235_f.jpg"

            },
            id6: {
                name: "Молоко згущене варене «Іриска»",
                brand: "ТМ «Своя лінія» - 370 г",
                price: " ",
                imageUrl: "http://www.atbmarket.com/attachments/product_stm/9/3/2/7/6/93276186541af982701e7fa52a005da9_295_235_f.jpg"

            }
        },

        hotDrinks: {
            id7: {
                name: "Кава натуральна розчинна сублімована",
                brand: "ТМ «Своя Лінія» - 50 г",
                price: " ",
                imageUrl: "http://www.atbmarket.com/attachments/product_stm/8/5/3/7/9/85379e156690ee4795458680ccef369f_295_235_f.png"
            },
            id8: {
                name: "Кава Coffee Gold розчинна сублімована",
                brand: "ТМ «Своя Лінія» – 140 г",
                price: " ",
                imageUrl: "http://www.atbmarket.com/attachments/product_stm/f/f/3/4/0/ff3401dbe6387f9fcc1c21ffa743b77e_295_235_f.jpg"
            },
            id9: {
                name: "Напій з цикорію",
                brand: "ТМ «Своя Лінія» - 90 г",
                price: " ",
                imageUrl: "http://www.atbmarket.com/attachments/product_stm/c/3/3/0/4/c330455525d9099188df72e9254e59fc_295_235_f.png"
            },
            id10: {
                name: "Чай чорний цейлонський натуральний",
                brand: "ТМ «Своя Лінія» - 25 ф/п х 1,5 г",
                price: " ",
                imageUrl: "http://www.atbmarket.com/attachments/product_stm/7/3/f/0/e/73f0e17a956e8abfee84b1418b46bcb3_295_235_f.jpg"
            },
            id11: {
                name: "Чай зелений китайський натуральний",
                brand: "ТМ «Своя Лінія» - 25 ф/п х 1,75 г",
                price: " ",
                imageUrl: "http://www.atbmarket.com/attachments/product_stm/9/e/d/5/1/9ed51e0f833cd1a195e541ca569a9c6a_295_235_f.jpg"
            }
        },
        meat: {
            id12: {
                name: "Ковбаса Молочна",
                brand: "ТМ «Своя Лінія» - 0,55 кг",
                price: "",
                imageUrl: "http://www.atbmarket.com/attachments/product_stm/7/0/d/1/8/70d18a9c8443f4e3321c37082be437eb_295_235_f.jpg"
            },
            id13: {
                name: "Ковбаса Любительська",
                brand: "ТМ «Своя Лінія» - 0,55 кг",
                price: "",
                imageUrl: "http://www.atbmarket.com/attachments/product_stm/b/8/a/c/8/b8ac8ea8339ccb69a4b570a7a4bc0dd4_295_235_f.jpg"
            },
            id14: {
                name: "Ковбаса Лікарська",
                brand: "ТМ «Своя Лінія» - 0,55 кг",
                price: "",
                imageUrl: "http://www.atbmarket.com/attachments/product_stm/2/a/1/1/3/2a113b30678abf29727a8eba57168a09_295_235_f.jpg"
            },
            id15: {
                name: "Паштет Домашній з грудинкою",
                brand: "ТМ «Своя Лінія» - 125 г",
                price: "",
                imageUrl: "http://www.atbmarket.com/attachments/product_stm/e/2/d/7/f/e2d7f1b427cd30cae87019d47f751902_295_235_f.jpg"
            },
            id16: {
                name: "Паштет Печінковий",
                brand: "ТМ «Своя Лінія» - 125 г",
                price: "",
                imageUrl: "http://www.atbmarket.com/attachments/product_stm/6/6/f/6/8/66f688df4b36a912b62a0c482177a8a4_295_235_f.jpg"
            }
        },
        fish: {
            id17: {
                name: "Сьомга с / с нарізка",
                brand: "ТМ «Своя Лінія» - 80 г",
                price: "",
                imageUrl: "http://www.atbmarket.com/attachments/product_stm/0/b/b/6/d/0bb6d8d81bd386c867cdf119453793f0_295_235_f.jpg"
            },
            id18: {
                name: "Сьомга с / с філе-шматок",
                brand: "ТМ «Своя Лінія» - 180 г",
                price: "",
                imageUrl: "http://www.atbmarket.com/attachments/product_stm/a/8/5/c/0/a85c018c2d40424680a16588160ed60d_295_235_f.jpg"
            },
            id19: {
                name: "Крабові палички заморожені",
                brand: "ТМ «Своя Лінія» - 0,5 кг",
                price: "",
                imageUrl: "http://www.atbmarket.com/attachments/product_stm/7/f/4/3/3/7f433406a8d7df68d79f48e9096db6a5_295_235_f.jpg"
            },
            id20: {
                name: "Крабові палички охолоджені",
                brand: "ТМ «Своя Лінія» - 500 г",
                price: "",
                imageUrl: "http://www.atbmarket.com/attachments/product_stm/9/f/8/c/1/9f8c138e539400f9a2f93558415c5b5d_295_235_f.jpg"
            },
            id21: {
                name: "Консерви рибні бички у томатному соусі, ж/б",
                brand: "ТМ «Розумний вибір» - 230 г",
                price: "",
                imageUrl: "http://www.atbmarket.com/attachments/product_stm/d/6/7/8/0/d6780731e81cfc4e1343e23888005bb2_295_235_f.jpg"
            }
        },
        snacks: {
            id22: {
                name: "Анчоус сушений солоний/ставридка сушена солона/смугастик жовтий сушений солоний",
                brand: "ТМ «Своя Лінія» - 36г",
                price: "",
                imageUrl: "http://www.atbmarket.com/attachments/product_stm/1/0/4/c/e/104ce62f7a17aacdbf3eb8dcda6c4aa6_295_235_f.jpg"
            },
            id23: {
                name: "Стружка кальмара сушена/півкільця кальмару копчені",
                brand: "ТМ «Своя Лінія» - 36г",
                price: "",
                imageUrl: "http://www.atbmarket.com/attachments/product_stm/0/4/e/d/c/04edc14d3e22cea36963c731ff23e4cb_295_235_f.jpg"
            },
            id24: {
                name: "Путасу сушена солона/путасу сушена солона з перцем",
                brand: "ТМ «Своя Лінія» - 36 г",
                price: "",
                imageUrl: "http://www.atbmarket.com/attachments/product_stm/b/8/c/2/c/b8c2c50e33001837d0702342eac2a540_295_235_f.jpg"
            },
            id25: {
                name: "Ставридка сушена солона/ путасу сушена солона",
                brand: "ТМ «Своя Лінія» - 70г",
                price: "",
                imageUrl: "http://www.atbmarket.com/attachments/product_stm/5/d/4/f/0/5d4f05fcbc9a993c7c24fbc1424fe850_295_235_f.jpg"
            },
            id26: {
                name: "Чіпси картопляні зі смаком паприки",
                brand: "ТМ «Своя Лінія» - 110 г",
                price: "",
                imageUrl: "http://www.atbmarket.com/attachments/product_stm/4/6/5/7/4/46574fc516ed31897612166bb9bf8c5d_295_235_f.jpg"
            }
        }

    };

    var goodsList = JSON.stringify(goods);
    localStorage.setItem("goods", goodsList);
};









