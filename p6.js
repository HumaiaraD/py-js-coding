text = prompt("Enter text: ");
char = text.toLowerCase();
count = 0;
for (let i = 0; i < char.length; i++){
    if (char[i] === 'p'){
        count++;
    }
}
console.log(count)