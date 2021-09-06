let options = {
    'chart': {
        'type': 'pie',
        'height': '100%'
    },
    // a pie chart only has one series
    series:[21, 23, 22, 26, 45],

    // labels are the name for each slice of the 'pie'
    labels:['English', 'Mathematics', 'Mother Tongue', 'Science', 'PE'],

    // state the colours for the slice
    colors:['#E1C340', '#4CD7D0', '#A4E8E0', '#F8EA8C', '#E43D40']
}

let chart = new ApexCharts(document.querySelector('#chart'), options);

chart.render();