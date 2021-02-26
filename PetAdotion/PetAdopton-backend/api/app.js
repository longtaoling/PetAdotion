'use strict';
module.exports = function (app) {
    //Initialize models
    let applyModel = require('./models/apply');

    //Initialize routes
    let applyRoutes = require('./routes/apply-route');
    applyRoutes(app);

    let userModel = require('./models/user');
    let userRoutes = require('./routes/user-route');
    userRoutes(app);

    let adminModel = require('./models/admin');
    let adminRoutes = require('./routes/admin-route');
    adminRoutes(app);

    let wishModel = require('./models/wish');
    let wishRoutes = require('./routes/wish-route');
    wishRoutes(app);
};