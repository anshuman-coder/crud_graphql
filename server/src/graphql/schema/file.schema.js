require("dotenv").config();

const { buildSchema } = require("graphql");

const fileGqlSchema = buildSchema(`

  scalar Upload

  input uploadedFile {
    key: String!
    bucket: String!
    url: String!
  }
  type Mutation {
    uploadFile(file: Upload!): uploadedFile!
  }

`);

module.exports = fileGqlSchema;