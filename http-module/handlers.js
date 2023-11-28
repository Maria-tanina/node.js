const comments = require("./data");
const fs = require("fs");
const qs = require("querystring");

function getHome(req, res) {
  fs.readFile("./files/comment-form.html", (error, data) => {
    if (error) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "text/plain");
      res.end("Server error while loading html file");
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    }
  });
}

function getHtml(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write("<html><body><h1>Greetings from the http-server</h1>");
  res.write("</body></html>");
  res.end();
}
function getText(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.write("Hello World!");
  res.write("This is Node.js");
  res.write("Nice to meet you");
  res.end();
}

function getComments(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(comments));
}

function postComment(req, res) {
  if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const comment = qs.parse(body);
        comment.id = parseInt(comment.id);
        comments.push(comment);
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.write("<h1>Comment was posted</h1>");
        res.write("<a href='/'>Submit one more comment</a>");
        res.end();
      } catch (error) {
        res.statusCode = 400;
        res.setHeader("Content-type", "text/plain");
        res.end("Invalid form data");
      }
    });
  } else if (req.headers["content-type"] === "application/json") {
    let commentJSON = "";
    req.on("data", (chunk) => (commentJSON += chunk));
    req.on("end", () => {
      try {
        comments.push(JSON.parse(commentJSON));
        res.statusCode = 200;
        res.setHeader("Content-type", "text/plain");
        res.end("Comment was posted");
      } catch (error) {
        res.statusCode = 400;
        res.setHeader("Content-type", "text/plain");
        res.end("Invalid json");
      }
    });
  } else {
    res.statusCode = 400;
    res.setHeader("Content-type", "text/plain");
    res.end("Data must be in json format or as a form");
  }
}

function handleNotFound(req, res) {
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Page not found</h1>");
}

module.exports = {
  getHtml,
  getText,
  getComments,
  handleNotFound,
  postComment,
  getHome,
};
