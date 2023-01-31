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
  static async findOne(req, res, next) {
    try {
      let { id } = req.params;
      console.log(id);
      let data = await product.findByPk(id);
      if (!data) {
        res.status(404).json({ message: "Data not found" });
      }
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = Product;
