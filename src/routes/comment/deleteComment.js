const commentModel = require("./commentModel");

const deleteComment = async (req, res) => {
  try {
    const id = req.params.id;
    const { deletedCount } = await commentModel.deleteOne({ _id: id });
    res.status(deletedCount ? 200 : 404).send({
      deleted: deletedCount ? true : false,
      count: deletedCount,
    });
  } catch (err) {
    res.status(404).send({
      deleted: false,
      err,
    });
  }
};

module.exports = deleteComment;
