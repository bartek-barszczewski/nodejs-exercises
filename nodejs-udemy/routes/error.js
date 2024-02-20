const express = require("express");

const errorRoutes = express.Router();

errorRoutes.get("*", (req, res, next) => {
    res.redirect("/shop");
});

module.exports = errorRoutes;
