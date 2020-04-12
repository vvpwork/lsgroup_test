const argon2 = require("argon2");
const createError = require("http-errors");
const generateJWT = require("./generateJWT");
const userModel = require("../user/userModel");
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return next(createError(401, "user already exist"));
    }
    const correctPassword = argon2.verify(user.password, password);
    if (!correctPassword) return next(createError(401, "password incorect"));
    const userJWT = await generateJWT(user);
    req.session.token = userJWT;
    req.session.isAuthenticated = true;
    return res.send({
      isAuthenticated: true,
      user,
      token: userJWT,
    });
  } catch (err) {
    next(createError(404, err));
  }
};

module.exports = login;
