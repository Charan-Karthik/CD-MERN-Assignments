const Author = require('../models/author.model');

module.exports.findAllAuthors = (request, response) => {
    Author.find()
        .then(allAuthors => {
            allAuthors.sort((a, b) => (a.name > b.name) ? 1 : -1)
            return response.json(allAuthors)
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.createAuthor = (request, response) => {
    Author.create(request.body)
        .then(newAuthor => response.json(newAuthor))
        .catch(err => response.status(400).json(err))
}

module.exports.findOneByID = (request, response) => {
    Author.findOne({ _id: request.params.id })
        .then(author => response.json(author))
        .catch(err => response.json(err))
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err))
}