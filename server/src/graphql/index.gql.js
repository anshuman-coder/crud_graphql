module.exports = {
  loginSignup: {
    schema: require("./schema/loginSignup.schema"),
    rootValue: require("./rootValues/loginSignup.root")
  },
  users: {
    schema: require("./schema/users.schema"),
    rootValue: require("./rootValues/users.root")
  }
};
