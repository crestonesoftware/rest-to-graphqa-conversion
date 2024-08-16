const { User } = require("../models");

const resolvers = {
  Query: {
    user: async (parent, { _id }) => {
      return User.findOne({ _id });
    },
    users: async () => {
      return User.find({});
    },
  },
};

module.exports = resolvers;