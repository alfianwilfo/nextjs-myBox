const express = require("express");
const app = express();
const controller = require("../controllers/product");

app.get("/", controller.getAll);
app.post("/", controller.create);
app.get("/:id", controller.findOne);

module.exports = app;
