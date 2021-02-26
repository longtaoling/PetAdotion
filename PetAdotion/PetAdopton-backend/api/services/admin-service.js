'use strict';
const mongoose = require('mongoose'),
    Admin = mongoose.model('admins');


exports.search = function (params) {
    const promise = Admin.find(params).exec();
    return promise;
};


exports.get = function (userName) {
    const promise = Admin.findOne({username:userName}).exec();
    return promise
};
exports.save = function (admin) {
    const newAdmin = new Admin(admin);
    const promise = newAdmin.save();
    return promise;
};


