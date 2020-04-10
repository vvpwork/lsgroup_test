const commentModel = require("./commentModel");

const deleteComment = async (req, res) => {
  const id = req.params.id;
  const { deletedCount } = await commentModel.deleteOne({ _id: id }).exec();
  res.status(deletedCount ? 200 : 404).send(`delet ${deletedCount} object`);
};

module.exports = deleteComment;
