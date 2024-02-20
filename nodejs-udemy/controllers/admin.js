const Product = require("./../models/product");

const users = [];

module.exports.sendNewProduct = (req, res, next) => {
    const productTitle = req.body.product;
    console.log(productTitle);
    const product = new Product(productTitle);
    console.log(product.title);
    product.save();

    res.redirect("/shop");
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

    res.redirect("/users");
};

module.exports.products = Product;
module.exports.users = users;
