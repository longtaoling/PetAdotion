/**
 * Service for todo operations.
 */

'use strict';
const mongoose = require('mongoose'),
    Apply = mongoose.model('applys');

/**
 * Returns an array of todo object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 */
exports.search = function (params) {
    const promise = Apply.find(params).exec();
    return promise;
};

/**
 * Saves and returns the new todo object.
 *
 * @param {Object} sticky {Todo object}
 */
exports.save = function (apply) {
    const newApply = new Apply(apply);
    const promise = newApply.save();
    return promise;
};

/**
 * Returns the todo object matching the id.
 *
 * @param {string} stickyId {Id of the todo object}
 */
exports.get = function (userName) {
    const promise = Apply.findOne({username:userName}).exec();
    return promise
};

/**
 * Updates and returns the todo object.
 *
 * @param {Object} sticky {todo object}
 */
/*exports.update = function (todo) {
    todo.modified_date = new Date();
    const promise = Todo.findOneAndUpdate({_id: todo._id}, todo).exec();
    return promise;
};*/

/**
 * Deletes the todo object matching the id.
 
 * @param {string} stickyId {Id of the todo object}
 */
exports.delete = function (userName) {
    const promise = Apply.remove({serName:userName});
    return promise;
};