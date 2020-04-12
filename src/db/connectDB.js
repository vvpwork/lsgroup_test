const mongoose = require('mongoose');
const {
  db: { password },
} = require('../config');

const uriDb = `mongodb+srv://root:${
  password || 'root'
}@cluster0-hg0zg.mongodb.net/test?retryWrites=true&w=majority`;
const connectDB = async () => mongoose.connect(uriDb, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

module.exports = {
  connectDB,
  uriDb,
};
