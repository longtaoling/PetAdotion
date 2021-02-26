'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let AdminSchema = new Schema({
    username: {
        type: String,
        required: "username is required"
    },
    password: {
        type: String,
        required: "password is required"
    }
}, {
    versionKey: false
});

AdminSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
AdminSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('admins', AdminSchema);