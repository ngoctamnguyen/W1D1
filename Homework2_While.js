"use strict";

const prompt = require("prompt-sync")();

let yourAge = prompt("Please enter your age: ");

while ( yourAge < 18 ) {
    yourAge = prompt("Please enter your age again: ");
}
console.log("Your age: ", yourAge);