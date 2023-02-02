let { cart } = require("../models/");
class Cart {
  static async add(req, res, next) {
    try {
      let id = +req.body.id;
      let checkCart = await cart.findOne({
        where: { userId: req.user.id, productId: id },
      });
      if (!checkCart) {
        let createdCartItem = await cart.create({
          userId: req.user.id,
          productId: id,
          count: 1,
        });
        res.status(201).json({ message: "Success add to cart" });
      }
      if (checkCart) {
        let increment = await cart.increment("count", {
          by: 1,
          where: { id: checkCart.id },
        });
        console.log(increment);
        res.json({ message: "Success add to cart" });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Cart;
