let number = prompt("enter your phone")
let slice = number.slice(-4)
let final = slice.padStart(11 , "*")
console.log(final);
