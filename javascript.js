let input = prompt("Enter values:");
let arr = input.split(",");  
let arr2 = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i].trim().length > 5) {
        arr2.push(arr[i].trim());
    }
}

console.log(arr2);

//or

let num = prompt("Enter value: ");
let arr3 = num.split(",");

let arr4 = arr3.filter(item => item.trim().length > 5);

console.log(arr4);

