const Joke = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({jokes: allJokes}))
        // .then(console.log(res))
        .catch(err => res.json({message: 'Something went wrong', error: err}))
}