let input = prompt("Enter values: ");
let arr = input.split(",").map(Number);
let arr2 = [];

arr.forEach((item, index) => {
    if (item < 50 || item % 5 === 0){
        arr2.push(index)
    }
})
console.log(arr2)
