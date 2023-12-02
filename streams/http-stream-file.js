const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    const filepath = path.join(__dirname, "files", "index.html");
    const rs = fs.createReadStream(filepath);
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    rs.pipe(res);
  }
});

server.listen(3001, () => {
  console.log("Server was started");
});
