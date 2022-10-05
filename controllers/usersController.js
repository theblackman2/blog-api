const { encrypt } = require("./../services/passwordCrypt");
const sequelize = require("./../sequelize/index");

const isValidEmail = (email) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return email.match(regex);
};

const create = (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      type: "Error",
      message: "The name, email and password are required",
    });
  }

  if (!isValidEmail(email))
    return res.status(400).json({
      type: "Error",
      message: "The email provided isn't valid",
    });

  const cryptedPassword = encrypt(password);
  res.send("User created");
};

module.exports = { create };
