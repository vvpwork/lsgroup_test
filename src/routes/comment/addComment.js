const commentModel = require("./commentModel");
const userModel = require("../user/userModel");

const addComment = async (req, res) => {
  const { author, description } = req.body;
  const newComment = new commentModel({ author, description });
  const saveComment = await newComment.save();
  const user = await userModel.findOne({ _id: author });
  user.comment.push(saveComment._id);
  await user.save();
  return res.status(200).send(`Comment  was saved `);
};

module.exports = addComment;
