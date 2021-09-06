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