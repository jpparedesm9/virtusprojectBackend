const express = require('express');
const { check } = require('express-validator');

const productsController = require('../controllers/products-controllers');

const router = express.Router();

router.get('/', productsController.getProducts);

module.exports = router;
