const express = require('express');
const router = express.Router();
const path = require('path');
var User = require('../public/models/userModel');

var bodyParser = require('body-parser')
var app = express()

// parse application/json
// app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))


// Routing    
router.get('/', function(req, res){
    return res.sendFile(path.join(__dirname, '../public/index.html'));
});

// router.get('/score', function(req, res){
//     // return res.sendFile(path.join(__dirname, '../public/index.html'));
//     return res.sendFile(path.join(__dirname, '../public/ranking.html'));
// });

router.post('/score', function(req, res, next){
    // User.findById(req.session.userId).exec(function(error, user) {
    //     return res.redirect('/score');
        
    // });
    console.log(req.body.hiddenScoreValue);
});





router.post('/', function(req, res, next){
    // console.log(req.body.password);
    
    if(req.body.password !== req.body.passwordConfirmation) {
        var err = new Error('The passwords do not match.');
        err.status = 400;
        res.send("The passwords do not match. Please try again.");
        return next(err);
    }

    if(req.body.email && req.body.username && req.body.password && req.body.passwordConfirmation) {
        var userData = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        }

        User.create(userData, function (error, user) {
            if(error) {
                return next(error);
            } else {
                return res.redirect('/about');
            }
        })
    } else if (req.body.loginEmail && req.body.loginPassword) {
        console.log("loginemail: " + req.body.loginEmail);
        console.log("loginpassword: " + req.body.loginPassword);
        User.authenticate(req.body.loginEmail, req.body.loginPassword, function (error, user) {
            if (error || !user) {
                var err = new Error('The email or password is incorrect.');
                err.status = 401;
                //
                res.send("The email or password is incorrect. Please try again");
                return next(err);
            } else {
                req.session.userId = user._id;
                return res.redirect('/user');
            }
        });
    } else {
        var err = new Error('All fields are quired.');
        err.status = 400;
        return next(err);
    }
});

router.get('/user', function(req, res, next) {
    // console.log(req.session.userId);
    User.findById(req.session.userId).exec(function(error, user) {
        if(error) {
            return next(error);
        } else {
            if (user === null) {
                var err = new Error('Sorry, you are not authorized.');
                err.status = 400;
                 return next(err);
            } else {
                // return res.send("<h1>Username: " + user.username + "</h1>");
                return res.sendFile(path.join(__dirname, '../public/hangman.html'));
            }
        }
    })
})

// retrieve username
router.get('/information', function(req, res, next) {
    User.findById(req.session.userId).exec(function(error, user) {
        res.send(user.username);
    });
});

module.exports = router;