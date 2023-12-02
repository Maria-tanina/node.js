const { Transform } = require("stream");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "files", "stdin-dumb.txt");

const ws = fs.createWriteStream(filePath);

const upperCaseStream = new Transform({
  transform(chunk, encoding, callback) {
    const upperCased = chunk.toString().toUpperCase();
    callback(null, upperCased);
  },
});

const reverseStream = new Transform({
  transform(chunk, encoding, callback) {
    const reversedString = chunk.toString().split("").reverse().join("");
    callback(null, reversedString);
  },
});

process.stdin.pipe(upperCaseStream).pipe(reverseStream).pipe(ws);
