var clickBtn = document.getElementById('send-to-user');
var alert;
function send() {
    alert = alert('Ваш заказ принят! ' +
        'Хорошего Вам дня ;)');
}
$(clickBtn).on('click', send);