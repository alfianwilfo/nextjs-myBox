let { admin, user } = require("../models/");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

class Admin {
  static async login(req, res, next) {
    try {
      let { username, password } = req.body;
      if (!username) {
        throw {
          name: "validator",
          status: 400,
          message: "Username can't empty",
        };
      }
      if (!password) {
        throw {
          name: "validator",
          status: 400,
          message: "Password can't empty",
        };
      }
      let findedUser = await admin.findOne({ where: { username } });
      if (!findedUser) {
        throw {
          name: "validator",
          status: 400,
          message: "Invalid email or password",
        };
      }
      let comparePW = bcrypt.compareSync(password, findedUser.password);
      if (!comparePW) {
        throw {
          name: "validator",
          status: 400,
          message: "Invalid email or password",
        };
      }
      var token = jwt.sign({ id: findedUser.id }, "shhhhh");
      res.json({ access_token: token });
    } catch (error) {
      next(error);
    }
  }
  static async get(req, res, next) {
    try {
      console.log("masuk");
      let data = await user.findAll();
      console.log(data);
      res.json(data);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = Admin;
