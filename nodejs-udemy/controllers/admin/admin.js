const Product = require("./../../models/product");
const User = require("./../../models/user");

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
    const user = new User();

    user.fetchAll((users) => {
        res.render("admin/users", {
            users: users,
            path: "/admin/users",
            pageTitle: "Users",
        });
    });
};

module.exports.postAddUser = (req, res, next) => {
    console.log(req.body);
    const username = req.body.username;
    const role = req.body.role;

    const newUser = new User(username, role);
    newUser.addUser();

    res.redirect("/admin/users");
};

module.exports.products = Product;
