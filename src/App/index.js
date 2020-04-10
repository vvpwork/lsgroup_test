const express = require("express");
const path = require("path");
const Sentry = require("@sentry/node");
const bodyParser = require("body-parser");
const celebrate = require("celebrate");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const { uri_db } = require("../db/connectDB");
const config = require("../config");
const userRoutes = require("../routes/user/userRoutes");
const listUsersRoutes = require("../routes/listUsers/listUsersRoutes");
const commentRoutes = require("../routes/comment/commentRoutes");
const authRoutes = require("../routes/auth/authRoutes");
const listCommentsRoutes = require("../routes/listComments/listCommentsRoutes");

const app = express();
const store = new MongoDBStore({
  collection: "session",
  uri: uri_db,
});
const err = (req, res, next) => {
  res.statusCode = 404;
  res.end("not found");
  next();
};
Sentry.init(config.sentry);

app.use(Sentry.Handlers.requestHandler());
app.use(bodyParser.json());
app.use(
  session({
    secret: "some secret",
    resave: false,
    saveUninitialized: false,
    store,
  })
);
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));

userRoutes(app);
commentRoutes(app);
listUsersRoutes(app);
authRoutes(app);
listCommentsRoutes(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "200.html"));
  });
}
app.use(celebrate.errors());
app.use(Sentry.Handlers.errorHandler());
app.use(err);

module.exports = app;
