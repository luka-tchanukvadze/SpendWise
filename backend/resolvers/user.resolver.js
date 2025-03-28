import { users } from "../dummyData/data.js";

const userResolver = {
  Mutation: {
    signUp: async (_, { input }, context) => {
      try {
        const { username, name, password, gender } = input;

        if (!username || !name || !password || !gender) {
          throw new Error("All fields are required");
        }
      } catch (error) {}
    },
  },
  Query: {
    users: (_, { req, res }) => {
      return users;
    },
    user: (_, { userId }) => {
      return users.find((user) => user._id === userId);
    },
  },
};

export default userResolver;
