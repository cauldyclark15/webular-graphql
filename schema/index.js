const { makeExecutableSchema } = require('graphql-tools');
const Resolvers = require('../resolvers');
const Types = require('../types');
const RootQuery = require('./query');
const RootMutation = require('./mutation');

const SchemaDefinition = `
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [
    SchemaDefinition,
    RootQuery,
    RootMutation,
    Types
  ],
  resolvers: Resolvers
});

module.exports = schema;
