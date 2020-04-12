const createError = require('http-errors');
const commentModel = require("../comment/commentModel");

const listComments = async (req, res, next) => {
  try {
    const comments = await commentModel.find();
    res.send(comments);
  } catch (err) {
    next(createError(404, "comments not found"))
  }
};

module.exports = listComments;
