const argon2 = require("argon2");
const userModel = require("./userModel");
const generateJWT = require("../auth/generateJWT");

const addUser = async (req, res) => {
  const { email, password } = req.body;
  const hashPasword = await argon2.hash(password);

  const newUser = new userModel({
    email: email.toLowerCase(),
    password: hashPasword,
  });
  const user = await userModel.findOne({ email: email.toLowerCase() });
  if (user) {
    return res.status(404).send("error: user with this email already exist");
  }
  const userSave = await newUser.save();
  const token = await generateJWT(userSave);
  req.session.token = token;
  req.session.isAuthenticated = true;

  return res.status(200).send({ userSave, token });
};

module.exports = addUser;
