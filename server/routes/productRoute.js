const express = require("express");
const router = express.Router();
const {
  allProduct,
  oneProduct,
  addProduct,
  updateProduct,
  deletePoduct,
} = require("../controller/productController");

//get all the product
router.get("/", allProduct);

//get a specific product
router.get("/:id", oneProduct);

//add product
router.post("/addproduct", addProduct);

//update specific product
router.put("/:id", updateProduct);

// delete product
router.delete("/:id", deletePoduct);

module.exports = router;
