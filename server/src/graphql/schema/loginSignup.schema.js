require("dotenv").config();

const { buildSchema } = require("graphql");

const loginSignupSchema = buildSchema(`
  type User {
    id: ID!
    _id: String
    fullName: String
    email: String
    password: String
    isActive: Boolean
    token: String
  }

  type Query {
    users: [User]
  }

  type Mutation {
    login(email: String!, password: String!): User
    signup(fullName: String!, email: String!, password: String!): User
  }
`);

module.exports = loginSignupSchema;