const JokeController = require('../controllers/jokes.controller')

module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes) // return list of all jokes
    app.get('/api/jokes/:_id', JokeController.findOneJoke) // return one joke with matching id
    // app.get('/api/jokes/random') // return a random joke
    app.post('/api/jokes/new', JokeController.createJoke) // create a new joke
    app.put('/api/jokes/update/:_id', JokeController.updateJoke) // update a joke with matching id
    app.delete('/api/jokes/delete/:_id', JokeController.deleteJoke) // remove joke with matching id
}