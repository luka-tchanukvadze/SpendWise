import { ApolloSever } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const server = new ApolloSever({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);

console.log(`Server ready at ${url}`);
