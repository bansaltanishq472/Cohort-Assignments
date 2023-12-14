const fs = require("fs");

setTimeout(function () {
    console.log("Hi There");
}, 1000);

console.log("Before Reading");

function reading() {
    fs.readFile("a.txt", "utf-8", function (err, data) {
        console.log(data); 
    });
}
reading();

let a = 0;
for (let index = 0; index < 100000000; index++) {
    a++;
}
console.log(a);