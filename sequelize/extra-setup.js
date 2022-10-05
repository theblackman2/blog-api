const applyExtraSetup = (sequelize) => {
  const { user, post, comment, category } = sequelize.models;

  user.hasMany(post);
  post.belongsTo(user);
  post.belongsTo(category);
  post.hasMany(comment);
  comment.belongsTo(post);
  category.hasMany(post);
};

module.exports = applyExtraSetup;
