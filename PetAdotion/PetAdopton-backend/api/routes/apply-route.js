/**
 * Todo endpoint route definitions.
 */

'use strict';
module.exports = function (app) {
    const applyController = require('../controllers/apply-controller');
    // todo Routes for search and create.
    app.route('/applys')
        .get(applyController.list)
        .post(applyController.post);

    // todo Routes for get, update and delete.
    app.route('/applys/:userName')
        .get(applyController.get)
        //.put(applyController.put)
        .delete(applyController.delete);
};