function drawStackedChart(series, xaxis, element) {
    let options = {
        'chart': {
            'type': 'bar',
            'height': '100%',
            'width': '100%',
            'stacked': true
        },
        'series': series,
        'xaxis': xaxis
    }
    let chart = new ApexCharts(element, options);
    chart.render();
    return chart;
}

function drawEarnings() {
    let data = [
        {
            'name': 'revenue',
            'data': [120000, 75000, 80000, 45000, 33000, 55000]
        },
        {
            'name': 'loss',
            'data': [25000, 15000, 30000, 5000, 12000, 12500]
        }
    ];
    let xaxis =  {
                'categories': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
            }
    let element = document.querySelector('#bar-chart');
    let earningChart = drawStackedChart(data, xaxis, element );
    return earningChart;
}
