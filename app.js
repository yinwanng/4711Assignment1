// modules
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const expressValidator = require('express-validator');

const developmentConnectionURL = "mongodb://localhost:27017/data";
const productionConnectionURL = "mongodb://admin:admin@cluster0-shard-00-00-ddn31.mongodb.net:27017,cluster0-shard-00-01-ddn31.mongodb.net:27017,cluster0-shard-00-02-ddn31.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

// connect to mongodb 
// use developmentConnectionURL for development/testing environment
// use productionConnectionURL for production environment
mongoose.connect(productionConnectionURL, { useNewUrlParser: true })
.then(()=> console.log("Connected to MongoDB...."))
.catch(err => console.error('Could not connect to MongoDB...'));

mongoose.set('useCreateIndex', true);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressValidator());

// setting up routes 
var routes = require('./routes/routers');

// using sessions
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

// listening on env port or 3000
app.listen(process.env.port || 3000, function() {
    console.log('Listening on port 3000...');
});