import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql'  // Adjust this URI to the location of your GraphQL server
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default client;

