const Account = `
  type Account {
    _id: ID!
    companyName: String!
    services: [Service]
    address: String
    address2: String
    city: String
    state: String
    zip: String
    phone: String
    email: String
  }
`;

module.exports = Account;
