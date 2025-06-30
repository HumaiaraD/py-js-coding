function fibo(i){
    if (i === 0) return 0;
    if (i === 1) return 1;
    let a = 0, b = 1;
    for (let n = 2; n <= i; n++){
        [a, b] = [b, a + b]
    }
    return b;
}