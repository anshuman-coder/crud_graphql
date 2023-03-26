require("dotenv").config();

const { buildSchema } = require("graphql");

const UserGqlSchema = buildSchema(`
  type User {
    id: ID!
    _id: String
    fullName: String
    email: String
    password: String
    imageURL: String,
    isActive: Boolean
  }

  type Query {
    user(id: ID!): User
  }

  input editObject {
    fullName: String,
    imageURL: String,
    password: String
  }

  type Mutation {
    editProfile(id: ID!, data: editObject): User
    deleteProfile(id: ID!): User
  }
`)

module.exports = UserGqlSchema;