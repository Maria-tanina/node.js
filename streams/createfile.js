const fs = require("fs");
const path = require("path");

if (!process.argv[2] || !process.argv[3]) {
  console.log("Filename and lines quantity must be supplied as arguments");
  process.exit(0);
}

const fileName = process.argv[2];
const lineQty = parseInt(process.argv[3]);

if (isNaN(lineQty)) {
  console.log("Lines quantity must be a number");
  process.exit(0);
}
const filePath = path.join(__dirname, "files", fileName);

const ws = fs.createWriteStream(filePath);

for (let i = 1; i <= lineQty; i++) {
  ws.write(`${i}\n`);
}

ws.end(() => {
  console.log("File was created");
});
