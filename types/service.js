const Service = `
  type Service {
    id: ID!
    serviceKey: String
    name: String
    supplierCount: Int
    description: String
    tags: [String]
  }
`;

module.exports = Service;
