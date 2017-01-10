/**
 * Created by asafam on 26/01/15.
 */

'use strict';


var app = angular.module('clientApp');

/**
 * @ngdoc function
 * @name clientApp.services:Post
 * @description
 * # Post
 * Controller of the clientApp
 */
app.factory('Post', ['$resource', function($resource) {
    return $resource('/api/posts/:id', {}, {
        'query':  { method: 'GET', isArray: true },
        'get':    { method: 'GET' }
    });
}]);
