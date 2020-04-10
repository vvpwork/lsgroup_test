const mongoose = require("mongoose");
const {
  db: { password },
} = require("../config");

const uri_db = `mongodb+srv://root:${
  password || "root"
}@cluster0-hg0zg.mongodb.net/test?retryWrites=true&w=majority`;
const connectDB = async () => {
  return mongoose.connect(uri_db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  });
};

module.exports = {
  connectDB,
  uri_db,
};
