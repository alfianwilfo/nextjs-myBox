const express = require("express");
const app = express();
const product = require("./product");
const user = require("./user");
app.use("/products", product);
app.use("/users", user);

module.exports = app;
