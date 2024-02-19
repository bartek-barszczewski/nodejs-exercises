const pug = require("pug");
const path = require("path");
const rootDir = require("./util/path.js");
const express = require("express");
const bodyParser = require("body-parser");
const admin = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");
const usersRoutes = require("./routes/users.js");

const app = express();
app.engine("pug", pug.__express);

app.set("view engine", "pug");
app.set("views", path.join(rootDir, "views"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(rootDir, "public")));

app.use(admin.routes);
app.use(usersRoutes);
app.use(shopRoutes);

app.listen(3000);
