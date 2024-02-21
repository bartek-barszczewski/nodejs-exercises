const Product = require("./../../models/product");

const users = [];

module.exports.getAddProducts = (req, res, next) => {
    res.render("admin/add-product", {
        path: "/admin/add-product",
    });
};

module.exports.sendNewProduct = (req, res, next) => {
    const productTitle = req.body.product;

    const product = new Product(productTitle);
    product.save();

    res.redirect("/shop");
};

module.exports.getAllUsers = (req, res, next) => {
    res.render("admin/users", {
        users: users,
        path: "/admin/users",
    });
};

module.exports.postAddUser = (req, res, next) => {
    const date = new Date();
    const lastActivity = `${date.getFullYear()}.${date.getMonth()}.${date.getDay()}`;

    users.push({
        id: users.length + 1,
        username: req.body.username,
        role: req.body.role,
        lastActivity: lastActivity,
    });

    res.redirect("/admin/users");
};

module.exports.products = Product;
module.exports.users = users;
