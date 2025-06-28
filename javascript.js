function reverse(arr){
    let verse = [];
    for (let i = arr.length; i < arr.length - 1; i--){
        verse.push(arr[i])
    }
    return verse;
}

//or 
function turn(arr){
    return arr.slice().reverse()
}