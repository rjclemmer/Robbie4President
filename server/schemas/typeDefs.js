const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type OpenAIResponse {
    response: String
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    openAIQuery(message: String!): OpenAIResponse
  }
`;

module.exports = typeDefs;
