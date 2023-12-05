const express = require("express");

const app = express();

const PORT = 3001;

const handler1 = (req, res, next) => {
  console.log("First handler");
  next();
};

const handler2 = (req, res) => {
  console.log("Second handler");
  res.send("Response from Express");
};

app.get("/", handler1, handler2);

app.listen(PORT);
