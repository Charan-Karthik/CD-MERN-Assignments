const {Product} = require('../models/product.model')

module.exports.index = (request, response) => {
    response.json({
        testing: "this is a test"
    })
}

module.exports.findAllProducts = (request, response) => {
    Product.find()
        .then(allProducts => response.json({jokes: allProducts}))
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}