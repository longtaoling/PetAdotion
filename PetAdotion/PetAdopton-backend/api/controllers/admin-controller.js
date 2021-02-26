
'use strict';

const adminService = require('../services/admin-service');


exports.get = function (request, response) {
    const resolve = (admin) => {
        response.status(200);
        response.json(admin);
    };
    adminService.get(request.params.username)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

exports.post = function (request, response) {
    const newAdmin = Object.assign({}, request.body);
    const resolve = (admin) => {
        response.status(200);
        response.json(admin);
    };
   adminService.save(newAdmin)
        .then(resolve)
        .catch(renderErrorResponse(response));
};


let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};