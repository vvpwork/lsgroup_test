const jwt = require("jsonwebtoken");
const config = require("../config");

const jwtMiddelware = async (req, res, next) => {
  try {
    const { headers } = req;
    const userToken = headers["x-auth-token"];
    const apiKey = headers["x-api-key"];
    const sessionToken = req.session.token;

    if (apiKey === config.api_key) return next();

    if (!sessionToken) return res.status(404).send("session token was missing");
    const { data } = jwt.verify(sessionToken, config.secret_key);

    if (!userToken) return res.status(404).send("token a missing");
    const validToken = await jwt.verify(userToken, config.secret_key);

    if (!validToken) return res.status(404).send("token not valid");

    if (validToken.data.id !== data.id)
      return res.status(404).send("ha ha your token invalid");
    next();
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = jwtMiddelware;
