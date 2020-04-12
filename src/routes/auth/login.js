const argon2 = require("argon2");
const generateJWT = require("./generateJWT");
const userModel = require("../user/userModel");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).populate("comment").exec();
  if (!user) {
    return res.status(404).send("user not found");
  }
  const correctPassword = argon2.verify(user.password, password);
  if (!correctPassword) return res.status(404).send("password incorect");
  const userJWT = await generateJWT(user);
  req.session.token = userJWT;
  req.session.isAuthenticated = true;
  return res.send({
    isAuthenticated: true,
    user,
    token: userJWT,
  });
};

module.exports = login;
