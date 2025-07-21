function frequencyCounter(dataArr){
    let frequencyObj = {};
    for (const x of dataArr){
        if (x in frequencyObj){
            frequencyObj[x] += 1
        } else {
            frequencyObj[x] = 1
        }
    } 
    return frequencyObj;
}