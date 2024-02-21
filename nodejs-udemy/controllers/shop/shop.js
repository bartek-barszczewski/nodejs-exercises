const adminController = require("./../admin/admin.js");
const Product = require("./../../models/product.js");

module.exports.getIndex = (req, res, next) => {
    const products = new Product();
    products.fetchAll((products) => {
        res.render("shop/index", {
            pageTitle: "Shop - Main Page",
            prods: products,
            hasProducts: products > 0,
            path: "/index",
        });
    });
};

module.exports.getAllShopProducts = (req, res, next) => {
    const products = new Product();
    products.fetchAll((products) => {
        res.render("shop/product-list", {
            pageTitle: "Product list",
            prods: products,
            hasProducts: products > 0,
            path: "/index",
            docTitle: "SHOP - App",
        });
    });
};

module.exports.getCart = (req, res, next) => {
    res.render("shop/cart", {
        pageTitle: "Cart",
        path: "/cart",
    });
};

module.exports.getCheckout = (req, res, next) => {
    res.render("shop/checkout", {
        pageTitle: "Cart",
        path: "/cart",
    });
};
