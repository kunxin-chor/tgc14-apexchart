// 1. define the options for the chart
let options = {
    'chart': {
        'type': 'bar',
        'height': '100%',
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

// 2. create the chart object
let chart = new ApexCharts(document.querySelector('#chart'), options);

// 3. render the chart (i.e, display the chart)
chart.render();