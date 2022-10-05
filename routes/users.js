const usersRoute = require("express").Router();
const usersController = require("./../controllers/usersController");

usersRoute.post("/", usersController.create);

module.exports = usersRoute;
