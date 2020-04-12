const createError = require("http-errors");
const userModel = require("./userModel");

const getUser = async (req, res, next) => {
  try {
    const { id } = req.query;
    const user = await userModel.findOne({ _id: id }).exec();
    return res.status(200).send(user);
  } catch (err) {
    next(createError(404, "user not found"));
  }
};

module.exports = getUser;
