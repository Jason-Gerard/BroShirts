const Sequelize = require('sequelize');
const { db } = require('../config');

const Product = db.define('product', {
  productName: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.FLOAT
  },
  productImage: {
    type: Sequelize.STRING
  },
  category: {
    type: Sequelize.STRING
  }
});

module.exports = Product;