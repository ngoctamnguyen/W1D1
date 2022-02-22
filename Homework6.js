"use strict";

const prompt = require("prompt-sync")();

let myNumber = parseInt(prompt("Please enter a number: "));
let sumDigits = 0;

while (myNumber != 0) {
    sumDigits += myNumber % 10;
    myNumber = Math.floor(myNumber/10); 
}

console.log(sumDigits);