const { ApolloServer, gql } = require('apollo-server');

// Array to store todo items
let todos = [
  { id: 1, text: "Learn GraphQL", isCompleted: false },
  { id: 2, text: "Build an app", isCompleted: true }
];

// Type definitions (schema)
const typeDefs = gql`
  type Todo {
    id: ID!
    text: String!
    isCompleted: Boolean!
  }

  type Query {
    todos: [Todo]
  }

  type Mutation {
    addTodo(text: String!): Todo
    toggleTodo(id: ID!): Todo
    deleteTodo(id: ID!): Boolean
  }
`;

// Resolvers define the technique for fetching the types defined in the schema
const resolvers = {
  Query: {
    todos: () => todos,
  },
  Mutation: {
    addTodo: (_, { text }) => {
      const newTodo = { id: todos.length + 1, text, isCompleted: false };
      todos.push(newTodo);
      return newTodo;
    },
    toggleTodo: (_, { id }) => {
      const todo = todos.find(todo => todo.id === parseInt(id));
      if (!todo) return null;
      todo.isCompleted = !todo.isCompleted;
      return todo;
    },
    deleteTodo: (_, { id }) => {
      const lengthBefore = todos.length;
      todos = todos.filter(todo => todo.id !== parseInt(id));
      return lengthBefore > todos.length;
    }
  }
};

// Create the Apollo Server instance
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

