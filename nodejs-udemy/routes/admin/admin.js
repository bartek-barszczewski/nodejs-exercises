const express = require("express");

const adminController = require("./../../controllers/admin/admin.js");

const admin = express.Router();

admin.post("/add-user", adminController.postAddUser);

admin.get("/admin/admin-products", adminController.getAdminProducts);
admin.get("/admin/edit-products", adminController.getEditAdminProducts);
admin.get("/admin/add-product", adminController.getAddProducts);
admin.post("/admin/send-new-product", adminController.sendNewProduct);

admin.get("/admin/users", adminController.getAllUsers);
admin.post("/admin/add-user", adminController.postAddUser);

module.exports.routes = admin;
