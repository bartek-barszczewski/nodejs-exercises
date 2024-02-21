const express = require("express");

const adminController = require("./../../controllers/admin/admin.js");

const admin = express.Router();

admin.post("/add-user", adminController.postAddUser);

admin.get("/admin/add-product", adminController.getAddProducts);
admin.post("/send-new-product", adminController.sendNewProduct);

admin.get("/admin/users", adminController.getAllUsers);
admin.post("/admin/add-user", adminController.postAddUser);

module.exports.routes = admin;
