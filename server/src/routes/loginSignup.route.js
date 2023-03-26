require("dotenv").config();
const app = require("express")();
const { graphqlHTTP } = require("express-graphql");
const { loginSignup: { schema, rootValue } } = require("../graphql/index.gql");

app.use("/public", graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
}));

module.exports = app