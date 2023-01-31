let { user } = require("../models/");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
class User {
  static async register(req, res, next) {
    try {
      let { name, email, password, address } = req.body;
      let createdUser = await user.create({ name, email, password, address });
      res.status(201).json({ message: "Success create account" });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      let { email, password } = req.body;
      let findedUser = await user.findOne({ where: { email } });
      if (!findedUser) {
        res.status(401).json({ message: "Invalid email or password" });
      }

      let comparePassword = bcrypt.compareSync(password, findedUser.password);
      if (!comparePassword) {
        res.status(401).json({ message: "Invalid email or password" });
      }

      var token = jwt.sign({ id: findedUser.id }, "shhhhh");
      res.json({ access_token: token });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
module.exports = User;
