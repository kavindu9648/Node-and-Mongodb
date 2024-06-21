//thired party library and modules
const mongoose = require("mongoose");
//custom library and modules
const config = require("../../../config");
// function to initialize mongodb connection
const connectDatabase = async () => {
  return await mongoose.connect(config.MONGO_DB_URL);
};
module.exports = { connectDatabase };
