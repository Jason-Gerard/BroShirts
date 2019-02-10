const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');

// setup postgres sequelize connection
const sequelize = config.db;

// verify db
sequelize.authenticate()
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.log(`Unable to connect to db: ${err}`);
  })

// set up express
const app = express();

// static folder middleware
app.use('/public', express.static('public'));

// body-parser middleware
app.use(bodyParser.json());

// routes
app.use('/api/products', require('./routes/products'));

// 404 errors
app.use((req, res, next) => {
  res.status(404).json({
      error: '404 Page not found'
  });
})

// opens port on 8000
app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
})