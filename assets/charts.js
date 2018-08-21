// pie chart

google.charts.load('current', {packages:['corechart']});  // <-- load
google.charts.setOnLoadCallback(drawCategoriesChart);


function drawCategoriesChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Продукти харчування',     11],
    ['Товари для тварин',      2],
    ['Засоби по догляду',  2],
    ['Товари для дому та сім\'ї', 2]
  ]);

  var options = {
    title: 'Затраты по категориям товаров',
    backgroundColor: 'none'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}