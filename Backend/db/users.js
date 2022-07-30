const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  pass: String,
  imgpath: String,
});
const User = mongoose.model("users", userSchema);

module.exports = User;
