'use strict'

// let num1 = 10;
// let num2 = 2;

const readline = require('readline-sync');

process.stdout.write("Enter the first number: ")
let num1 = Number(readline.question());
process.stdout.write("Enter the second number: ")
let num2 = Number(readline.question());

console.log("Sum: " + (num1 + num2));
console.log("Difference: " + Math.abs(num1 - num2));
console.log("Product: " + (num1 * num2));
console.log("Quotient: " + (num1 / num2));
console.log("Remainder: " + (num1 % num2));
console.log("Value of num1 after increment: " + (++num1));
console.log("Value of num2 after decrement: " + (--num2));
