const { User } = require("../models");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const resolvers = {
  Query: {
    user: async (parent, { _id }) => {
      return User.findOne({ _id });
    },
    users: async () => {
      return User.find({});
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      try {
        const { username, email, password } = args;
        //const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
          
          username,
          email,
          //password: hashedPassword,
          password: password,
        });

        await user.save();

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET||"fooc");

        return { token, user };
      } catch (error) {
        console.log(error);

        return error;
      }
    },
  },
};

module.exports = resolvers;