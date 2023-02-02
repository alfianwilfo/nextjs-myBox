const express = require("express");
const app = express();
const controller = require("../controllers/product");

app.get("/", controller.getAll);
app.post("/", controller.create);
app.get("/:id", controller.findOne);
app.delete("/:id", controller.delete);

module.exports = app;
