const commentModel = require("./commentModel");

const updateComment = async (req, res) => {
  try {
    const { id, description } = req.body;
    const oldComment = await commentModel.findById(id);
    oldComment.description = description;
    const newComment = await oldComment.save();
    return res.status(201).send(newComment);
  } catch (err) {
    return res.status(404).send({
      comment: "comment not found",
      err,
    });
  }
};

module.exports = updateComment;
