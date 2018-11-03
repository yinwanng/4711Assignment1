const express = require('express');
const router = express.Router();
const path = require('path');
var User = require('../public/models/userModel');

// Routing    
router.get('/', function(req, res){
    return res.sendFile(path.join(__dirname, '../public/registrationLogin.html'));
});

// posting score with username to db
router.post('/score', function(req, res, next){    
    User.findById(req.session.userId).exec(function(error, user) {       
        User.findOneAndUpdate({_id: req.session.userId}, { score: req.body.hiddenScoreValue }, ()=>{
            if(error) {
                return next(error);
            } else {
                return res.sendFile(path.join(__dirname, '../public/leaderboard.html'));
            }
        });
    })
});

// login and registration
router.post('/', function(req, res, next){
    // register: check email, username, password
    if(req.body.email && req.body.username && req.body.password) {
        req.checkBody('email', '- Please enter a valid email address for registration.').isEmail();
        var errors = req.validationErrors();
        if(errors) {
            req.session.errors = errors;
            return res.redirect('/');
        } else {
            req.session.errors = null;
        }

        var userData = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            score: "0"
        }
        // create user account
        User.create(userData, function (error) {
            if(error) {
                req.session.errors = [{msg: "- The username or e-mail has already been taken."}];
                return res.redirect('/');
            } else {
                return res.redirect('/');
            }
        });
        
        // login: check email and password
    } else if (req.body.loginEmail && req.body.loginPassword) {
        req.checkBody('loginEmail', '- Please enter a valid email address.').isEmail();
        var errors = req.validationErrors();
        if(errors) {
            req.session.errors = errors;
            return res.redirect('/');
        } else {
            req.session.errors = null;
        }
 
        // login: authenticate user
        User.authenticate(req.body.loginEmail, req.body.loginPassword, function (error, user) {
            if (error || !user) {
                req.session.errors = [{msg: "- The email or password is incorrect."}];
                return res.redirect('/');
            } else {
                req.session.userId = user._id;
                return res.redirect('/user');
            }
        });
    } else {
        var err = new Error('All fields are required.');
        err.status = 400;
        return next(err);
    }
});

// retrieving the user account
router.get('/user', function(req, res, next) {
    User.findById(req.session.userId).exec(function(error, user) {
        if(error) {
            return next(error);
        } else {
            if (user === null) {
                return res.send("<h1>Sorry, you are not authorized.</h1>");
            } else {
                return res.sendFile(path.join(__dirname, '../public/hangman.html'));
            }
        }
    });
})

// retrieve the user's username
router.get('/information', function(req, res, next) {
    User.findById(req.session.userId).exec(function(error, user) {
        var userScore = {
            username: user.username,
            score: user.score
        }
        res.send(userScore);
    });
});

// retrieve the top 10 scores from db
router.get('/score', function(req, res, next){   
    User.find({},{}, { sort: { score: -1 }, }, (err, users) => {
        res.json(users);
   }).limit(10);
});

// destroy session when logged out
router.get('/logout', function (req, res) {
    if(req.session) {
        req.session.destroy(function (err) {
            if(err) {
                next(err);
            } else {
                return res.redirect('/');
            }
        }); 
    }
});

// check validation errors received
router.get('/check', function (req, res) {
    if(req.session.errors) {
        res.send(req.session.errors);
    }
});

module.exports = router;