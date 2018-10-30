// modules
const mongoose = require('mongoose');
const express = require('express');
const app = express();

// connect to mongodb
mongoose.connect("mongodb://localhost:27017/", { useNewUrlParser: true })
.then(()=> console.log("Connected to MongoDB...."))
.catch(err => console.error('Could not connect to MongoDB...'));

// Router
var router = express.Router();
// Routing    
router.get('/', function(req, res){
    return res.sendFile(__dirname + '/index.html');
});

router.get('/about', function(req, res){
    res.send("About Page");
});

// applying the routes to application
app.use('/', router);

app.listen(3000, function() {
    console.log('Listening on port 3000...');
});