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


    // var obj1 = localStorage.getItem("goods");
    // var obj2 = JSON.parse(obj1);
    //
    //
    // var milkClick = document.getElementById('milk');
    //
    //   function showGoods() {
    //
    //
    //      var show = '';
    //      for (var key in obj2) {
    //          show += '<img src="' + obj2[key].imageUrl + '" width="300" height="150">';
    //          show += obj2[key].name + '<br>';
    //          show += obj2[key].brand + '<br>';
    //          show += obj2[key].price + '<br>';
    //
    //
    //      }
    //
    //      document.getElementById('result').innerHTML = show;
    //  }
    // milkClick.addEventListener('click', showGoods);



    var obj1 = localStorage.getItem("goods");
    var obj2 = JSON.parse(obj1);

    var section = document.querySelector('section');
    var milk = document.getElementById('milk');

    var good = obj2;

    var myUl = document.querySelector('ul');
    var myImage = document.createElement('img');
    var myName = document.createElement('p');
    var myBrand = document.createElement('p');
    var myPrice = document.createElement('p');
    var myList = document.getElementById('result');

    // if ( typeof good === 'object' ) {
    //     return good;
    // } else {
    //     console.log('xXx');
    // }

    function loadGoods() {




        for(var i = 0; i < good.length; i++) {



            myImage.innerHTML = good[i].imageUrl;
            myName.innerHTML = good[i].name;
            myBrand.innerHTML = good[i].brand;
            myPrice.innerHTML = good[i].price;

            var list = good[i].milk;
            for (var j = 0; j < list.length; j++) {
                var listItem = document.createElement('li');
                listItem.innerHTML = list[j];
                myList.appendChild(listItem);
            }

            myUl.appendChild(myList);
            myUl.appendChild(myImage);
            myUl.appendChild(myName);
            myUl.appendChild(myBrand);
            myUl.appendChild(myPrice);

            section.appendChild(myUl);
        }
    }
    milk.addEventListener('click', loadGoods);


};



