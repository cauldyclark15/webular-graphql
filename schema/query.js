const RootQuery = `
  type RootQuery {
    services(q: String): [Service]
    service(serviceId: ID!): Service
    accounts(q: String): [Account]
    account(serviceId: ID!): Account
  }
`;

module.exports = RootQuery;
