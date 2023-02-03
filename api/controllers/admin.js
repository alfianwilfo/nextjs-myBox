let { admin, user } = require("../models/");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

class Admin {
  static async createUser(req, res, next) {
    try {
      let { name, email, password } = req.body;
      console.log(name, email, password, "??");
      let createdUser = await user.create({ name, email, password });
      res.status(201).json({ message: "Success create new user" });
    } catch (error) {
      next(error);
    }
  }
  static async changePassword(req, res, next) {
    try {
      let { password } = req.body;
      let id = +req.params.id;
      let changePassword = await user.update(
        { password },
        { where: { id }, individualHooks: true }
      );
      res.json({ message: "Success change password" });
    } catch (error) {
      next(error);
    }
  }
  static async delete(req, res, next) {
    try {
      let id = +req.params.id;
      let deleteUser = await user.destroy({ where: { id } });
      if (!deleteUser) {
        throw { name: "validator", status: 404, message: "User not found" };
      }
      res.json({ message: "Success delete user" });
    } catch (error) {
      next(error);
    }
  }
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
      let data = await user.findAll();
      res.json(data);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = Admin;
