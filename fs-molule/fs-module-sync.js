const fs = require("fs");

//sync fs functions

fs.writeFileSync("./text.txt", "First line of the text");
console.log("File was written");

fs.appendFileSync("./text.txt", "Second line of the text");
console.log("Second line of the file was written");

fs.unlinkSync("./text.txt");
