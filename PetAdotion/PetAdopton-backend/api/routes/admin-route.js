'use strict';
module.exports = function (app) {
    const adminController = require('../controllers/admin-controller');
    app.route('/admins')

        .post(adminController.post);

    app.route('/admins/:username')
        .get(adminController.get)

};