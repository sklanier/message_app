import {ApolloServer, gql} from 'apollo-server';

// USER SLQ TABLE or NoSQL COLLECTION 
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
        users: [User]
    }

    type User {
        id: ID
        firstName: String
        lastName: String
        email: String
    }
`


const resolvers = {
    Query: {
        users: () => users
    }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at this place: ${url}`);
});