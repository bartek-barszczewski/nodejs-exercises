const express = require("express");

const adminController = require("./../controllers/admin.js");

const admin = express.Router();

admin.post("/add-user", adminController.postAddUser);
admin.post("/send-new-product", adminController.sendNewProduct);

module.exports.routes = admin;
