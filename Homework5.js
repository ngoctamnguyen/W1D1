"use strict";

const prompt = require("prompt-sync")();

let costOfHouse = prompt("Please enter cost of house: ");
let downPayment;
if (costOfHouse < 50000) {
    downPayment = 0.05 * costOfHouse;
} else if (costOfHouse >= 50000 && costOfHouse < 100000) {
    downPayment = 1000 + 0.1*(costOfHouse - 50000);
} else if ( costOfHouse >= 100000 && costOfHouse < 200000) {
    downPayment = 2000 + 0.15*(costOfHouse - 100000);
} else {
    downPayment = 5000 + 0.1*(costOfHouse - 200000);
}

console.log(downPayment);
