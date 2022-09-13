const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Player name is required"],
        minlength: [2, "Player name must be at least two characters long"]
    },
    position: {
        type: String,
        required: false,
        default: ""
    }
}, { timestamps: true });

const Player = mongoose.model('Player', PlayerSchema)
module.exports = Player;