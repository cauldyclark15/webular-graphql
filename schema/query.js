const RootQuery = `
  type RootQuery {
    services(q: String): [Service]
    service(serviceId: ID!): Service
  }
`;

module.exports = RootQuery;
