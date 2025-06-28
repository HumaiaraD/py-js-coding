let str = parseInt("Enter your text:");
const backwards = str.split('').reverse().join('');

if (str === backwards){
    console.log("It is a palindrome!")
} else {
    console.log("It is not a palindrome.")
}