const path = require("path");
const express = require("express");
const rootDir = require("./../util/path.js");
const admin = require("./admin.js");

const usersRoutes = express();

usersRoutes.get("/users", (req, res, next) => {
    res.render("users", {
        users: admin.users,
        path: "/users",
    });
});

module.exports = usersRoutes;
