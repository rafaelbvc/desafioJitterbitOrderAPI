const express = require("express");
const mongoose = require("mongoose");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/orders")
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

app.use("/order", orderRoutes);

module.exports = app;