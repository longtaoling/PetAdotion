/**
 * Controller for WishList endpoints.
 */

'use strict';
//import Wish List service.
const wishService = require('../services/wish-service');
/**
 * Returns a list of WishList Resources in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */

exports.list = function (request, response) {
    const resolve = (wishs) => {
        response.status(200);
        response.json(wishs);
    };
    wishService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Creates a new wishlist with the request JSON and
 * returns wish JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    const newWish = Object.assign({}, request.body);
    const resolve = (wish) => {
        response.status(200);
        response.json(wish);
    };
    wishService.save(newWish)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Returns a wish list object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get = function (request, response) {
    const resolve = (wish) => {
        response.status(200);
        response.json(wish);
    };
    wishService.get(request.params.username)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Updates and returns a wish object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
// exports.put = function (request, response) {
//     const wish = Object.assign({}, request.body);
//     const resolve = (wish) => {
//         response.status(200);
//         response.json(wish);
//     };
//     wish._id = request.params.username;
//     wishService.update(wish)
//         .then(resolve)
//         .catch(renderErrorResponse(response));
// };

/**
 * Deletes a Wish object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.delete = function (request, response) {
    const resolve = (wish) => {
        response.status(200);
        response.json({
            message: 'This Wish List Successfully deleted'
        });
    };
    wishService.delete(request.params.username)
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