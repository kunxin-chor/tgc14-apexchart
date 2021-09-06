// 1. define the chart options
let options = {
    'chart': {
        'type': 'line',  // specify a line chart
        'height': '100%'
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

// 2. create the chart object
let chartDiv = document.querySelector('#chart');
// new ApexChart(options) will return a
// new ApexChart object using the div and the options
// we passed as the arguments
let chart = new ApexCharts(chartDiv, options);

// 3. instruct the chart to draw itself
chart.render();