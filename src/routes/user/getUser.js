const userModel = require("./userModel");

const getUser = async (req, res) => {
  try {
    const id = req.query.id;
    const user = await userModel.findOne({ _id: id }).populate('comment').exec();
    return res.status(200).send(user);
  } catch (err) {
    console.log(err);
    res.status(400).send({
      comment: "user not found",
      err,
    });
  }
};

module.exports = getUser;
