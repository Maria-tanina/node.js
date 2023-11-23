const fs = require("fs");

//fs functions with callbacks approach
fs.writeFile("./text.txt", "First line of text", (error) => {
    if(error) {
        console.log(error);
    } else {
        console.log("First line was written");
        fs.readFile("./text.txt", "utf-8", (error, data) => {
            if(error) {
                console.log(error)
            } else {
                console.log(data);
                fs.unlink("./text.txt", (error) => {
                    if(error) {
                        console.log("Error")
                    } else {
                        console.log("File was deleted");
                    }
                })
            }
        })
    }
})