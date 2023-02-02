const express = require("express");
const app = express();
const product = require("./product");
const user = require("./user");
const admin = require("./admin");

app.use("/products", product);
app.use("/users", user);
app.use("/admin", admin);

module.exports = app;
