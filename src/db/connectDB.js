const mongoose = require("mongoose");
const {db:{password}} =require('../config');

const connect = async () => {
  const uri_db = `mongodb+srv://root:${
    password || "root"
  }@cluster0-hg0zg.mongodb.net/test?retryWrites=true&w=majority`;
  return mongoose.connect(uri_db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};


module.exports = connect