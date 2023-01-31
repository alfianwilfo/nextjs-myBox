"use strict";
var bcrypt = require("bcryptjs");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Name can't empty" },
          notEmpty: { msg: "Name can't empty" },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: { msg: "Invalid email" },
          notNull: { msg: "Email can't empty" },
          notEmpty: { msg: "Email can't empty" },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Password can't empty" },
          notEmpty: { msg: "Password can't empty" },
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Address can't empty" },
          notEmpty: { msg: "Address can't empty" },
        },
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  user.beforeCreate(async (user) => {
    user.password = bcrypt.hashSync(user.password, 10);
  });
  return user;
};
