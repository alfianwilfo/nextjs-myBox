class Admin {
  static async login(req, res, next) {
    try {
      let { username, password } = req.body;
      console.log(username, password);
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = Admin;
