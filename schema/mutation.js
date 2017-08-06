const RootMutation = `
  type RootMutation {
    serviceCreate(serviceKey: String, name: String, supplierCount: Int, description: String, tags: [String]): Service
    serviceUpdate(serviceId: ID!,serviceKey: String, name: String, supplierCount: Int, description: String, tags: [String]): Service
    serviceDelete(serviceId: ID!): Service
    accountCreate(companyName: String, services: [String], address: String, address2: String, city: String, state: String, zip: String, phone: String, email: String): Account
    accountUpdate(accountId: ID!, companyName: String, services: [String], address: String, address2: String, city: String, state: String, zip: String, phone: String, email: String): Account
    accountDelete(accountId: ID!): Account
  }
`;

module.exports = RootMutation;
