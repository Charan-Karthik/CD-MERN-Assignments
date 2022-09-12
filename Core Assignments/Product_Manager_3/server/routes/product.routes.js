const ProductController = require('../controllers/product.controller')
// const Product = require('../models/product.model')

module.exports = function(app){
    app.get('/api/products', ProductController.findAllProducts);
    app.post('/api/products/new', ProductController.createProduct);
    app.get('/api/products/:id', ProductController.findOneByID);
    app.delete('/api/products/:id', ProductController.deleteProduct);
    app.put('/api/products/:id', ProductController.updateProduct);
}