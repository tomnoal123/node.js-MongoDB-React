const express = require("express");
const router = express.Router();
const Product = require("../models/Product");


router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});


router.post("/", async (req, res) => {
  const newProduct = await Product.create(req.body);
  res.json(newProduct);
});


router.delete("/:id", async (req, res) => {
  const deleted = await Product.findByIdAndDelete(req.params.id);
  res.json(deleted);
});

router.put("/:id", async(req, res) =>{
  const updated = await Product.findByIdAndUpdate(req.params.id);
  res.json(updated)
});
module.exports = router;