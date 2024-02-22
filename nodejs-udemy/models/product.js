const path = require("path");
const fs = require("fs");
const rootDir = require("./../util/path.js");

const PATH_DATA = path.join(rootDir, "data", "products.json");

module.exports = class Product {
    constructor(title, image, price, description) {
        this.title = title;
        this.image = image;
        this.price = price;
        this.description = description;
    }

    save() {
        fs.readFile(PATH_DATA, (err, fileContent) => {
            let products = [];

            if (!fileContent.length) {
                products = JSON.parse("[]");
            }

            if (!err && fileContent.length) {
                products = JSON.parse(fileContent);
            }

            products.push(this);

            fs.writeFile(PATH_DATA, JSON.stringify(products), (err) => {
                if (err) {
                    throw new err();
                }
                console.log("Saved! ", this);
            });
        });
    }

    fetchAll(callback) {
        fs.readFile(PATH_DATA, (err, data) => {
            const productsBuffer = data.toString();

            if (err || !productsBuffer) {
                callback([]);
            }

            if (!err && productsBuffer) {
                callback(JSON.parse(productsBuffer));
            }
        });
        return [];
    }
};
