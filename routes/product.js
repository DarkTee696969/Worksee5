const express = require('express');
const router = express.Router();
const Product = require('../model/product');
 // Adjust the path as per your project structure
    
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/productController'); 
router.get('/products', getProducts);
router.get('/product/:id', getProduct);
router.post('/product', createProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id',  deleteProduct);

module.exports = router;