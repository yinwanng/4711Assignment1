const express = require('express');
const router = express.Router();
const path = require('path');
var User = require('../public/models/userModel');
var Score = require('../public/models/scoreModel');

// Routing    
router.get('/', function(req, res){
    return res.sendFile(path.join(__dirname, '../public/registrationLogin.html'));
});

// posting score with username to db
router.post('/score', function(req, res, next){    
    User.findById(req.session.userId).exec(function(error, user) {       
        var scoreData = {  
            username: user.username,
            score: req.body.hiddenScoreValue,
        }
        Score.create(scoreData, function (error, score) {
            if(error) {
                return next(error);
            } else {
                return res.sendFile(path.join(__dirname, '../public/leaderboard.html'));
            }
        })
    })
});

// login and registration
router.post('/', function(req, res, next){
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
                req.session.userId = user._id;
                return res.redirect('/user');
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

// retrieving the user account
router.get('/user', function(req, res, next) {
    User.findById(req.session.userId).exec(function(error, user) {
        if(error) {
            return next(error);
        } else {
            if (user === null) {
                var err = new Error('Sorry, you are not authorized.');
                err.status = 400;
                 return next(err);
            } else {
                return res.sendFile(path.join(__dirname, '../public/hangman.html'));
            }
        }
    })
})

// retrieve the user's username
router.get('/information', function(req, res, next) {
    User.findById(req.session.userId).exec(function(error, user) {
        res.send(user.username);
    });
});

// retrieve all the scores in db
router.get('/score', function(req, res, next){   
    Score.find({}, (err, scores) => {
        res.json(scores);
   });
});

router.get('/logout', function (req, res) {
    if(req.session) {
        req.session.destroy(function (err) {
            if(err) {

            } else {
                return res.redirect('/');
            }
        }); 
    }
})

module.exports = router;