const express = require("express");

const router = express.Router();

const commentsRouter = require("./comments");

const rootRouter = require("./root");

router.use("/comments", commentsRouter);

router.use("/", rootRouter);

module.exports = router;
