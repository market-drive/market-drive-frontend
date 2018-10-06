// pie chart

google.charts.load('current', {packages:['corechart']});  // <-- load
google.charts.setOnLoadCallback(drawCategoriesChart);


function drawCategoriesChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Продукти харчування',     100],
    ['Товари для тварин',      101],
    ['Засоби по догляду',  300],
    ['Товари для дому та сім\'ї', 50]
  ]);

  var options = {
    title: 'Затраты по категориям товаров',
    backgroundColor: 'none'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}