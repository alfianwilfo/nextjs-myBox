const express = require("express");
const app = express();
const product = require("./product");
const user = require("./user");
const admin = require("./admin");
const cart = require("./cart");

app.use("/products", product);
app.use("/users", user);
app.use("/admin", admin);
app.use("/carts", cart);

module.exports = app;
