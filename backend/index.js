import { ApolloSever } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import mergeResolvers from "./resolvers/index.js";

const server = new ApolloSever({
  typeDefs,
  resolvers: mergeResolvers,
});

const { url } = await startStandaloneServer(server);

console.log(`Server ready at ${url}`);
