/**
 * Service for wish operations.
 */

'use strict';
const mongoose = require('mongoose'),
    Wish = mongoose.model('wishs');

/**
 * Returns an array of wish object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 */
exports.search = function (params) {
    const promise = Wish.find(params).exec();
    return promise;
};

/**
 * Saves and returns the new wish object.
 *
 * @param {Object} wish {Wish object}
 */
exports.save = function (wish) {
    const newWish = new Wish(wish);
    const promise = newWish.save();
    return promise;
};

/**
 * Returns the wish list object matching the id.
 *
 * @param {string} wishID {Id of the wish object}
 */
exports.get = function (userName) {
    const promise = Wish.findOne({username:userName}).exec();
    return promise
};

/**
 * Updates and returns the wish object.
 *
//  * @param {Object} wish {wish object}
//  */
// exports.update = function (wish) {
//     wish.modified_date = new Date();
//     const promise = Wish.findOneAndUpdate({_id: wish._id}, wish).exec();
//     return promise;
// };

/**
 * Deletes the wish object matching the id.
 *
 * @param {string} wishID {Id of the wish object}
 */
exports.delete = function (userName) {
    const promise = Wish.remove({username:userName});
    return promise;
};