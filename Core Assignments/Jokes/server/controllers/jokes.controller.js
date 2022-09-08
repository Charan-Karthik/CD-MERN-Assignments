const Joke = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        // .then(console.log(res))
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params._id })
        .then(oneJoke => res.json({ joke: oneJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(createdJoke => res.json({ joke: createdJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.join({ joke: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}