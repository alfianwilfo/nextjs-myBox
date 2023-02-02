const express = require("express");
const app = express();
const admin = require("../controllers/admin");

app.post("/login", admin.login);
app.get("/users", admin.get);

module.exports = app;
