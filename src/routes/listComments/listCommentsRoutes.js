const jwtMiddelware = require("../../common/jwtMiddelware");
const asyncWrapper = require("../../common/asyncWpapper");
const listComments = require("./listComments");


const listCommentsRoutes = (app) => {
  app.get("/comments",jwtMiddelware, asyncWrapper(listComments));
};

module.exports = listCommentsRoutes;