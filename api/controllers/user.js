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
      console.log(error);
    }
  }

  static async login(req, res, next) {
    try {
      let { email, password } = req.body;
      let findedUser = await user.findOne({ where: { email } });

      let comparePassword = bcrypt.compareSync(password, findedUser.password);
      var token = jwt.sign({ id: findedUser.id }, "shhhhh");
      res.json({ access_token: token });
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = User;
