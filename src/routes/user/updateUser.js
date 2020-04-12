const argon2 = require("argon2");
const createError = require("http-errors");
const userModel = require("./userModel");

const updateUser = async (req, res, next) => {
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
    next(createError(404, "user not found"));
  }
};

module.exports = updateUser;
