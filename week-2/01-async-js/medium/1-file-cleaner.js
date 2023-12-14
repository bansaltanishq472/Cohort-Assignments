const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
    if (err) {
        throw new error("Error");
    }

if (data) {
    let data1 = data.split(/\s+/).join(' ');
    fs.writeFile("a.txt", data1, "utf-8", function (err, data) {
        if (err) {
            throw new error("Error");
        }
        else {
            console.log("File Cleaner Is Done.");
        }
    });
}
});