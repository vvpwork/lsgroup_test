const { celebrate, Joi, Segments } = require("celebrate");
const asyncWrapper = require("../../common/asyncWpapper");
const jwtMiddelware = require("../../common/jwtMiddelware");
const addUser = require("./addUser");
const deleteUser = require("./deleteUser");
const updateUser = require("./updateUser");
const getUser = require("./getUser");

const userRoutes = (app) => {
  app.get(
    "/user",
    jwtMiddelware,
    celebrate({
      [Segments.QUERY]: {
        id: Joi.string().required(),
      },
    }),
    asyncWrapper(getUser)
  );
  app.post(
    "/user",
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        name: Joi.string(),
        surname: Joi.string(),
      }),
    }),
    asyncWrapper(addUser)
  );
  app.delete(
    "/user/:id",
    jwtMiddelware,
    celebrate({
      [Segments.PARAMS]: {
        id: Joi.string().required(),
      },
    }),
    asyncWrapper(deleteUser)
  );
  app.patch(
    "/user",
    jwtMiddelware,
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
        name: Joi.string(),
        surname: Joi.string(),
        email: Joi.string().email(),
        password: Joi.string(),
      }),
    }),
    asyncWrapper(updateUser)
  );
};

module.exports = userRoutes;
