const userModel = require("./userModel");

const deletUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { deletedCount } = await userModel.deleteOne({ _id: id });
    res.status(deletedCount ? 200 : 404).send({
      deleted: deletedCount ? true : false,
      count: deletedCount,
    });
  } catch (err) {
    res.status(404).send({
      deleted: 0,
      err,
    });
  }
};

module.exports = deletUser;
