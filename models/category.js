const { Model, DataTypes } = require("sequelize");
const sequelize = require("./../services/sequelize");
const Post = require("./post");

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
);

Category.hasMany(Post);

Category.sync();

module.exports = Category;
