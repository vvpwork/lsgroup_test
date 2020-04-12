const createError = require("http-errors");
const commentModel = require("./commentModel");

const updateComment = async (req, res, next) => {
  try {
    const { id, description } = req.body;
    const oldComment = await commentModel.findById(id);
    oldComment.description = description;
    const newComment = await oldComment.save();
    return res.status(201).send(newComment);
  } catch (err) {
    next(createError(404, 'comment not found'));
  }
};

module.exports = updateComment;
