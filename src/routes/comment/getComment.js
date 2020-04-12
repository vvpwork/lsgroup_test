const createError = require("http-errors");
const commentModel = require("./commentModel");

const getComment = async (req, res, next) => {
  try {
    const id = req.query.id;
    const comment = await commentModel.findById(id);
    return res.status(200).send(comment);
  } catch (err) {
    next(createError(404, "comments not fond"));
  }
};

module.exports = getComment;
