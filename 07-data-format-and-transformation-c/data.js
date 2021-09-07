const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
async function loadData() {
    let response = await axios.get('https://raw.githubusercontent.com/kunxin-chor/sales-data/main/data/sales.json')
    return response.data;
}

function transformData(rawData) {
    let simplified = rawData.map(function(dataPoint){
        return {
            'date': new Date(dataPoint.completed_at),
            'amount': dataPoint.payment.amount/100
        }
    })
    let filtered = simplified.filter(function(dataPoint){
        return dataPoint.date.getFullYear() == 2020;
    })

    let recordsWithMonth = filtered.map(function(dataPoint){
        return {
            'month': dataPoint.date.getMonth(),
            'amount': dataPoint.amount,
        }
    })

    let groups = {};
    for (let i=0; i<12; i++) {
        groups[i] = [];
    }
    for(let dataPoint of recordsWithMonth) {
        let month = dataPoint.month;
        groups[ month ].push(dataPoint);
    }

    // let series = [];
    // for (let key in groups) {
    //     let eachMonth= groups[key];
    //     let reducer = function(totalSoFar, currentDataPoint) {
    //         return currentDataPoint.amount + totalSoFar;
    //     }
    //     let total = eachMonth.reduce(reducer, 0);
    //     series.push({
    //         x: parseInt(key) + 1,
    //         y: total
    //     });
    // }

    // // second argument for the map function will be the index
    // let series = Object.values(groups).map(function(group, month){
    //     let reducer = function(totalSoFar, dataPoint) {
    //         return totalSoFar + dataPoint.amount
    //     }
    //     return {
    //         x: monthNames[month],
    //         y: group.reduce(reducer, 0)
    //     }
    // })

    // full iterative solution
    
    let series = [];
    for (let key in groups) {
        let eachMonth= groups[key];
        let total = 0;
        for(let dataPoint of eachMonth) {
            total += dataPoint.amount;
        }
        series.push({
            x: parseInt(key) + 1,
            y: total
        });
    }

    return series;
}