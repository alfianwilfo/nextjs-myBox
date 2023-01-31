const express = require("express");
const app = express();
const controller = require("../controllers/product");

app.get("/", controller.getAll);

module.exports = app;
