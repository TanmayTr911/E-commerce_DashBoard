const mongoose = require("mongoose");

const proSchema = new mongoose.Schema({
  name: String,
  brand: String,
  category: String,
  price: Number,
  userId: String,
});
const Product = mongoose.model("products2", proSchema);

module.exports = Product;
