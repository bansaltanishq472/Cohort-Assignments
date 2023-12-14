const fs = require("fs");

let data = "This is the text that a.txt";
fs.writeFile("a.txt", data, "utf-8", function (err) {
    if (err) {
        throw new error("Error");
    }
    else {
        console.log("File Changed Successfully.");
    }
});