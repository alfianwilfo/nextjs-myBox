const express = require("express");
const app = express();
const admin = require("../controllers/admin");

app.post("/login", admin.login);

module.exports = app;
