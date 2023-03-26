const app = require("express")();
const { graphqlHTTP } = require("express-graphql");

const { cars: { schema, rootValue } } = require("../graphql/index.gql");
const { authentication } = require("../middleware/Auth");

app.use("/car", authentication, graphqlHTTP((req) => ({
  schema: schema,
  rootValue: rootValue,
  graphiql: true,
  context: {
    request: req.user
  }
})));

module.exports = app;