const products = [];
const users = [];

module.exports.sendNewProduct = (req, res, next) => {
    console.log(req.body);
    products.push({title: req.body.product});
    res.redirect("/add-product");
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

module.exports.products = products;
module.exports.users = users;
