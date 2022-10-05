const { Model, DataTypes } = require("sequelize");
const sequelize = require("./../services/sequelize");

class Category extends Model {}

Category.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "category",
  }
).sync();

module.exports = Category;
