module.exports = {
  port: process.env.PORT || 8000,
  db: {
      database: process.env.DB_NAME || 'broshirts',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'password',
      options: {
          dialect: process.env.DIALECT || 'postgres',
          host: process.env.HOST || 'localhost',
          operatorsAliases: false
      }
  }
}