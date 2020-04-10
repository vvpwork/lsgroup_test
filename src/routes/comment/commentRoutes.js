const { celebrate, Joi, Segments } = require("celebrate");
const jwtMiddelware = require("../../common/jwtMiddelware");
const asyncWrapper = require("../../common/asyncWpapper");
const addComment = require("./addComment");
const deletComment = require("./deleteComment");

const commentRoutes = (app) => {
  app.post(
    "/comment",
    jwtMiddelware,
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        author: Joi.string().required(),
        description: Joi.string().required(),
      }),
    }),
    asyncWrapper(addComment)
  );
  app.delete(
    "/comment/:id",
    jwtMiddelware,
    celebrate({
      [Segments.PARAMS]: {
        id: Joi.string().required(),
      },
    }),
    asyncWrapper(deletComment)
  );
};

module.exports = commentRoutes;
