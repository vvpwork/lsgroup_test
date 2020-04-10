const jwt = require("jsonwebtoken");
const config = require("../../config");

module.exports = (user) => {
  const data = {
    id: user._id,
    email: user.email,
    name: user.name,
  };
  const secretKey = config.secret_key;
  const expiration = "6h";
  return jwt.sign({ data }, secretKey, { expiresIn: expiration });
};
