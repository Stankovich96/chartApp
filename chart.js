//https://github.com/Stankovich96/chartApp.git


// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Languages');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['JavaScript', 3],
    ['PhP', 1],
    ['Python', 1],
    ['Go', 1],
    ['Java', 2]
  ]);

  // Set chart options
  var options = {'title':'The Popularity Of Programming Languages',
                 'width':1000,
                 'height':700};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}


