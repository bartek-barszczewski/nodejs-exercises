const express = require("express");
const shopController = require("./../../controllers/shop/shop.js");

const shopRoutes = express.Router();

shopRoutes.get("/shop", shopController.getAllShopProducts);

module.exports = shopRoutes;
