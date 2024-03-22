const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

//get user all the wishlist product
const allProduct = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find({userId:req.body.userId});
    res.status(200).json(products);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//get a single product
const oneProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.send(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//update specific product
const updateProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndUpdate(id, req.body);
    const updatedProduct = await Product.findById(id);
    res.send(updatedProduct);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//add new product
const addProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// delete product
const deletePoduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    const allProduct = await Product.find({});
    res.send(allProduct);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//exporting all the function to the routes folder
module.exports = {
  allProduct,
  oneProduct,
  addProduct,
  updateProduct,
  deletePoduct,
};
