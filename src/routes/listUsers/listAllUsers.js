const userModel = require("../user/userModel");

const listAllUsers = async (req, res) => {
  try {
    const users = await userModel.find().populate("comment").exec();
    res.send(users);
  } catch (err) {
    res.status(404).send({
      comment: "users not found",
      err,
    });
  }
};

module.exports = listAllUsers;
