const express = require("express");
const Sentry = require("@sentry/node");
const bodyParser = require("body-parser");
const celebrate = require("celebrate");
const morgan = require("morgan");
const config = require("../config");
const userRoutes = require("../routes/user/userRoutes");

const app = express();
const err = (req, res, next) => {
  res.statusCode = 500;
  res.end(`${res.sentry}\n`);
  next();
};
Sentry.init(config.sentry);

app.use(Sentry.Handlers.requestHandler());
app.use(bodyParser.json());
app.use(morgan("combined"));

userRoutes(app);
app.get("/", (req, res) => {
  res.end("Hello world!");
});

app.use(celebrate.errors());
app.use(Sentry.Handlers.errorHandler());
app.use(err);

module.exports = app;
