let { user } = require("../models/");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
class User {
  static async register(req, res, next) {
    try {
      let { name, email, password, address } = req.body;
      console.log(req.body);
      res.json({ msg: "yey" });
      // let createdUser = await user.create({ name, email, password, address });
      // res.status(201).json({ message: "Success create account" });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      let { email, password } = req.body;
      if (!email) {
        throw { name: "validator", status: 400, message: "Email can't empty" };
      }
      if (!password) {
        throw {
          name: "validator",
          status: 400,
          message: "Password can't empty",
        };
      }
      let findedUser = await user.findOne({ where: { email } });
      if (!findedUser) {
        throw {
          name: "validator",
          status: 401,
          message: "Invalid email or password",
        };
      }

      let comparePassword = bcrypt.compareSync(password, findedUser.password);
      if (!comparePassword) {
        throw {
          name: "validator",
          status: 401,
          message: "Invalid email or password",
        };
      }

      var token = jwt.sign({ id: findedUser.id }, "shhhhh");
      res.json({ access_token: token });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = User;
