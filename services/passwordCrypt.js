const bcrypt = require("bcrypt");
const saltRounds = 10;

const encrypt = async (password) => {
  const crypted = await bcrypt.hash(password, saltRounds);
  return crypted;
};

const compare = async (password, cryptedPassword) => {
  const match = await bcrypt.compare(password, cryptedPassword);
  return match;
};

module.exports = { encrypt, compare };
