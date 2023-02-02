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

  static async delete(req, res, next) {
    try {
      let id = +req.params.id;
      let findProduct = await product.destroy({ where: { id } });
      if (!findProduct) {
        res.status(404).json({ message: "Product not found" });
      }
      res.json({ message: "Success delete product" });
    } catch (error) {
      console.log(error);
    }
  }

  static async update(req, res, next) {
    try {
      let { id } = req.params;
      let { name, imageUrl, brand } = req.body;
      let price = +req.body.price;
      let updateData = await product.update(
        { name, imageUrl, brand, price },
        { where: { id } }
      );
      res.json({ message: "Success update product" });
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = Product;
