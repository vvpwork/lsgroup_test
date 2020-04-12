const createError = require("http-errors");
const userModel = require("../user/userModel");

const listAllUsers = async (req, res) => {
  try {
    const users = await userModel.find().populate("comment").exec();
    res.send(users);
  } catch (err) {
    next(createError(404, "users empty"));
  }
};

module.exports = listAllUsers;
