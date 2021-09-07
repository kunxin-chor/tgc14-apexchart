window.addEventListener('DOMContentLoaded', async function(){
    let rawData = await loadData();
    let dataset = transformData(rawData);
    console.log(dataset)
    let options = {
        'chart': {
            'type': 'pie',
            'height': '100%'
        },
        'noData':{
            'text':"Please provide a divison name and year to draw the pie chart"
        },
        'labels': [],
        'series':[],
        'colors':['#E1C340', '#4CD7D0', '#A4E8E0', '#F8EA8C', '#E43D40']
    }

    let chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();

    document.querySelector("#draw-btn").addEventListener('click', async function(){
        let divison = document.querySelector('#divison').value;
        let year = document.querySelector('#year').value;
        let rawData = await loadData();
        let dataset = transformData(rawData, divison, year);

        chart.updateSeries(dataset.series);
        chart.updateOptions({
            'labels': dataset.labels
        })
    })


    
})