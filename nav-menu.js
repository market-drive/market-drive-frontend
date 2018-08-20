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


};



