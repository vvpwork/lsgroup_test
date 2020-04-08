const Joi = require("joi");
const { celebrate } = require("celebrate");
const asyncWrapper = require("../../common/asyncWpapper");
const testAction = require("./testAction");

const userRoutes = (app) => {
  app.get("/user", asyncWrapper(testAction));
};

module.exports = userRoutes;
