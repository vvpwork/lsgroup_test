require("dotenv").config();
const app = require("./src/App");
const { connectDB } = require("./src/db/connectDB");
const port = process.env.PORT || 8080;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log("Listen on port ", port);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
