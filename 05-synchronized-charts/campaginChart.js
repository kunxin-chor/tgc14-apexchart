const campaignChartOptions = {
    'chart': {
        'id':'campaign',
        'type': 'line',
        'height': '100%',
        'width': '100%',
        'group': 'campaign-charts'
    },
    'series': [
        {
            'name':'campagins',
            'data': campaigns, // campaigns array must be global
            'color':'#F37970'
        }
    ],
    'xaxis': {
        'categories': categories // categories array must be global
    },
    'yaxis': {
        'labels': {
            'minWidth': 40
        }
    }

}

let campaignChart = new ApexCharts(document.querySelector('#campaign-chart'), campaignChartOptions);

campaignChart.render();