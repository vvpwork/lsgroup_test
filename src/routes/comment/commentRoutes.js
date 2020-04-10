const { celebrate, Joi, Segments } = require("celebrate");
const jwtMiddelware = require("../../common/jwtMiddelware");
const asyncWrapper = require("../../common/asyncWpapper");
const addComment = require("./addComment");
const getComment = require("./getComment");
const deletComment = require("./deleteComment");
const updateComment = require("./updateComment");

const commentRoutes = (app) => {
  app.get(
    "/comment",
    jwtMiddelware,
    celebrate({
      [Segments.QUERY]: {
        id: Joi.string().required(),
      },
    }),
    asyncWrapper(getComment)
  );
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

  app.patch(
    "/comment",
    jwtMiddelware,
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
        description: Joi.string().required(),
      }),
    }),
    asyncWrapper(updateComment)
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
