const adminController = require("./admin.js");
const Product = require("./../models/product.js");

module.exports.getAddProducts = (req, res, next) => {
    res.render("add-product", {
        path: "/add-product",
    });
};

module.exports.getAllShopProducts = (req, res, next) => {
    const products = new Product();
    products.fetchAll((products) => {
        res.render("shop", {
            prods: products,
            path: "/shop",
            docTitle: "SHOP - App",
        });
    });
};
