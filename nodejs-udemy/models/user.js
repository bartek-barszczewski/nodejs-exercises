const rootDir = require("../util/path.js");
const path = require("path");
const fs = require("fs");

PATH_USERS = path.join(rootDir, "data", "users.json");

module.exports = class User {
    constructor(username, role) {
        const date = new Date();
        this.id = null;
        this.username = username;
        this.role = role;
        this.lastActivity = `${date.getFullYear()}.${date.getMonth()}.${date.getDay()}`;
    }

    writeToFile(path, resources) {
        fs.writeFile(path, resources, (err) => {
            if (err) {
                throw new Error(`Error to write to ${PATH_USERS}`);
            }

            console.log("User saved! ", this);
        });
    }

    parseContent(err, fileContent) {
        let users = [];

        if (!fileContent.length) {
            users = JSON.parse("[]");
        }

        if (!err && fileContent.length) {
            users = JSON.parse(fileContent);
        }

        return users;
    }

    addUser() {
        fs.readFile(PATH_USERS, (err, fileContent) => {
            let users = this.parseContent(err, fileContent);

            users.push({
                id: users.length + 1,
                username: this.username,
                role: this.role,
                lastActivity: this.lastActivity,
            });

            this.writeToFile(PATH_USERS, JSON.stringify(users));
        });
    }

    deleteUser() {
        console.log("Stand by...");
    }

    fetchAll(callback) {
        fs.readFile(PATH_USERS, (err, fileContent) => {
            if (err) {
                throw new Error(`Error to read file: ${PATH_USERS}`);
            }

            if (!err && fileContent.length) {
                const allUsers = JSON.parse(fileContent);

                callback(allUsers);
            }
        });
    }
};
