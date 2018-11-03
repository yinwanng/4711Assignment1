const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    score: Number
}); 

UserSchema.statics.authenticate = (email, password, callback) => {
    User.findOne({email: email})
    .exec(function( err, user){
        if(err) {
            return callback(err);
        } else if(!user) {
            let err = new Error("The user cannot be found.");
            err.status = 401;
            return callback(err);
        }
        
        bcrypt.compare(password, user.password, function (err, result) {
            if(result === true) {
                return callback(null, user);
            } else {
                return callback();
            }
        })
    });
}

// hash password
UserSchema.pre('save', function(next) {
    let user = this;
    bcrypt.hash(user.password, 10, function(err, hash) {
        if(err) {
            return next(err);
        }
        user.password = hash;
        next();
    })
})

const User = mongoose.model('User', UserSchema);
module.exports = User;