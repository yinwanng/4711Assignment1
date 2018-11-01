// modules
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// connect to mongodb localhost for development/testing
// mongoose.connect("mongodb://localhost:27017/data", { useNewUrlParser: true })
// .then(()=> console.log("Connected to MongoDB...."))
// .catch(err => console.error('Could not connect to MongoDB...'));
// mongoose.set('useCreateIndex', true);

// ->> connect to mongodb live for production environment
mongoose.connect("mongodb://admin:admin@cluster0-shard-00-00-ddn31.mongodb.net:27017,cluster0-shard-00-01-ddn31.mongodb.net:27017,cluster0-shard-00-02-ddn31.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true", { useNewUrlParser: true })
// .then(()=> console.log("Connected to MongoDB...."))
// .catch(err => console.error('Could not connect to MongoDB...'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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

app.listen(process.env.port || 3000, function() {
    console.log('Listening on port 3000...');
});