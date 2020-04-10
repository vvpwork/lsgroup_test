const userModel = require("../user/userModel");

const listAllUsers = async (req, res) => {
  const users = await userModel.find().populate("comment").exec();
  if(!users) return res.status(404).send('users not found')
  res.send(users);
};

module.exports = listAllUsers;
