class Product {
  static async getAll(req, res, next) {
    try {
      console.log("MASUK");
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = Product;
