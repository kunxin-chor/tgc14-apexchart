window.addEventListener('DOMContentLoaded', async function(){
    console.log('DOMContentLoaded')
    let rawData = await loadData();
    let dataset = transformData(rawData);
    console.log(dataset)
    let options = {
        'chart': {
            'type': 'pie',
            'height': '100%'
        },
        'labels': dataset.labels,
        'series': dataset.series,
        // 'colors':['#E1C340', '#4CD7D0', '#A4E8E0', '#F8EA8C', '#E43D40']
    }

    let chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();
    console.log(chart);

    
})