const { request, response } = require('express')
const Product = require('../models/product.model')

module.exports.index = (request, response) => {
    response.json({
        testing: "this is a test"
    })
}

module.exports.findAllProducts = (request, response) => {
    Product.find()
        .then(allProducts => response.json(allProducts))
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then(newProduct => response.json(newProduct))
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.findOneByID = (request, response) => {
    Product.findOne({ _id: request.params.id })
        .then(product => response.json(product))
        // .then(product => console.log(product))
        .catch(err => response.json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err));
}