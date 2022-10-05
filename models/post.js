const { Model, DataTypes } = require("sequelize");
const sequelize = require("./../services/sequelize");
const User = require("./user");
const Category = require("./category");
const Comment = require("./comment");

class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "post",
  }
);

Post.belongsTo(Category);
Post.belongsTo(User);
Post.hasMany(Comment);

Post.sync();

module.exports = Post;
