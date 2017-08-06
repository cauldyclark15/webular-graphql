const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const schema = require('./schema');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')
const mongoose = require('./db/mongoose');

const server = express();
const PORT = process.env.PORT || 8080;

server.use(cors());
server.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
server.use('/', express.static('./'));

server.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
