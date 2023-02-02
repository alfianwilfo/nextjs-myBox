const express = require("express");
const app = express();
const user = require("../controllers/user");
const authetication = require("../middlewares/authentication");

app.post("/", authetication, user.settings);
app.put("/", authetication, user.changeDetails);
app.post("/register", user.register);
app.post("/login", user.login);

module.exports = app;
