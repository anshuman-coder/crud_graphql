const app = require("express")();

const { graphqlHTTP } = require("express-graphql");

const { users: { schema, rootValue } } = require("../graphql/index.gql");

const { authentication } = require("../middleware/Auth");

app.use("/user", authentication, graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
}));

module.exports = app