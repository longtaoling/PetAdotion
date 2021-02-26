'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for wish object.
 */
let WishSchema = new Schema({
    /**
     * Category.
     */
    username:{
        type: String,
        required:"Username is required!"
    },
    Category: {
        type: String,
        required: "Category is required!"
    },
    
    /**
     * Breed.
     */
    Breed: {
        type: String,
        required: "Breed is required!"
    },
    /**
     * Color*
     */
    Color: {
        type: String
    },

    /**
     * Gendar.
     */
    Gendar: {
        type: String,
        
    },

    Age: {
        type: String,
        
    },

    SpecialR: {
        type: String,
        
    }
    
}, {
    versionKey: false
});
// Duplicate the id field as mongoose returns _id field instead of id.
WishSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
WishSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('wishs', WishSchema);