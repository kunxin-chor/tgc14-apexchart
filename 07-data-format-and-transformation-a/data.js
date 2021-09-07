async function loadData() {
    let response = await axios.get('crime.csv');
    let csvData = response.data;
    let json = await csv().fromString(csvData);
    return json;
}

function transformData(rawData) {
    // find from the data, for year 2020, 
    // the number of preventable crime for each
    // divison under Clementi Police 

    // filter to keep only entries for Clementi Police
    // in the year 2020
    let clementiOnly = rawData.filter(function(n){
        return n.level_1.includes("Clementi")
                && n.year == 2020
                && n.level_1.includes("Total") == false;
    })
    // let clementiOnlyWithoutTotal = clementiOnly.filter(function(n){
    //     return n.level_1.includes('Total') == false;
    // })
    let labels = clementiOnly.map(function(n){
        return n.level_1.split('-')[1].trim();
    })
    let series = clementiOnly.map(function(n){
        return n.value;
    })
    return {
        'labels': labels,
        'series': series
    }
}