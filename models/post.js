const { Model, DataTypes } = require("sequelize");
const sequelize = require("./../services/sequelize");

class Post extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    author: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "post",
  }
);

// (async () => {
//   await sequelize.sync();
//   const first = await Post.create({
//     title: "My first post with sequelize",
//     content:
//       "harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos ",
//   });
//   console.log(first.toJSON());
// })();

module.exports = Post;
