let { user } = require("../models/");
var jwt = require("jsonwebtoken");
let authetication = async (req, res, next) => {
  try {
    let { access_token } = req.headers;
    if (!access_token) {
      throw { name: "validator", status: 401, message: "Please login first" };
    }
    var decoded = jwt.verify(access_token, "shhhhh");
    let findedUser = await user.findByPk(decoded.id);
    if (!findedUser) {
      throw { name: "validator", status: 401, message: "Please login first" };
    }
    req.user = { id: decoded.id };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authetication;
