//third party libraries and modules
const mongoose = require("mongoose");

//user schema
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    dateCreated: {
      type: String,
    },
    timeCreated: {
      type: String,
    },
    dateUpdated: {
      type: String,
    },
    timeUpdated: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Users", UserSchema);
