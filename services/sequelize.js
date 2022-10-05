const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database/database.sqlite",
});

sequelize
  .authenticate()
  .then(() => console.log("Authentified on sqlite with sequelize"))
  .catch((err) => {
    throw err;
  });

module.exports = sequelize;
