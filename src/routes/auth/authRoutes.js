const { celebrate, Segments, Joi } = require("celebrate");
const asyncWrapper = require("../../common/asyncWpapper");
const login = require("./login");
const logout = require("./logout");
const authRoutes = (app) => {
  app.post(
    "/login",
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
      }),
    }),
    asyncWrapper(login)
  );
  app.post("/logout", asyncWrapper(logout));
};

module.exports = authRoutes;
