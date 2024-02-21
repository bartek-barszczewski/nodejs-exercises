const express = require("express");
const errorController = require("./../../controllers/error/error.js");

const errorRoutes = express.Router();

errorRoutes.get("*", errorController.errorRedirect);

module.exports = errorRoutes;
