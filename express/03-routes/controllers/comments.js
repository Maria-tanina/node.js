const getCommentsHandler = (req, res) => {
  res.send("Get comments route");
};

const postCommentsHandler = (req, res) => {
  res.send("Post comments route");
};

const getCommentHandler = (req, res) => {
  console.log(req.params.commentId);
  res.send("Get comment route");
};

module.exports = { getCommentsHandler, postCommentsHandler, getCommentHandler };
