import Transaction from "../models/transaction.model.js";

const transactionResolver = {
  Query: {
    transactions: async (_, __dirname, context) => {
      try {
        if (!context.getUser()) throw new Error("Unsauthorized");
        const userId = await context.getUser()._id;

        const transactions = await Transaction.find({ userId });

        return transactions;
      } catch (err) {
        console.error("Error getting transactions", err);
        throw new Error("Error getting transactions");
      }
    },

    transaction: async (_, { transactionId }) => {
      try {
        const transaction = await Transaction.findById(transactionId);

        return transaction;
      } catch (err) {
        console.error("Error getting transaction", err);
        throw new Error("Error getting transaction");
      }
    },

    // TODO => Add categorystatiscits query
  },
  Mutation: {},
};

export default transactionResolver;
