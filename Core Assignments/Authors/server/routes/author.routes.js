const AuthorController = require('../controllers/author.controller');

module.exports = function(app) {
    app.get('/api/authors', AuthorController.findAllAuthors);
    app.get('/api/authors/:id', AuthorController.findOneByID);
    app.post('/api/authors/new', AuthorController.createAuthor);
    app.put('/api/authors/:id/update', AuthorController.updateAuthor);
    app.delete('/api/authors/:id/delete', AuthorController.deleteAuthor);
}