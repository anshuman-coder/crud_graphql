const app = require("express")();
const { graphqlHTTP } = require("express-graphql");
const { authentication } = require("../middleware/Auth");

const { file: { schema, rootValue } } = require("../graphql/index.gql");

app.use("/file", authentication, graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
}));

module.exports = app;