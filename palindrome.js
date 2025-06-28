function prod(arr){
    let num = 1;
    for (let i = 0; i < arr.length; i++){
        num *= arr[i]
    }
    return num;
}