$(document).ready(function () {
	// отдельный JSON запрос, формирование меню слева
	console.clear();
		let obj;
		let dataKey;
		let dateCont = document.querySelector('.purch-item');
		let purchTable = document.querySelector('.purch-list');
		let dateWrap = document.querySelector('.history-sumWrap>.date');
		let sumWrap = document.querySelector('.history-sumWrap>.sum');	
		

	$.getJSON('http://54.37.125.180:8080/marketdrive/api/products_full', function(data){
		for (let key in data) {
		 dataKey = data[key];
		}
		createTableOnLoad();
    })	

	$.getJSON('http://54.37.125.180:8080/marketdrive/api/purchases', 
	  function(data){
		for (let key in data) {
			obj = data[key];
		}
		createDateMenu();
	})

	function createDateMenu () {
		let divToDate;
		obj.forEach(function (item, i) {
			for (let key in item) {
				if (key === 'date') {
				   divToDate = document.createElement('div');
				   divToDate.classList.add('dateStyle');
				   divToDate.innerHTML = item[key];
				   if (!dateCont.childNodes.length) {
				   		divToDate.classList.add('dateFirst');
				   }
				   dateCont.appendChild(divToDate);
				}
			}
		})
	}

	dateCont.addEventListener('click', startCreateTable);

	function startCreateTable (e) {		
		createTable();
		highlightDate(e); 
		addDate(e);
		getStoreAdress(e);
		insertTimeSeter();
		insertButton();
	}

	function createTable () {
		let table = '',
			thead = '',
			tbody = '',
			tableTr = '',
			quantity = 0,
		    productID = '',
		    productPrice = '',
		    calcPrice = calcSum(),
			arrPurchase = getPurchace();

		arrPurchase.forEach(function (item, i) {
		    for (let key in item) {
		  		productID = getProductsName(item['product-id']);
		  		productPrice = Number(getProductsPrice(item['product-id']));
		  		quantity = item.quantity;
		  		calcPrice(productPrice, quantity);
		  		tableTr += `<tr><td class="td">${productID}</td> <td class="td td-quantity">${quantity}</td> <td class="td td-price">${productPrice} грн.</td> </tr>`; 
		  	return false;
			}
		})
			tbody = `<tbody> ${tableTr} </tbody>`; 
			thead = `<thead> <th class="th th-first">Товар</th> <th class="th">Количество</th><th class="th th-last">Цена</th></thead>`;
			table = `<table class="table"> ${thead} ${tbody} </table>`;
			purchTable.innerHTML = table;
			addSum(` ${calcPrice()} грн.`);
	}

	function createTableOnLoad() {
		$('.dateFirst').click();
	}

	function getProductsName (id) {
		let name;		
			dataKey.forEach(function (item) {
				if (item.id === id) {
					name = item.name;
				}
			})
			 return name;
		}

	function getPurchace () {
		let productToTable;
		let itemsToAdd = getItemToAdd();
		for (let key in itemsToAdd) {
			if (key === 'purchace') {
				productToTable = itemsToAdd.purchace;
			}
		}
			return productToTable;
	}

	function getItemToAdd () {
		let itemToAdd;
		let target = event.target.innerHTML;
		obj.forEach(function (item, i) { 
			for (let key in item) {
				if (target === item.date) {
						itemToAdd = item;
					return false;
				}
			}
				
		})
			return itemToAdd;
	}

	function getProductsPrice (id) {
		let price;
			dataKey.forEach(function (item) {
				if (item.id === id) {
					price = item.price;
				}
			})
			 return price.toFixed(2);
		}

	function highlightDate (e) {
		let dateNodes =  dateCont.childNodes
		dateNodes.forEach(function (item){
			item.classList.remove('activeDate');
		})
		e.target.classList.add('activeDate');
	}

	function getStoreAdress (e) {
		let storeAdress;
		let adressSpan = document.createElement('span');
		let target = e.target.innerHTML;
			obj.forEach(function (item) {
				for (let key in item) {
					if (target === item.date) {
						storeAdress = item.store['store-adress'];
						return false
					}
				}
			})
			adressSpan.innerHTML = storeAdress;
			adressSpan.classList.add('adressSpan');
			purchTable.appendChild(adressSpan);
		}

	function calcSum (price, quant) {
  		let count = 0;
  	    return function (price, quant) {
	    	if (arguments.length) {
	    	return	count+= price * quant;
	      } else {
	      	return count.toFixed(2);
	      }
	    }
	}

	function addSum (sum) {
		sumWrap.innerHTML = sum;
	}

	function addDate(e) {
		dateWrap.innerHTML = ` ${e.target.innerHTML}`;
	}

//events
let repeatOrder = document.querySelector('.history-linkContain>.history-navItem');
	repeatOrder.addEventListener('click', repeatClickFn);
	purchTable.addEventListener('change', changeInp);
	purchTable.addEventListener('click', removeRow);

	function repeatClickFn(){
		let quantity = document.querySelectorAll('.td-quantity');
			quantity.forEach(function (item) {
				temp = item.innerHTML;
				item.innerHTML = `<input class="inpQuantity" type="Number" min="1" name="quantityInp" value=${temp}> <span class='removeSpan'>&#10008</span>`;
			})
			showSetBtn();
			repeatOrder.removeEventListener('click', repeatClickFn);
			dateCont.removeEventListener('click', startCreateTable);
		document.addEventListener('click', eventRemoveInputs);
	}
// fix the bag on reconversion (when user ins 0 or nothing)
	function eventRemoveInputs(e) {
		let quantity = document.querySelectorAll('.td-quantity');
	    if (e.target.tagName !== 'INPUT' && 
	    	e.target.className !== 'history-navSpan' && 
	    	e.target.className !== 'removeSpan') {
	    	let inpVal,
	    	conversSum = conversionTableData();
	 		quantity.forEach(function (item) {	
	 			inpVal = Number(item.querySelector('.inpQuantity').value);
	 			if (inpVal) {
		   			item.innerHTML = inpVal;
				} else {
					item.innerHTML = 1;
				}
			})	
			addSum(` ${conversSum} грн.`);
			document.removeEventListener('click', eventRemoveInputs);
			repeatOrder.addEventListener('click', repeatClickFn);
			dateCont.addEventListener('click', startCreateTable);
	    }
	}

	function insertTimeSeter() {
		let timeSeter = document.createElement('div');
		let adressSpan = document.querySelector('.adressSpan');	
		timeSeter.classList.add('timeSeterDiv');
		timeSeter.style.display = 'none';
		timeSeter.innerHTML = `Забрать в <input type="Number" name="hour" value="09" min="00" max="23">
		: <input type="Number" name="minutes" value="15" min="00" max="55" step="5">`
		purchTable.insertBefore(timeSeter, adressSpan);
	}

	function insertButton () {
		let orderButton = document.createElement('div');
		let adressSpan = document.querySelector('.adressSpan');	
		orderButton.classList.add('sendOrderBtn');
		orderButton.style.display = 'none';
		orderButton.innerHTML = `<input type="submit" name="sendOrderBtn" value="Отправить заказ">`
		purchTable.insertBefore(orderButton, adressSpan);
	}

	function showSetBtn() {
		let btn = document.querySelector('.sendOrderBtn');
		let timeSet = document.querySelector('.timeSeterDiv');
		btn.style.display = 'block';
		timeSet.style.display = 'block';
	}
	
	function changeInp (e) {
			let conversSum = conversionTableData();
		 if (e.target.className === 'inpQuantity') {
			addSum(` ${conversSum} грн.`);
		}
	}

	function conversionTableData () {
		let cells,
		price = 0,
		quantity = 0,
		conversSum = calcSum(),
		tableRows = document.querySelector('.table').rows;
		tableRows = Array.from(tableRows);
			tableRows.forEach(function(item) {
				cells = Array.from(item.cells);
				cells.forEach(function(item) {
						if (item.className === 'td td-quantity') {
						    quantity = item.querySelector('.inpQuantity').value;
						}
						if (item.className === 'td td-price') {
							price = item.innerHTML.slice(0, -5);
						} else return false;
						conversSum(price, quantity);
					})    
			})
				return conversSum();
		}

	function removeRow (e) {
		if (e.target.className === 'removeSpan') {
			$(e.path[2]).hide('slow', function(){
				$(this).remove();
			});
		}
	}

})
	
	
