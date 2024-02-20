const express = require("express");
const usersController = require("./../controllers/users.js");
const adminController = require("./../controllers/admin.js");

const usersRoutes = express();

usersRoutes.get("/users", usersController.getAllUsers);
usersRoutes.post("/add-user", adminController.postAddUser);

module.exports = usersRoutes;
