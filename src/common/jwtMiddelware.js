const jwt = require('jsonwebtoken');
const createError = require('http-errors');

const config = require('../config');

const jwtMiddelware = async (req, res, next) => {
  try {
    const { headers } = req;

    const userToken = headers['x-auth-token'];
    const apiKey = headers['x-api-key'];

    const sessionToken = req.session.token;
    if (apiKey === config.api_key) return next();
    if (!sessionToken) return next(createError(404, 'session token not found'));
    const { data } = jwt.verify(sessionToken, config.secret_key);

    if (!userToken) return next(createError(404, 'token is missing'));
    const validToken = await jwt.verify(userToken, config.secret_key);

    if (!validToken) next(createError(401, 'invalid token'));

    if (validToken.data.id !== data.id) return next(createError(401, 'token session ivalid'));
    return next();
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = jwtMiddelware;
