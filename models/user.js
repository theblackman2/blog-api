const { Model, DataTypes } = require("sequelize");
const sequelize = require("./../services/sequelize");
const Post = require("./post");

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    refreshToke: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "user",
  }
);

User.hasMany(Post);

User.sync();

module.exports = User;
