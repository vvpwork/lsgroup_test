const userModel = require("./userModel");
const argon2 = require("argon2");

const updateUser = async (req, res) => {
  try {
    let { id, comment, password, ...user } = req.body;
    if (password) password = await argon2.hash(password);
    const updateUser = await userModel.findByIdAndUpdate(
      id,
      { ...user, password },
      { new: true }
    );

    return res.status(201).send(updateUser);
  } catch (err) {
    console.log(err);
    res.status(404).send({
      comment: "user not found",
      err,
    });
  }
};

module.exports = updateUser;
