const express = require("express");
const shopController = require("./../controllers/shop.js");

const shopRoutes = express.Router();

shopRoutes.get("/shop", shopController.getAllShopProducts);
shopRoutes.get("/add-product", shopController.getAddProducts);

module.exports = shopRoutes;
