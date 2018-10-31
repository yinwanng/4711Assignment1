const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
    score: Number,
    username: String
});

var Score = mongoose.model('Score', ScoreSchema);
module.exports = Score;