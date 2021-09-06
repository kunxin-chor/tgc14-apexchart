let options = {
    'chart': {
        'id': 'reach',
        'type':'line',
        'height':'100%',
        'width':'100%',
        'group': 'campaign-charts'
    },
    'series':[
        {
            'name':'reach',
            'data':reach
        }
    ],
    'xaxis': {
        'categories': categories
    },
    'yaxis': {
        'labels': {
            'minWidth': 40
        }
    }
}

let reachChart = new ApexCharts(document.querySelector('#reach-chart'),
                                options);

reachChart.render();