"use strict";

const prompt = require("prompt-sync")();

let initAmount = prompt("Please enter initial amount: ");
let annualRate = prompt("Please enter annual interest rate (%): ");
let numberOfYear = prompt("Please enter number of year: ");

let balance = initAmount*Math.pow(( 1 + annualRate/100), numberOfYear);


console.log("Your balance: ", balance);