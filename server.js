const express = require('express');

const server = express();
const PORT = process.env.PORT || 8080;

server.use('/', express.static('./'));

server.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
