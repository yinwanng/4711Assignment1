const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
    username: String,
    score: Number
});

var Score = mongoose.model('Score', ScoreSchema);
module.exports = Score;