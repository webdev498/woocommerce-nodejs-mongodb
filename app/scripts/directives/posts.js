'use strict';


var app = angular.module('clientApp');

/**
 * @ngdoc directive
 * @name clientApp.directive:posts
 * @description
 * # posts
 */
app.directive('posts', function () {
    return {
        templateUrl: 'views/posts/_posts.html',
        restrict: 'E'
    };
});
