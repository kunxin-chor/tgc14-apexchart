async function loadData() {
    let response = await axios.get('crime.csv');
    let csvData = response.data;
    let json = await csv().fromString(csvData);
    return json;
}

function transformData(rawData, divison, year) {
    // find from the data, for year 2020, 
    // the number of preventable crime for each
    // divison under Clementi Police 

    // filter to keep only entries for Clementi Police
    // in the year 2020
    let clementiOnly = rawData.filter(function(n){
        return n.level_1.includes(divison)
                && n.year == year
                && n.level_1.includes("Total") == false;
    })
    let labels = clementiOnly.map(function(n){
        return n.level_1.split('-')[1].trim();
    })
    let series = clementiOnly.map(function(n){
        return parseInt(n.value);
    })
    return {
        'labels': labels,
        'series': series
    }
}

function transformDataIterative(rawData, divison, year) {
    let labels = [];
    let results = [];
    for(let d of rawData) {
        if (d.level_1.includes(divison) 
            && d.year == year 
            && d.level_1.includes('Total') == false) {
                labels.push(d.level_1);
                results.push(parseInt(d.value))
            }
    }

    // let labels = [];
    // for (let r of results) {
    //     labels.push(r.level_1);
    // }

    // let series = [];
    // for (let r of results) {
    //     series.push(r.value);
    // }

    return {
        'labels': labels,
        'series': series
    }
}