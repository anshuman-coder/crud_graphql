const app = require("express")()
const loginSignup = require("./loginSignup.route");
const users = require("../routes/user.route");
const cars = require("./cars.route");



app.use("/", loginSignup)
app.use("/", users)
app.use("/", cars)

module.exports = app