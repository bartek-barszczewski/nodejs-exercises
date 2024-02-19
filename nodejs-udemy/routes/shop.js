const path = require("path");
const express = require("express");
const rootDir = require("./../util/path");

const admin = require("./admin.js");
const shopRoutes = express.Router();

shopRoutes.use("/shop", (req, res, next) => {
    console.log(admin.procuts);
    res.render("shop", {
        prods: [...admin.products],
        path: "/shop",
        docTitle: "SHOP - App",
    });
});

shopRoutes.get("/all-products", (req, res, next) => {
    console.log(admin.products);
    res.send("");
});

shopRoutes.use((req, res, next) => {
    res.render("404");
});

module.exports = shopRoutes;
