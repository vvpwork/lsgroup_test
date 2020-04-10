const { celebrate, Joi, Segments } = require("celebrate");
const jwtMiddelware = require("../../common/jwtMiddelware");
const asyncWrapper = require("../../common/asyncWpapper");
const listAllUsers = require("./listAllUsers");


const listUsersRoutes = (app) => {
  app.get("/users",jwtMiddelware, asyncWrapper(listAllUsers));
};

module.exports = listUsersRoutes;
