const express = require("express");
const app = express();
const product = require("./product");
app.use("/products", product);

module.exports = app;
