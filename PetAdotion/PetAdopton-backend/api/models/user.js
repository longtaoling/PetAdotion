'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let UserSchema = new Schema({
    username: {
        type: String,
        required: "username is required",
        unique:true
    },
    password: {
        type: String,
        required: "password is required"
    },
    email: {
        type: String,
        required: "email is required"
    },
    phoneNumber:{
        type:String,
        required: "phone number is required"
    }
}, {
    versionKey: false
});

UserSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

UserSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('users', UserSchema);