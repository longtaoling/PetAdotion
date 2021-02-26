/**
 * Wish endpoint route definitions.
 */

'use strict';
module.exports = function (app) {
    const wishController = require('../controllers/wish-controller');
    // Wish list Routes for search and create.
    app.route('/wishs')
        .get(wishController.list)
        .post(wishController.post);

    // Wish Routes for get, update and delete.
    app.route('/wishs/:username')
        .get(wishController.get)
        // .put(wishController.put)
        .delete(wishController.delete);
};