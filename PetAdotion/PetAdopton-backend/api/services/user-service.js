'use strict';
const mongoose = require('mongoose'),
    User = mongoose.model('users');


exports.search = function (params) {
    const promise = User.find(params).exec();
    return promise;
};

exports.save = function (user) {
    const newUser = new User(user);
    const promise = newUser.save();
    return promise;
};


exports.get = function (userName) {
    const promise = User.findOne({username:userName}).exec();
    return promise
};


exports.update = function (user) {
    const promise = User.findOneAndUpdate({username: user.username}, user).exec();
    return promise;
};

