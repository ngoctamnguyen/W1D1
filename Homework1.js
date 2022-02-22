"use strict";

const prompt = require("prompt-sync")();

let isSalesman = prompt("Are you salesman (Yes/No)?: ");
let yourSales = prompt("What is your sales?: ");
let commission = 0.0;
if ( isSalesman == "Yes" ) {
    if ( yourSales > 500 ) { 
        commission = 0.02;
    } 
    else if ( commission >= 300 && commission <= 500) {
        commission = 0.01;
    }
} else {
    if ( yourSales > 500 ) {
        commission = 0.03;
    }
    else if ( commission >= 300 && commission <= 500 ) {
        commission = 0.02;
    }
    }

console.log("Your commission is:  ", commission);