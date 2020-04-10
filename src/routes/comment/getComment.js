const commentModel = require("./commentModel");

const getComment = async (req, res) => {
  const id = req.query.id;
  const user = await (await commentModel.findOne(id)).exec();
  return res.status(user ? 200 : 404).send(user ? user : "user not found");
};

module.exports = getComment;
