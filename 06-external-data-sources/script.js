let options = {
    chart: {
        'type':'line',
        'height':'100%'
    },
    series:[
        // look ma, no data
    ],
    noData: {
        'text':'Loading data...'
    }
}

let chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();

window.addEventListener('DOMContentLoaded', async function(){
    let series = await loadData();
    chart.updateSeries([
        {
            'name':'Sales',
            'data':series
        }
    ])
})