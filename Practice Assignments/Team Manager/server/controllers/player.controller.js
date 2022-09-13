const Player = require('../models/player.model')

module.exports.findAllPlayers = (request, response) => {
    Player.find()
        .then(allPlayers => response.json(allPlayers))
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.createPlayer = (request, response) => {
    console.log(request.body)
    Player.create(request.body)
        .then(newPlayer => response.json(newPlayer))
        .catch(err => response.status(400).json(err))
}

module.exports.findOnePlayer = (request, response) => {
    Player.findOne({ _id: request.params.id })
        .then(player => response.json(player))
        .catch(err => response.json(err))
}

module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}

module.exports.updatePlayer = (req, res) => {
    Player.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedPlayer => res.json(updatedPlayer))
        .catch(err => res.status(400).json(err))
}