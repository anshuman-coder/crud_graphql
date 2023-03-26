const app = require("express")()
const loginSignup = require("./loginSignup.route");
const users = require("../routes/user.route");



app.use("/", loginSignup)
app.use("/", users)

module.exports = app