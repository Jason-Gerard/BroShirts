const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.route('/')
  // all products
  .get(async (req, res, next) => {
    try {
      // get all products from db
      const products = await Product.findAll();

      // returns array of all products
      res.status(200).json({
        products
      });
    } catch (err) {
      res.status(500).json({
        error: `There was an error getting all products: ${err}`
      });
    }
  })

router.route('/men')
  // get all mens products
  .get(async (req, res, next) => {
    try {
      // get all mens products from db
      const mensProducts = await Product.findAll({
        where: {
          category: 'men'
        }
      });

      // returns array of all mens products
      res.status(200).json({
        products: mensProducts
      });
    } catch (err) {
      res.status(500).json({
        error: `There was an error getting all mens products: ${err}`
      });
    }
  })

router.route('/women')
  // get all womens products
  .get(async (req, res, next) => {
    try {
      // get all mens products from db
      const womenProducts = await Product.findAll({
        where: {
          category: 'women'
        }
      });

      // returns array of all womens products
      res.status(200).json({
        products: womenProducts
      });
    } catch (err) {
      res.status(500).json({
        error: `There was an error getting all womens products: ${err}`
      });
    }
  })

router.route('/:productId')
  // get a single product by id
  .get(async (req, res, next) => {
    try {
      // get id of product
      const productId = req.params.productId;

      // get product by given id
      const product = await Product.findByPk(productId);

      // check if product was found
      if (!product) throw `There is no product with the id of ${productId}`;

      // return back product
      res.status(200).json({
        product
      });
    } catch (err) {
      res.status(500).json({
        error: err
      });
    }
  })

module.exports = router;