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

`;

module.exports = typeDefs;
