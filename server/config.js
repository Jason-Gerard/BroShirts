const Sequelize = require('sequelize');

module.exports = {
  port: process.env.PORT || 8000,
  db: new Sequelize(process.env.DB_NAME || 'broshirts', process.env.DB_USER || 'postgres', process.env.DB_PASS || 'password', {
    dialect: process.env.DIALECT || 'postgres',
    host: process.env.HOST || 'localhost',
    operatorsAliases: false
  })
}