import {AppoloServer, gql} from 'apollo-server';

const typeDefs = gql`
    type Query {
        
    }

`

const server = new AppoloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});