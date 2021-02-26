'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for todo object.
 */
let ApplySchema = new Schema({
    username:{
        type: String,
        // required: "username is required!",
    },
    firstName: {
        type: String,
        // required: "FirstName is required!",
    },
    lastName: {
        type: String,
        // required: "LastName is required!",
    },
    email: {
        type: String,
        // required: "Email is required!",
    },
    phone: {
        type: String,
        // required: "Phone is required!",
    },
    address:{
        type:String,
        // required: "Address is required!",
    },
    zip: {
        type: String,
        // required: "Zip is required!",
    },
    city: {
        type: String,
        // required: "City is required!",
    },
    state: {
        type: String,
        // required: "State is required!",
    },
}, {
    versionKey: false
});
// Duplicate the id field as mongoose returns _id field instead of id.
ApplySchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
ApplySchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('applys', ApplySchema);