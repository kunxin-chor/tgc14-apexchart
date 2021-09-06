async function loadData() {
    let response = await axios.get('graph-data.json');
    return response.data.yearly;
}