let text = prompt("Enter text: ");
let delimiter = prompt();

let result = text.trim().split(" ");
let finalResult = result.join(delimiter);

console.log(finalResult)
