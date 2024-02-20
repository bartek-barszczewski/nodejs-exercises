const adminController = require("./admin.js");

module.exports.getAllUsers = (req, res, next) => {
    res.render("users", {
        users: adminController.users,
        path: "/users",
    });
};
