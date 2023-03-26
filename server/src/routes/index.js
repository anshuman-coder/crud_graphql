const app = require("express")()
const loginSignup = require("./loginSignup.route");
const users = require("../routes/user.route");
const cars = require("./cars.route");
const fileRoutes = require("./file.route");



app.use("/", loginSignup)
app.use("/", users)
app.use("/", cars)
app.use("/", fileRoutes);

module.exports = app