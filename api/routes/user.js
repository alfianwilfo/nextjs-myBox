const express = require("express");
const app = express();
const user = require("../controllers/user");
app.post("/register", user.register);

module.exports = app;
