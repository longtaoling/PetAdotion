
'use strict';
//import todo service.
const applyService = require('../services/apply-service');
/**
 * Returns a list of todolist in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function (request, response) {
    const resolve = (applys) => {
        response.status(200);
        response.json(applys);
    };
    applyService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Creates a new todo list with the request JSON and
 * returns todolist JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    const newApply = Object.assign({}, request.body);
    const resolve = (applys) => {
        response.status(200);
        response.json(applys);
    };
    applyService.save(newApply)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Returns a todolist object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get = function (request, response) {
    const resolve = (apply) => {
        response.status(200);
        response.json(apply);
    };
    applyService.get(request.params.username)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Updates and returns a todolist object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
/*exports.put = function (request, response) {
    const todo = Object.assign({}, request.body);
    const resolve = (apply) => {
        response.status(200);
        response.json(apply);
    };
    apply.userName= request.params.userName;
    todoService.update(todo)
        .then(resolve)
        .catch(renderErrorResponse(response));
};*/

/**
 * Deletes a todolist object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.delete = function (request, response) {
    const resolve = (apply) => {
        response.status(200);
        response.json({
            message: 'ApplyList Successfully deleted'
        });
    };
    applyService.delete(request.params.username)
        .then(resolve)
        .catch(renderErrorResponse(response));
};
/**
 * Throws error if error object is present.
 *
 * @param {Response} response The response object
 * @return {Function} The error handler function.
 */
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