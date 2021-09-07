window.addEventListener('DOMContentLoaded', async function(){
    
    let options = {
        'chart': {
            'type':'line',
            'height': '100%'
        },
        'series': [],
        'noData':{
            'text':'Please wait, data is loading'
        }
    }

    let chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();
 
    let rawData = await loadData();
    let transformed = transformData(rawData);
    chart.updateSeries([
        {
            'name':'Sales',
            'data':transformed
        }
    ]);

})