"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  product.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: { msg: "Name product can't empty" },
          notEmpty: { msg: "Name product can't empty" },
        },
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: { msg: "Price product can't empty" },
          notEmpty: { msg: "Price product can't empty" },
        },
      },
      brand: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: { msg: "Brand product can't empty" },
          notEmpty: { msg: "Brand product can't empty" },
        },
      },
      imageUrl: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: { msg: "Image URL product can't empty" },
          notEmpty: { msg: "Image URL product can't empty" },
        },
      },
      info: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  product.beforeCreate(async (product) => {
    product.info = "Click & Pickup";
  });
  return product;
};
