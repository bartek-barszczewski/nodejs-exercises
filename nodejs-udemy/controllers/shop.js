const adminController = require("./admin.js");

module.exports.getAddProducts = (req, res, next) => {
    res.render("add-product", {
        path: "/add-product",
    });
};

module.exports.getShopProducts = (req, res, next) => {
    res.render("shop", {
        prods: adminController.products,
        path: "/shop",
        docTitle: "SHOP - App",
    });
};
