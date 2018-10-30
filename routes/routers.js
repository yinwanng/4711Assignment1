const express = require('express');
const router = express.Router();
const path = require('path');
var User = require('../models/userModel');

// Routing    
router.get('/', function(req, res){
    return res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/about', function(req, res){
    // return res.sendFile(path.join(__dirname, '../public/index.html'));
    return res.send("About");
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
    
    }
});


module.exports = router;