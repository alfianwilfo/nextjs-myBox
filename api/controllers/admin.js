let { admin } = require("../models/");
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
      let findedUser = await admin.findOn({ where: { username } });
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = Admin;
