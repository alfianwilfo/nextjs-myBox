const express = require("express");
const authetication = require("../middlewares/authentication");
const app = express();
const cart = require("../controllers/cart");

app.post("/", authetication, cart.add);

module.exports = app;
