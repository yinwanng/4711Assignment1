// modules
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// connect to mongodb
mongoose.connect("mongodb://localhost:27017/data", { useNewUrlParser: true })
.then(()=> console.log("Connected to MongoDB...."))
.catch(err => console.error('Could not connect to MongoDB...'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./routes/routers');

app.use(session({
    secret: 'secret cat',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    })
}));

// applying the routes to application
app.use('/', routes);

app.listen(3000, function() {
    console.log('Listening on port 3000...');
});