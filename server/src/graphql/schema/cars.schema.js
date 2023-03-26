require("dotenv").config();

const { buildSchema } = require("graphql");

const CarGqlSchema = buildSchema(`
  type User {
    _id: String
    fullName: String
    imageURL: String
    isActive: Boolean
  }

  type Car {
    id: ID!
    _id: String
    name: String
    user: [User]
    description: String
    imageURL: String
    isActive: Boolean
    isOwner: Boolean
  }

  input pagination {
    pageIndex: Int,
    pageSize: Int
  }

  input editData {
    name: String,
    description: String,
    imageURL: String
  }


  type Query {
    getAllCars(page: pagination): [Car]
    getMyCars(page: pagination): [Car]
    getCarById(id: ID!): Car
  }

  type Mutation {
    addCar(name: String!, description: String!, imageURL: String): Car
    editCar(id: ID!, data: editData): Car
    deleteCar(id: ID!): Car
  }
`);

module.exports = CarGqlSchema;