const typeDefs = `

  type Auth {
    token: ID!
    user: User
  }

 type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }
    
  type Query {
    users: [User]
    user(_id: ID!): User
  }

  type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;
