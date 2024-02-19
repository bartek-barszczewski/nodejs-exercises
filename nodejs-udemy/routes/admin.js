const path = require("path");
const express = require("express");
const rootDir = require("../util/path");

const admin = express.Router();
const products = [];
const users = [];

admin.get("/add-product", (req, res, next) => {
    res.render("add-product", {
        path: "/add-product",
    });
});

admin.post("/product", (req, res, next) => {
    products.push({title: req.body.product});
    res.redirect("/home");
});

admin.post("/add-user", (req, res, next) => {
    const date = new Date();
    const lastActivity = `${date.getFullYear()}.${date.getMonth()}.${date.getDay()}`;

    users.push({
        id: users.length + 1,
        username: req.body.username,
        role: req.body.role,
        lastActivity: lastActivity,
    });

    res.redirect("/users");
});

module.exports.routes = admin;
module.exports.products = products;
module.exports.users = users;
