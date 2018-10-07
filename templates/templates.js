
var btn = document.getElementById('create');
var res = document.getElementById('template');


var string = [];
var nameList = document.createElement('span');
function listCreate() {
    var tr = document.createElement('tr');
    var td = document.createElement('td');

    td.classList.add("template");
    td.style.border = "1px solid black";
    td.style.borderRadius = "5px";
    var create = prompt('Введите название шаблона!');
    //let reg = /[A-Za-z][0-9].*[!@#$%^&*() =+_-]/;

    for (var i = 0; i < create.length; i++) {
            string = create;
    }
    nameList.innerHTML = string;
    td.appendChild(nameList);
    tr.appendChild(td);
    res.appendChild(tr);
    saveList();
    }
    btn.addEventListener('click', listCreate);

    function addToList() {

    }

    function getList() {
        goodsList = JSON.parse(localStorage.getItem(string));
        return goodsList;
    }

    function saveList() {
        localStorage.setItem(string, JSON.stringify(goodsList));
        return string;
    }

    function add() {

    }


function listDelete() {
    var td = document.getElementsByClassName('template').value;
    var $this = $(this);
    td = $this.attr()
}
