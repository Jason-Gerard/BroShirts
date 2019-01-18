const Sequelize = require('sequelize');

// new sequlize for seed connection
const sequelize = new Sequelize(process.env.DB_NAME || 'broshirts', process.env.DB_USER || 'postgres', process.env.DB_PASS || 'password', {
  dialect: process.env.DIALECT || 'postgres',
  host: process.env.HOST || 'localhost',
  operatorsAliases: false
});

// imports model
const Product = require('../models/product');

// import json seed data
const seedProducts = require('./products.json');

// wipes table
Product.destroy({
	where: {},
	truncate: true
});

// syncs db with force to true to reset the db
sequelize
	.sync({ force: true })
	.then(() => {
		// add all seed products to db
		seedProducts.map(product => {
			Product.create(product);
    });
    
  })
	.catch(error => {
		console.log(`Error with db seed: ${error}`);
  })