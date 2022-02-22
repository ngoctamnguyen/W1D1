"use strict";

const prompt = require("prompt-sync")();

let yourAge;
do {
    yourAge = prompt("Please enter your age: ");
} while ( yourAge < 18 )

console.log("Your age: ", yourAge);