const app = require("express")();
const { graphqlHTTP } = require("express-graphql");
const { loginSignup: { schema, rootValue } } = require("../graphql/index.gql");
const { getError } = require("../helper/response");

app.use("/public", graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
}));

module.exports = app