const typeDefs = `

 type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }
    
  type Query {
    users: [User]
  }

`;

module.exports = typeDefs;
