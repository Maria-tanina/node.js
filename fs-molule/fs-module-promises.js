const fs = require("fs/promises");

//fs functions with promises approach

fs.writeFile(".text.txt", "First line of the text")
    .then(() => console.log("Text was written"))
    .then(() => fs.appendFile("./text.txt", "Second line of the text"))
    .then(() => fs.unlink("./text.txt"))
    .then(() => console.log("File was deleted"))
    .catch((error) => console.log(error))