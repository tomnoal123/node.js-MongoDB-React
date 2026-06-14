
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require('dotenv').config();

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const app = express();

app.use(cors());


app.use(express.json());


mongoose.connect("mongodb://appUser:haslo@192.168.1.17:27017/twojaBaza?authSource=admin")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));


app.use("/products", productRoutes);
app.use("/users", userRoutes);



app.listen(5000, () => {
  console.log("Server running on 5000");
});
