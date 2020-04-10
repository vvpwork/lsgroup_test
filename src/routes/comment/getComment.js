const commentModel = require("./commentModel");

const getComment = async (req, res) => {
  try {
    const id = req.query.id;
    const comment = await commentModel.findById(id);
    return res.status(200).send(comment);
  } catch (err) {
    return res.status(404).send({
      comment: "Comment not found",
      err,
    });
  }
};

module.exports = getComment;
