const restify = require('restify');
const Sequelize = require('sequelize');

const config = require('./config');

// setup postgres sequelize connection
const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, config.db.options);

// setup restify server
const server = restify.createServer();

// middleware
server.use(restify.plugins.bodyParser());

// verify db
sequelize.authenticate()
  .then(() => {
    console.log('Databse connected');
  })
  .catch((err) => {
    console.log(`Unable to connect to db: ${err}`);
  })

server.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
})