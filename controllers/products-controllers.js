const HttpError = require('../models/http-error');
const Product = require('../models/product');

const getProducts = async (req, res, next) => {
  let products;
  try {
    products = await Product.find({},['-Ribbons','-SKU']);
  } catch (err) {
    const error = new HttpError(
      'Fetching products failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({ products: products.map(product => product.toObject({ getters: true })) });
};
exports.getProducts = getProducts;