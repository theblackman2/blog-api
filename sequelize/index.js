const { Sequelize } = require("sequelize");
const applyExtraSetup = require("./extra-setup");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database/database.sqlite",
});

const modelDefiners = [
  require("./models/post"),
  require("./models/category"),
  require("./models/comment"),
  require("./models/user"),
];

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

applyExtraSetup(sequelize);

sequelize
  .authenticate()
  .then(() => console.log("Authentified on sqlite with sequelize"))
  .catch((err) => {
    throw err;
  });

sequelize.sync();

module.exports = sequelize;
