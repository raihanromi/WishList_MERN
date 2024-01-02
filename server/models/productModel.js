const mongooes = require("mongoose");

const productSchema = mongooes.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
});

const Product = mongooes.model("Product", productSchema);

module.exports = Product;
