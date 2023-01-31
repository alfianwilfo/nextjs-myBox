let { user } = require("../models/");
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
}
module.exports = User;
