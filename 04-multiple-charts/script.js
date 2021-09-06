let lineChartOptions = {
    'chart': {
        'type': 'line',  // specify a line chart
        'height': '100%',
        'width':'100%'
    },
    // series store the data that is the chart is drawing
    'series': [
        {
            'name': 'sightings',
            'data':[10, 13, 15, 22, 34, 23,55, 78, 44]
        },
        {
            'name': 'temperature',
            'data':[33, 21, 22, 24, 25, 26, 26, 21, 31, 44]
        }
    ],
    'xaxis': {
        'categories':['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct']
    }
}

let lineChart = new ApexCharts(document.querySelector('#line-chart'), lineChartOptions);
lineChart.render();

// SECOND CHART
let barChartOptions = {
    'chart': {
        'type': 'bar',
        'height': '100%',
        'width': '100%',
        'stacked': true
    },
    'series': [
        {
            'name': 'revenue',
            'data': [120000, 75000, 80000, 45000, 33000, 55000]
        },
        {
            'name':'loss',
            'data':[25000, 15000, 30000, 5000, 12000, 12500]
        }
    ],
    'xaxis': {
        'categories': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    }
}

// create the barchart object
let barChart = new ApexCharts(document.querySelector('#bar-chart'), barChartOptions);
barChart.render();