const { Model, DataTypes } = require("sequelize");
const Post = require("./post");

class Comment extends Model {}

Comment.init({
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Comment.belongsTo(Post);

Comment.sync();

module.exports = Comment;
