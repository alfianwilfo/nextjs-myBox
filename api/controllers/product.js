let { product } = require("../models/");
class Product {
  static async getAll(req, res, next) {
    try {
      let data = await product.findAll();
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = Product;
