'use strict';
module.exports = function (app) {
    const userController = require('../controllers/user-controller');

    app.route('/users')
        .get(userController.list)
        .post(userController.post);

    // Sticky Routes for get, update and delete.
    app.route('/users/:username')
        .get(userController.get)
        .put(userController.put)
};