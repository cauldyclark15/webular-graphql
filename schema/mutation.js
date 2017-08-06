const RootMutation = `
  type RootMutation {
    serviceCreate(serviceKey: String, name: String, supplierCount: Int, description: String, tags: [String]): Service
    serviceUpdate(serviceId: ID!,serviceKey: String, name: String, supplierCount: Int, description: String, tags: [String]): Service
    serviceDelete(serviceId: ID!): Service
  }
`;

module.exports = RootMutation;
