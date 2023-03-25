const app = require("express")();
const loginSignup = require("./loginSignup.route");


app.use("/", loginSignup);

module.exports = app;