const mongoose = require('mongoose');
const express = require('express');
const app = express();


mongoose.connect("mongodb://localhost:27017/", { useNewUrlParser: true })
    .then(()=> console.log("Connected to MongoDB...."))
    .catch(err => console.error('Could not connect to MongoDB...'));


app.listen(3000, function() {
    console.log('Listening on port 3000...');
});