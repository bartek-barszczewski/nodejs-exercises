const Product = require("./../../models/product");

const users = [];

module.exports.getEditAdminProducts = (req, res, next) => {
    res.render("admin/edit-products", {
        path: "/admin/edit-products",
        pageTitle: "Edit Admin products",
    });
};

module.exports.getAdminProducts = (req, res, next) => {
    const products = new Product();

    products.fetchAll((products) => {
        res.render("admin/products", {
            path: "/admin/products",
            prods: products,
            hasProducts: products > 0,
            pageTitle: "Admin products",
        });
    });
};

module.exports.getAddProducts = (req, res, next) => {
    res.render("admin/add-products", {
        path: "/admin/add-products",
        pageTitle: "Add products",
    });
};

module.exports.sendNewProduct = (req, res, next) => {
    const productTitle = req.body.product;
    const productImage = req.body.imageURL;
    const productPrice = req.body.price;
    const productDescription = req.body.description;

    const product = new Product(productTitle, productImage, productPrice, productDescription);
    product.save();

    res.redirect("/shop");
};

module.exports.getAllUsers = (req, res, next) => {
    res.render("admin/users", {
        users: users,
        path: "/admin/users",
        pageTitle: "Users",
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
