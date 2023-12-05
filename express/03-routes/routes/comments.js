const express = require("express");
const {
  getCommentsHandler,
  getCommentHandler,
  postCommentsHandler,
} = require("../controllers/comments");

const router = express.Router();

router.get("/", getCommentsHandler);

router.post("/", postCommentsHandler);

router.get("/:commentId", getCommentHandler);

module.exports = router;
