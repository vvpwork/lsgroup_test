const commentModel = require("./commentModel");
const userModel = require("../user/userModel");

const addComment = async (req, res) => {
  try {
    const { author, description } = req.body;
    const newComment = new commentModel({ author, description });
    const saveComment = await newComment.save();
    const user = await userModel.findOne({ _id: author });
    user.comment.push(saveComment._id);
    await user.save();
    return res
      .status(200)
      .send({ comment: `Comment was saved  `, ...saveComment._doc });
  } catch (err) {
    res.status(404).send({
      comment: "user not found",
      err,
    });
  }
};

module.exports = addComment;
