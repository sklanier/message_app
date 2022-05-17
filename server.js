import {ApolloServer, gql} from 'apollo-server';

const users = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: "john@doe.com",
        password: "123456"
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Doe',
        email: "jane@doe.com",
        password: "123457"
    },
];

const typeDefs = gql`
    type Query {
        greet: String
    }
`

const resolvers = {
    Query: {
        greet: () => 'Hello, World'
    }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});