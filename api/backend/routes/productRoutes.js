const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

const auth = require('../middleware/auth');

router.get("/", auth, async (req, res) => {
  const products = await Product.find();
  res.json(products);
});
router.get("/:id", auth, async(req,res)=>{
    const product = await Product.findById(req.params.id);
    res.json(product);
});


router.post("/", auth, async (req, res) => {
  const newProduct = await Product.create(req.body);
  res.json(newProduct);
});


router.delete("/:id", auth, async (req, res) => {
  const deleted = await Product.findByIdAndDelete(req.params.id);
  res.json(deleted);
});

router.put("/:id", auth, async(req, res) =>{
  const updated = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true});
  res.json(updated)
});
module.exports = router;