let { product } = require("../models/");
class Product {
  static async getAll(req, res, next) {
    try {
      let data = await product.findAll();
      res.json(data);
    } catch (error) {
      next(error);
    }
  }
  static async findOne(req, res, next) {
    try {
      let { id } = req.params;
      let data = await product.findByPk(id);
      if (!data) {
        throw { name: "validator", status: 404, message: "Data not found" };
      }
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    try {
      let { name, imageUrl, brand } = req.body;
      let price = +req.body.price;
      let createdProduct = await product.create({
        name,
        imageUrl,
        brand,
        price,
      });
      console.log(createdProduct);
      res.status(201).json({ message: "Success create product" });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = Product;
