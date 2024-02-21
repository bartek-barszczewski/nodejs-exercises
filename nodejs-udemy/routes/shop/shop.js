const express = require("express");
const shopController = require("./../../controllers/shop/shop.js");

const shopRoutes = express.Router();

shopRoutes.get("/", shopController.getIndex);
shopRoutes.get("/products", shopController.getAllShopProducts);
shopRoutes.get("/cart", shopController.getCart);
shopRoutes.get("/checkout", shopController.getCheckout);

module.exports = shopRoutes;
