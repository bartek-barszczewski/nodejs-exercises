const adminController = require("./../admin/admin.js");
const Product = require("./../../models/product.js");

module.exports.getAllShopProducts = (req, res, next) => {
    const products = new Product();
    products.fetchAll((products) => {
        res.render("shop/shop", {
            prods: products,
            path: "/shop",
            docTitle: "SHOP - App",
        });
    });
};
