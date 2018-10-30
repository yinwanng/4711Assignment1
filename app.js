// modules
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');

// connect to mongodb
mongoose.connect("mongodb://localhost:27017/", { useNewUrlParser: true })
.then(()=> console.log("Connected to MongoDB...."))
.catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./routes/routers');

// applying the routes to application
app.use('/', routes);

app.listen(3000, function() {
    console.log('Listening on port 3000...');
});