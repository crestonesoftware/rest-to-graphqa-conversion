const { User } = require("../models");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const resolvers = {
  Query: {
    getSingleUser: async (parent, { _id }) => {
      return User.findOne({ _id });
    },
    getAllUsers: async () => {
      return User.find({});
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      try {
        const { username, email, password } = args;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
          username,
          email,
          password: hashedPassword,
        });

        await user.save();

        const token = jwt.sign(
          { userId: user._id },
          process.env.JWT_SECRET
        );

        return { token, user };
      } catch (error) {
        console.log(error);

        return error;
      }
    },
  },
};

module.exports = resolvers;
