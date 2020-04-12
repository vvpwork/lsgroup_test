const argon2 = require("argon2");
const createError = require("http-errors");
const userModel = require("./userModel");
const generateJWT = require("../auth/generateJWT");

const addUser = async (req, res, next) => {
  try {
    const { email, password, name, surname } = req.body;
    const hashPasword = await argon2.hash(password);

    const newUser = new userModel({
      email: email.toLowerCase(),
      password: hashPasword,
      name,
      surname,
    });
    const user = await userModel.findOne({ email: email.toLowerCase() });
    if (user) {
      return next(
        createError(404, "error: user with this email already exist")
      );
    }
    const userSave = await newUser.save();
    const token = await generateJWT(userSave);
    req.session.token = token;
    req.session.isAuthenticated = true;

    return res
      .status(200)
      .send({ user: userSave, token, isAuthenticated: true });
  } catch (err) {
    next(createError(404, err));
  }
  return next();
};

module.exports = addUser;
