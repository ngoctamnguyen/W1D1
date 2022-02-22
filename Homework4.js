"use strict";

for (let i = 1; i <= 5; i++) {
    let text = "";
    for (let j = 1; j <= 5; j++) {
        text += j;
    }
    console.log(text);
}

for (let i = 1; i <= 5; i++) {
    let text = "";
    for (let j = 1; j <= i; j++) {
        text += i;
    }
    console.log(text);
}

for (let i = 5; i >= 1; i--) {
    let text = "";
    for (let j = 1; j <= i; j++) {
        text += i;
    }
    console.log(text);
}
