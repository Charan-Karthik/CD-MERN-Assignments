const JokeController = require('../controllers/jokes.controller')
const Joke = require('../models/jokes.model')

module.exports = app => {
    app.get('/api/jokes/random', JokeController.findAllJokes) // return a random joke
    app.get('/api/jokes/:_id', JokeController.findOneJoke) // return one joke with matching id
    app.post('/api/jokes/new', JokeController.createJoke) // create a new joke
    app.put('/api/jokes/update/:_id', JokeController.updateJoke) // update a joke with matching id
    app.delete('/api/jokes/delete/:_id', JokeController.deleteJoke) // remove joke with matching id
    
    app.get('/api/jokes', JokeController.findAllJokesV2) // return a list of all jokes
}