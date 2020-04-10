const commentModel = require("../comment/commentModel");

const listComments = async (req, res) => {
  try {
    const comments = await commentModel.find();
    res.send(comments);
  } catch (err) {
    res.status(404).send({
      comment: "Comment not found",
      err,
    });
  }
};

module.exports = listComments;
