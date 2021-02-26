
'use strict';

const userService = require('../services/user-service');

exports.list = function (request, response) {
    const resolve = (users) => {
        response.status(200);
        response.json(users);
    };
    userService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};


exports.post = function (request, response) {
    const newUser = Object.assign({}, request.body);
    const resolve = (user) => {
        response.status(200);
        response.json(user);
    };
    userService.save(newUser)
        .then(resolve)
        .catch(renderErrorResponse(response));
};


exports.get = function (request, response) {
    const resolve = (user) => {
        response.status(200);
        response.json(user);
    };
    userService.get(request.params.username)
        .then(resolve)
        .catch(renderErrorResponse(response));
};


exports.put = function (request, response) {
    const user = Object.assign({}, request.body);
    const resolve = (user) => {
        response.status(200);
        response.json(user);
    };
    user.username = request.params.username;
    userService.update(user)
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